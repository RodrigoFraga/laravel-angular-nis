angular.module('app.services')
    .service('ClientService', [function () {
        var clientes = [
            {
                id: 1,
                name: 'Software Center Place',
                alias: 'SCP',
                cpf_cnpj: '18.132.537/0001-70',
                phone: 7599188957,
                description: null,
            },{
                id: 2,
                name: 'Software Center Place',
                alias: 'SCP',
                cpf_cnpj: '18.132.537/0001-70',
                phone: 7599188957,
                description: null,
            },{
                id: 3,
                name: 'Software Center Place',
                alias: 'SCP',
                cpf_cnpj: '18.132.537/0001-70',
                phone: 7599188957,
                description: null,
            },{
                id: 4,
                name: 'Software Center Place',
                alias: 'SCP',
                cpf_cnpj: '18.132.537/0001-70',
                phone: 7599188957,
                description: null,
            },{
                id: 5,
                name: 'Software Center Place',
                alias: 'SCP',
                cpf_cnpj: '18.132.537/0001-70',
                phone: 7599188957,
                description: null,
            },
        ];

        var query = function () {
            return clientes;
        };

        var get = function (id) {
            return clientes.find(function (e) {
                return e.id === id;
            })
        };

        var post = function (data) {
            clientes.push(data);
        };

        var $delete = function (id) {
            clientes.splice(
                clientes.indexOf(get(id)), 1
            );
        };

        return {
            query: query,
            get: get,
            post: post,
            $delete: $delete
        }

    }]);