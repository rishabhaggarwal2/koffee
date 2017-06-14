angular.module('finderApp', [])
  .controller('FinderController', function($scope) {
    var finder = this;
    finder.filter = 6;

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

  })
  .controller('ProductsController', function($scope) {
    var products = this;

    products.products = {
      1: {
        name: 'Jet Blak',
        image: 'jet_blak.png',
        available: true,
        banner: 'jet_blak_large.jpg',
        description: 'Our unique blend of all organic, fair-trade & shade grown coffee beans roasted to perfection and cold-brewed in a highly purified alkaline water.'
      },
      2: {
        name: 'Blak Chocolate',
        image: 'blak_chocolate.png',
        available: true,
        banner: 'blak_chocolate_large.jpg',
        description: 'Our Jet Blak Koffee topped  with all natural essence of cacao & sweetened with a 100% all natural, non-artificial sugar-free sweeteners.'
      },
      3: {
        name: 'Vanilla Bean',
        image: 'vanilla_bean.png',
        available: false,
        banner: 'vanilla_bean_large.jpg',
        description: 'Our Jet Blak Koffee topped with an organic vanilla extract & sweetened with a 100% all natural, non-artificial sugar-free sweeteners.'
      },
      // 4: {
      //   name: 'Sweet Chilli Bean',
      //   image: 'sweet_chilli_bean.png',
      //   available: false,
      //   banner: 'sweet_chilli_bean_large.jpg',
      //   description: 'Our Jet blak Koffee spiced w/Cayenne, flavored with an organic Orange essential oil & sweetened w/all natural, non-artificial sugar-free sweeteners.'
      // },
      // 5: {
      //   name: 'Chai Pai',
      //   image: 'chai_pai.png',
      //   available: false,
      //   banner: 'chai_pai_large.jpg',
      //   description: 'Our Jet Blak Koffee blended with a Turmeric-Chai spice blend & sweetened with a 100% all natural, non-artificial sugar-free sweeteners.'
      // },
      // 6: {
      //   name: 'Mint Mocha',
      //   image: 'mint_mocha.png',
      //   available: false,
      //   banner: 'mint_mocha_large.jpg',
      //   description: 'Our Blak Chocolate Koffee topped with an organic peppermint essential oil.'
      // },
      // 7: {
      //   name: 'Blue Chamomoile',
      //   image: 'blue_chamomoile.png',
      //   available: false,
      //   banner: 'blue_chamomoile_large.jpg',
      //   description: 'Our Jet BlaK Koffee brewed w/Chamomile flowers, a natural hazelnut extract & sweetened with a 100% all natural, non-artificial sugar-free sweeteners.'
      // },
      // 8: {
      //   name: 'Blak Rose',
      //   image: 'blak_rose.png',
      //   available: false,
      //   banner: 'blak_rose_large.jpg',
      //   description: 'Our Vanilla Bean Koffee mixed with a High Vibration Bulgarian Rose Water.'
      // }
    };
    products.overlay = 0;

    products.show = function(product) {
      products.overlay = 1;
      products.active = product;
      var background = "url('images/products/" + product.banner + "') #fff";
      $(".products__overlay").css("background", background);
      $(".products__overlay").fadeIn();
    };

    products.hide = function() {
      products.overlay = 0;
      $(".products__overlay").fadeOut();
    };

  });

  
  // products.products = {
  //   1: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   2: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   3: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   4: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   5: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   6: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   7: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   },
  //   8: {
  //     name: 'Blak Chocolate',
  //     image: 'blak_chocolate.png',
  //     available: true,
  //     banner: 'blak_chocolate_large.jpg',
  //   }
  // };