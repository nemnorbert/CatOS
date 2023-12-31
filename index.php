<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css?v=<?= time() ?>">
    <title>RedOS</title>
</head>
<body>
<div id="preLoader">
    <div id="loadingCircle">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="logo">
            <div class="name">RedOS</div>
            <div class="text">loading</div>
        </div>
    </div>
    
    <div id="boot">
        <div>Üdvözlünk</div>
        <div class="btn">Indítás</div>
    </div>

    <a class="poweredby" target="_blank" href="https://me.red-cat.hu">
        <div>Powered by</div>
        <img src="./img/logo1.svg" alt="Logo of Creator">
    </a>
</div>

<main>
    <nav class="statusbar">
        <div class="menu">MENU</div>
        <div id="time">??:??</div>
    </nav>

    <nav class="menubar">
        <div class="icon calculator"></div>
        <div class="icon browser"></div>
        <div class="icon settings"></div>
    </nav>
</main>

<script src="./js/main.js"></script>
</body>
</html>