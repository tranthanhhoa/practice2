define([
    'domReady',
    'angular',

    'controllers/controllers',
    'directives/directives',
    'services/services',

    'controllers/slideChart-controller',
    'directives/slideChart-directive',

    'services/slideChart-service'

], function (domReady, ng) {

    'use strict';
    var app = ng.module("app", [
        'app.controllers',
        'app.directives',
        'app.services'
    ]);

    function bootstrap() {
        domReady(function (document) {
            ng.bootstrap(document, ["app"]);
        })
    }

    return{
        bootstrap: bootstrap
    }
})