var app = angular.module("app", ["ngResource"]);
app.controller("appController", function ($scope, $http, dataResource) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('js/data.json').success(function (data) {
      $scope.datos = data;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
    $scope.datosResource = dataResource.get();
})

//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
    return $resource("js/data.json", //la url donde queremos consumir
        {},
        { get: { method: "GET", isArray: true }
    })
})
