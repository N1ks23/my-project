<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Leonisis M. Asis | Portfolio</title>
  <meta name="description" content="Portfolio of Leonisis M. Asis">
  <script>
    document.documentElement.classList.add('js');
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
  <div class="bg-particles" aria-hidden="true"></div>
  <main class="page">
    @yield('content')
  </main>

  <script src="{{ asset('js/main.js') }}"></script>
</body>
</html>
