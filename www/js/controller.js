angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $cordovaBarcodeScanner) {
  $scope.data = {};
    $scope.submit = function(){
        $cordovaBarcodeScanner.scan().then(function(imageData){
          $scope.response = imageData.text;
          console.log("format :"+ imageData.format);
        },function(error){
          $scope.response = "error";
        });

        // var link = 'http://localhost/api/db.php'; 
        // $http.post(link, {kodeUnik: $scope.data.username}).then(function (data){
        //     $getData = data.data;
        //     $scope.response = $getData[0].no_urut;
        // });
    };
})

