angular.module('frac', [])
  .controller('FracCtrl', function ($scope, $rootScope) {
    $scope.ofShown = true;
    $scope.addShown = false;
    $scope.minusShown = false;
    $scope.btnClicked = function () {
      $scope.ofShown = false;
      $scope.addShown = false;
      $scope.minusShown = false;
    };

    $scope.m = 5;
    $scope.n = 4;
    $scope.k = 3;
    $scope.l = 7;
  })
  .directive('ofDescription', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-of-description.html'
    };
  })
  .directive('ofExplanation', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-of-explanation.html'
    };
  })
  .directive('ofSolution', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-of-solution.html'
    };
  })
  .directive('ofAnswer', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-of-answer.html'
    };
  })
  .directive('addDescription', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-add-description.html'
    };
  })
  .directive('addExplanation', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-add-explanation.html'
    };
  })
  .directive('addSolution', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-add-solution.html'
    };
  })
  .directive('addAnswer', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-add-answer.html'
    };
  })
  .directive('minusDescription', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-minus-description.html'
    };
  })
  .directive('minusExplanation', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-minus-explanation.html'
    };
  })
  .directive('minusSolution', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-minus-solution.html'
    };
  })
  .directive('minusAnswer', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/frac-minus-answer.html'
    };
  });

window.onresize = function () {
  if (window.innerWidth >= 768) $('.btn-group').addClass('btn-group-lg');
  else $('.btn-group').removeClass('btn-group-lg');
};
