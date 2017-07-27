var app = angular.module('app', [ 'app.controllers', 'app.services',
    'ngRoute'
]);

angular.module('app.controllers', []);
angular.module('app.services', []);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html'
        })
        .when('/projetos', {
            templateUrl: 'html/projeto/lista.html',
            controller: 'ProjetoListaController'
        })
        .when('/projetos/cadastro', {
            templateUrl: 'html/projeto/cadastro.html',
            controller: 'ProjetoCadastroController'
        })
        .when('/projetos/:id/edit', {
            templateUrl: 'html/projeto/cadastro.html',
            controller: 'ProjetoCadastroController'
        })

        /** Clientes*/
        .when('/clientes', {
            templateUrl: 'html/cliente/lista.html',
            controller: 'ClienteListaController'
        })
        .when('/clientes/cadastro', {
            templateUrl: 'html/cliente/cadastro.html',
            controller: 'ClienteCadastroController'
        })
        .when('/clientes/:id/edit', {
            templateUrl: 'html/cliente/cadastro.html',
            controller: 'ClienteCadastroController'
        })
        .otherwise('/');
}]);



