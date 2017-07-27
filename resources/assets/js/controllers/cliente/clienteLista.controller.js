angular.module('app.controllers')
    .controller('ClienteListaController', ['$scope', 'ClientService', function ($scope, ClientService) {
        $scope.clientes = ClientService.query();
    }]);