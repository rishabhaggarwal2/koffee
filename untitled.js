angular.module('finderApp', [])
  .controller('FinderController', function() {
    var finder = this;

    console.log(finder.locations);

    $.ajax({
        type: "GET",
        url: "locations.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });

    function processData(csv) {
      finder.search = "";
      finder.locations = $.csv.toObjects(csv);
      console.log(finder.locations);
    };
  });