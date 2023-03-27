(function () {

    var app = angular.module('sampleApp',['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'home.html'
            })
            .when('/about',{
                templateUrl:'about.html'
            })
            .when('/gallery',{
                templateUrl:'gallery.html'
            })
            .otherwise({ redirectTo:'/'});
    });
})();