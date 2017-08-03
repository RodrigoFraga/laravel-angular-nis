<!DOCTYPE html>
<html ng-app="app">
<head>
    <title>Laravel</title>

    <meta charset="utf-8">
    <!--Import materialize.css-->
    <link rel="stylesheet" href="css/vendor/materialize.min.css">
    <link rel="stylesheet" type="text/css" href="css/app.css">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<header>
    <div ng-include="'html/menu/header.html'"></div>
</header>

<main>
    <div ng-view></div>
</main>

<footer class="page-footer blue darken-1">
    <div ng-include="'html/menu/footer.html'"></div>
</footer>


<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/vendor/angular.min.js"></script>
<script type="text/javascript" src="js/vendor/angular-route.js"></script>
<script type="text/javascript" src="js/vendor/materialize.min.js"></script>

<script type="text/javascript" src="js/material-jquery.js"></script>

<script type="text/javascript" src="js/app.js"></script>
<script type="text/javascript" src="js/controllers/projetos/projetoLista.controller.js"></script>
<script type="text/javascript" src="js/controllers/projetos/projetoCadastro.controller.js"></script>

<script type="text/javascript" src="js/controllers/cliente/clienteLista.controller.js"></script>

<script type="text/javascript" src="js/services/Projeto.service.js"></script>
<script type="text/javascript" src="js/services/Client.service.js"></script>
</body>
</html>
