angular.module('app.controllers')
    .controller('ProjetoListaController', ['$scope', 'ProjetoService', function ($scope, ProjetoService) {
        $scope.projetos = ProjetoService.query();

        $scope.excluir = function (id) {
            ProjetoService.$delete(id);
        }
    }]);