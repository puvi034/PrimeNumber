/**
 * Created by Puneeth T S on 1/11/16.
 */
(function () {
    angular.module('amexInt').directive('primeDirective', primeDirective);

    function primeDirective() {
        return {
            'restrict': 'E',
            templateUrl: 'output.html',
            scope: {
                firstNumber: "=firstNumber",
                secondNumber: "=secondNumber"
            },
            link: link
        }

        function link(scope, elem, attrs) {
            scope.primeNumbers = [];
            scope.$watch('firstNumber', function () {
                if (scope.firstNumber != '' && scope.secondNumber != '') {
                    scope.primeNumbers = getPrimeNumbers(scope.firstNumber, scope.secondNumber)
                }
            });
            scope.$watch('secondNumber', function () {
                if (scope.firstNumber != '' && scope.secondNumber != '') {
                    scope.primeNumbers = getPrimeNumbers(scope.firstNumber, scope.secondNumber)
                }
            });
        }

        function getPrimeNumbers(num1, num2) {
            var num1 = Number(num1), num2 = Number(num2), primeNumbers = [];
            while (num1 <= num2) {
                for (var i = 2; i < num1; i++) {
                    if (num1 % i == 0) {
                        break;
                    }
                }

                if (i == num1) {
                    primeNumbers.push(num1)
                }
                num1++;
            }

            return primeNumbers
        }
    }
})();