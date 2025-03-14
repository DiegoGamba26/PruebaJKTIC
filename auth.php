<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$valid_users = [
    "diegomorenogamba28@gmail.com" => "123456"
];

$email = $data["email"];
$password = $data["password"];

if (isset($valid_users[$email]) && $valid_users[$email] === $password) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciales incorrectas"]);
}
?>
