angular.module('breakoutApp', []);

angular.module('breakoutApp')
    .controller('breakoutController', ['$scope', '$http', function($scope, $http){

            console.log('controller')
            $scope.greeting = 'Wassup'
    }])