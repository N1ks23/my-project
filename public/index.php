<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

if (($_SERVER['REQUEST_URI'] ?? '') === '/index.php') {
    http_response_code(404);
    header('Content-Type: text/html; charset=UTF-8');
    echo '<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 | Not Found</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: light;
      --bg: #f7f8fb;
      --text: #0b1220;
      --muted: #5b667a;
      --brand: #2563eb;
      --accent: #f97316;
      --card: #ffffff;
      --line: #e4e8f0;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Sora", system-ui, sans-serif;
      background:
        radial-gradient(800px 320px at 10% -10%, rgba(37, 99, 235, 0.08), transparent 60%),
        radial-gradient(700px 300px at 96% 0%, rgba(34, 193, 255, 0.08), transparent 62%),
        var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 2rem;
    }
    .card {
      max-width: 560px;
      width: 100%;
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 2.2rem;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
      text-align: center;
    }
    .code {
      font-size: 4.2rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--brand);
      margin: 0 0 0.4rem;
    }
    h1 {
      margin: 0 0 0.6rem;
      font-size: 1.6rem;
    }
    p {
      margin: 0 0 1.4rem;
      color: var(--muted);
      line-height: 1.6;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: #fff;
      background: linear-gradient(120deg, var(--brand), #22c1ff);
      padding: 0.7rem 1.4rem;
      border-radius: 999px;
      font-weight: 600;
      box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="code">404</div>
    <h1>Page not found</h1>
    <p>The URL you tried to open isn’t available. Head back to the portfolio.</p>
   
  </div>
  <script> // Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable inspect keys
document.onkeydown = function(e) {
    if (e.keyCode == 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) return false; // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) return false; // Ctrl+Shift+J
    if (e.ctrlKey && e.keyCode == 85) return false; // Ctrl+U
};
</script> 
</body>
</html>';
    exit;
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
(require_once __DIR__.'/../bootstrap/app.php')
    ->handleRequest(Request::capture());

    