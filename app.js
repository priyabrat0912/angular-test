(function () {
  angular.module('myFirstApp')
  .controller('MyFirstController',function($scope){
$scope.name="Priyabrat";
$scope.sayHello=function (){
  return "Hello Coursera";
};
  });
})();
