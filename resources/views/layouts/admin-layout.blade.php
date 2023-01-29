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

    <script src="/ckeditor/ckeditor.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>

</head>

<body class="bg-light" style="font-family: 'Nunito'">

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
