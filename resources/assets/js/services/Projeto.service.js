angular.module('app.services')
    .service('ProjetoService', [function () {
        var projetos = [
            {
                id: 1,
                name: 'PBL-VS Lab',
                client_id: 1,
                price: 0,
                phone: 7599188667,
            }, {
                id: 2,
                name: 'Alvin',
                client_id: 2,
                price: 50.5,
                phone: 75989188667,
            }, {
                id: 3,
                name: 'Alvin',
                client_id: 2,
                price: 50.5,
                phone: 75989188667,
            }, {
                id: 4,
                name: 'Alvin',
                client_id: 2,
                price: 50.5,
                phone: 75989188667,
            }, {
                id: 5,
                name: 'Alvin',
                client_id: 2,
                price: 50.5,
                phone: 75989188667,
            }];

        var query = function () {
            return projetos;
        }

        var get = function (id) {
            return projetos.find(function (e) {
                return e.id === id;
            })
        }

        var post = function (data) {
            projetos.push(data);
        }

        var $delete = function (id) {
            projetos.splice(
                projetos.indexOf(get(id)), 1
            );
        }

        return {
            query: query,
            get: get,
            post: post,
            $delete: $delete
        }

    }]);