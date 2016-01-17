/**
 * Created by puneethts on 1/11/16.
 */
(function () {
    angular.module('amexInt').controller('primeController', primeController);

    primeController.$inject = ['$scope'];

    function primeController($scope) {
        $scope.firstNumber = '';
        $scope.secondNumber = '';

    }

})();