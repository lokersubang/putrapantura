<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    {{-- <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/offcanvas.css">


    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-light" style="font-family: 'Lexend Deca', sans-serif;">
    @inertia
</body>

</html>

<script>
    // var lfm = function(id, type, options) {
    //     let button = document.getElementById(id);

    //     button.addEventListener('click', function() {
    //         var route_prefix = (options && options.prefix) ? options.prefix : '/laravel-filemanager';
    //         var target_input = document.getElementById(button.getAttribute('data-input'));
    //         var target_preview = document.getElementById(button.getAttribute('data-preview'));

    //         window.open(route_prefix + '?type=' + options.type || 'file', 'FileManager',
    //             'width=900,height=600');
    //         window.SetUrl = function(items) {
    //             var file_path = items.map(function(item) {
    //                 return item.url;
    //             }).join(',');

    //             // set the value of the desired input to image url
    //             target_input.value = file_path;
    //             target_input.dispatchEvent(new Event('change'));

    //             // clear previous preview
    //             target_preview.innerHtml = '';

    //             // set or change the preview image src
    //             items.forEach(function(item) {
    //                 let img = document.createElement('img')
    //                 img.setAttribute('style', 'height: 5rem')
    //                 img.setAttribute('src', item.thumb_url)
    //                 target_preview.appendChild(img);
    //             });

    //             // trigger change event
    //             target_preview.dispatchEvent(new Event('change'));
    //         };
    //     });
    // };
    // var route_prefix = "laravel-filemanager";
    // lfm('lfm', 'image', {
    //     prefix: route_prefix
    // });
</script>
