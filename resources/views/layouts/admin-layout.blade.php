<!doctype html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Dadan Nurmaulana">
    <title>{{ $title ?? 'Administrator - putrapantura.com' }}</title>
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="icon" href="/img/icon.ico" />
    <link href="/fontawesome/css/fontawesome.css" rel="stylesheet">
    <link href="/fontawesome/css/brands.css" rel="stylesheet">
    <link href="/fontawesome/css/solid.css" rel="stylesheet">
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/offcanvas.css" rel="stylesheet">

    <script src="/ckeditor/ckeditor.js"></script>
    <script src="/js/jquery-3.6.0.js"></script>
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>

</head>

<body class="bg-light">

    <x-navbar></x-navbar>

    <main class="container">
        {{ $slot }}
    </main>


</body>
<script src="/js/bootstrap.bundle.min.js"></script>
<script src="/js/offcanvas.js"></script>

<script>
    const options = {
        filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
        filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
        filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
        filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='
    };
    CKEDITOR.replace('editor1', options);

    // Load Filemanager
    var route_prefix = "laravel-filemanager";
    $('#lfm').filemanager('image', {
        prefix: route_prefix
    });
</script>

</html>
