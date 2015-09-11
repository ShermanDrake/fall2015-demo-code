// SETTING an angular module with the name 'myApp'
angular.module('myApp', [])


var mainControllerFunc = function($scope){
    $scope.party = "hotdog eating contest"
    $scope.partyColor = 'peachpuff'
    $scope.important = false
    // $scope.bigness = 12
    $scope.cancel = false
    $scope.imgURL = 'http://lorempixel.com/200/300'

    $scope.toggleImportance = function(){
        $scope.important = !$scope.important
    }

    $scope.handleKeydown = function(event){
        console.log(event)
        if ( event.which === 32 ) {
            event.preventDefault()
            console.log('space!')
        }

    }
    $scope.people = ['Alice', 'Bob', 'Carlos']

    $scope.whichPerson = function(index) {
        console.log($scope.people[index])

    }

    $scope.clickDiv = function(){
        console.log('you clicked a div!')
    }
    $scope.clickIMG = function(event){
        event.stopPropagation()
        console.log('you clicked an IMG!')
    }
}



angular.module('myApp')
    .controller('mainController', ['$scope', mainControllerFunc])
