function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode === 46)) {
        return false;
    }
    return true;
}

function isNumberWODot(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

/* AngularJS app controllers */
var app = angular.module('iCalc', []);
app.controller('interestCtrl', function($scope) {
  $scope.year = function() {
      if($scope.timeType==="years") {
        return parseFloat($scope.time);
      }
      if($scope.timeType==="months") {
        return parseFloat($scope.time / 12);
      }
      if($scope.timeType==="weeks") {
        return parseFloat($scope.time) / 52;
      }
      if($scope.timeType==="days") {
        return parseFloat($scope.time) / 365;
      }
  };
  $scope.simple = function(principal, rate, year) {
      if ( principal==="" || rate==="" || year==="") {
         return 0;
      } 
      return parseFloat(principal) * (parseFloat(rate) / 100) * year;
  };
  $scope.compound = function(p, rate, year, n) {
      if ( p==="" || rate==="" || year==="" || n==="") {
         return 0;
      } 
      p = parseFloat(p) * 1;
      rate = parseFloat(rate) * 1 / 100;
      year = year * 1;
      n = parseFloat(n) * 1;
      nt = n * year;
      rn = rate / n;
      a = 1 + rn;
      b = Math.pow(a, nt);
      return p * b; 
  };
  $scope.clearAll = function() {
    $scope.disableTimeType = true;
    $scope.principal = "";
    $scope.rate ="";
    $scope.timeType = "";
    $scope.time =""; 
    $scope.no = "";  
  };
  $scope.clearAllX = function() {
    $scope.disable = true;
    $scope.hide = true;
    $scope.disableTimeType = true;
    $scope.type = "";
    $scope.principal = "";
    $scope.rate ="";
    $scope.timeType = "";
    $scope.time =""; 
    $scope.no = "";  
  };
});
