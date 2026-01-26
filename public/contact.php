<?php
/**
 * Contact Form Handler
 * 
 * Handles contact form submissions from React frontend
 * Sends email to info@neomengage.com
 * Returns JSON response for React to display
 */

// Set headers for JSON response and CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get the raw POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// If JSON parsing failed, try form data
if ($data === null) {
    $data = $_POST;
}

/**
 * Sanitize input to prevent XSS and injection attacks
 */
function sanitizeInput($input) {
    if (is_string($input)) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
        // Remove any newlines to prevent header injection
        $input = str_replace(["\r", "\n"], '', $input);
    }
    return $input;
}

/**
 * Validate email format
 */
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Extract and sanitize form fields
$name = isset($data['name']) ? sanitizeInput($data['name']) : '';
$email = isset($data['email']) ? sanitizeInput($data['email']) : '';
$phone = isset($data['phone']) ? sanitizeInput($data['phone']) : '';
$service = isset($data['service']) ? sanitizeInput($data['service']) : '';
$consent = isset($data['consent']) ? (bool)$data['consent'] : false;

// Validation errors array
$errors = [];

// Required field validation
if (empty($name)) {
    $errors[] = 'Name is required';
}
if (strlen($name) > 100) {
    $errors[] = 'Name must be less than 100 characters';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!isValidEmail($email)) {
    $errors[] = 'Please provide a valid email address';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required';
}
if (strlen($phone) > 30) {
    $errors[] = 'Phone number must be less than 30 characters';
}

// Check consent
if (!$consent) {
    $errors[] = 'You must agree to receive communications';
}

// Return validation errors if any
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode('. ', $errors)
    ]);
    exit();
}

// Prepare email content
$to = 'info@neomengage.com';
$subject = 'New Contact Form Submission - NeoMengage';

// Build email body
$emailBody = "
===========================================
NEW CONTACT FORM SUBMISSION
===========================================

FROM: {$name}
EMAIL: {$email}
PHONE: {$phone}

-------------------------------------------
SERVICE INQUIRY:
-------------------------------------------
{$service}

-------------------------------------------
Submitted: " . date('Y-m-d H:i:s') . "
Consent Given: Yes
===========================================
";

// Email headers
$headers = [
    'From: noreply@neomengage.com',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// Send email
$mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at info@neomengage.com'
    ]);
}
