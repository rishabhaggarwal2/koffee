angular.module('finderApp', [])
  .controller('FinderController', function($scope) {
    var finder = this;

    $.ajax({
        type: "GET",
        url: "locations.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });

    function processData(csv) {
      finder.search = "";
      finder.search = "902";
      finder.locations = $.csv.toObjects(csv);
      $scope.$apply();
      finder.search = "";
      $scope.$apply();
      console.log(finder.locations);
    };

  });