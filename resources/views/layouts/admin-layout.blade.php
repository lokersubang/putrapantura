<!doctype html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Dadan Nurmaulana">
    <title>{{ $title ?? 'Administrator - lokersubang.com' }}</title>
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/offcanvas-navbar/">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/offcanvas.css" rel="stylesheet">
</head>

<body class="bg-light" style="font-family: 'Nunito'">

    <x-navbar></x-navbar>

    <main class="container">
        {{ $slot }}
    </main>


    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/offcanvas.js"></script>
</body>

</html>
