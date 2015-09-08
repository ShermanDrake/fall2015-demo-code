// SETTING an angular module with the name 'myApp'
angular.module('myApp', [])


var mainControllerFunc = function($scope){
    $scope.greeting = 'Helloooo World'
    // $scope.excite is a click-handler. It handles click events.
    var excitement = 0
    $scope.excite = function(){
        
        excitement++
        if ( excitement < 5 ) {
            $scope.greeting += '!'
            
        }
    }
    var citizenKane = {
        title : 'Citizen Kane',
        genre : 'Sled-based Comedic Thriller',
    }
    var silenceOfTheLambs = {
        title : 'Silence of the Lambs',
        genre : 'Musical Cooking Show',
    }
    var jackAndJill = {
        title : 'Jack and Jill',
        genre : 'Psychological Mystery',
    }
    $scope.movies = [citizenKane, silenceOfTheLambs, jackAndJill]
    $scope.class = 'foo'

}
// GET the module, use it to create a controller.
// The controller needs a name, and an array of dependencies. The last item in the dependency array is the controller itself.
angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])


