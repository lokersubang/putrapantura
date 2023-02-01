<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-185896191-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-185896191-3');
</script>


<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
     crossorigin="anonymous"></script>


    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    {{-- <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap" rel="stylesheet"> --}}

    <!-- our project just needs Font Awesome Solid + Brands -->
    <link href="/fontawesome/css/fontawesome.css" rel="stylesheet">
    <link href="/fontawesome/css/brands.css" rel="stylesheet">
    <link href="/fontawesome/css/solid.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/offcanvas.css">


    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

{{-- <body class="font-sans antialiased bg-light" style="font-family: 'Lexend Deca', sans-serif;"> --}}

<body class="font-sans antialiased bg-light">
    @inertia
</body>

</html>
