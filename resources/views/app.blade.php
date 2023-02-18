<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-185896191-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-185896191-1');
    </script>

    <!-- our project just needs Font Awesome Solid + Brands -->
    <link rel="icon" href="/img/icon.ico" />
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
