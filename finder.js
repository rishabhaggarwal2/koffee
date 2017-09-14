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
  .controller('ScienceController', function($scope) {
    var sciencey = this;
    sciencey.overlay = 0;
    sciencey.facts = {
      stevia: {
        name: 'Sugar Free Stevia Plant',
        img: 'images/science/stevia.svg',
        fact: 'Stevia is a sugar-free herbal sweetener that does not spike blood sugar levels, making it Diabetic friendly. It has no sugar, calories, carbs which promotes weight loss! Our partner, SweetLeaf t is the global leader in the organic liquid stevia industry, with awards to show for it. We use ONLY the best! Because we love you! And sugar doesn\'t!'
      },
      coconut: {
        name: 'Coconut Oil',
        img: 'images/science/coconut.svg',
        fact: 'Added coconut oil'
      },
      hpp: {
        name: 'High Pressure Pasteurization',
        img: 'images/science/hpp.svg',
        fact: 'HPP is also referred to as cold pressure protected and/or cold processed.By using PRESSURE instead of HEAT to kill bacteria, we are  preserving the taste, texture & nutritional value, all while extending the shelf life of the product, allowing us to bring our Koffee to the entire world. Heat pasteurization also makes coffee more bitter & also contradicts the cold-brewing process by making it more acidic.'
      },
      cold: {
        name: 'Cold Brewed',
        img: 'images/science/cold.svg',
        fact: 'An ancient Peruvian process Todd Simpson brought to America in 1964 from Peru. Time Replaces heat; coffee grounds are brewed for many hours in cold water instead of hot water, which prevents the acidic oil from being released into the final product. This produces a 65-75% less acidic coffee. We then take it to the next level with alkaline water.  '
      },
      water: {
        name: 'Alkaline Water',
        img: 'images/science/water.svg',
        fact: 'Alkaline water is produced through a process called electrolysis. .The water molecules are broken down into smaller particles, also known as "micro-clustering." It tends to hydrate more effectively, especially for athletes. Alkaline water actually flushes lactic acid from the muscles, speeding up the recovery process for anyone who is physically active. Athletes truly do feel a difference with Koffee Reinvented.'
      },
      tyent: {
        name: 'TYENT USA',
        img: 'images/science/tyent.svg',
        fact: 'Our alkaline water partner is Tyent U.S.A., which was Established in 2004 by Joe Boccuti, Tyent quickly rose to be the top pick in the alkaline water machine industry. In an industry analysis, they took the top spot in every category, from quality of machine, to performance, aesthetics & even customer service. GO TYENT!!! We are honored to have you on our team!'
      },
      krash: {
        name: 'Less/No Krash',
        img: 'images/science/krash.svg',
        fact: 'Drinking acidic coffee everyday comes at a serious price! It provides a burst of energy and then takes it right back! This tends to leave people drained, grabbing for more & more Coffee, which for some people,  can breed a nasty habit of consuming pots &  pots coffee each day. This leaves whoever drank it, highly acidic & severly dehydrated. Koffee Reinvented\'s unique combo of cold-brewing w/alkaline water provides our body with a sustainable energy and less Krash. For some, there is no Krash! YESPLEASE!'
      },
      jittery: {
        name: 'Less/Non Jittery',
        img: 'images/science/jittery.svg',
        fact: 'Coffee tends to be associated with intense energy. IT can disturb ones psychological state if over-consumed. Coffee, Reinvented, even with 150 mg of caffeine, provides a clean, crisp, abundance of energy, without the jitters. There is definitely no Krack in our Koffee! Krack is Whack!'
      },
      kaffeine: {
        name: 'Kaffeine Kontent',
        img: 'images/science/kaffeine.svg',
        fact: 'Koffee Reinvented contains 150 Mg of Caffeine. Scientific studies have proven that caffeine increases energy, focus & concentration. It also boosts memory function & promotes weight loss by boosting the metabolism. Can you please pass the Caffeine!?!?'
      },
      monk: {
        name: 'Sugar Free Monk Fruit',
        img: 'images/science/monk.svg',
        fact: 'Monk Fruit stems from the Luo Han Go Plant. It is considered a Chinese herb that is Diabetic friendly & doesn\'t spike blood sugar levels. It is not "Bitter" like stevia & is said to be more velvety on some people\'s palatets. The Monkfruit Corp. is the world\'s leading monk fruit provide. Koffee Reinvented only uses the best! Because we love you! And sugar doesn\'t!'
      },
      coffee: {
        name: 'Koffee Beans',
        img: 'images/science/coffee.svg',
        fact: 'Our Koffee\'s tends to be much less bitter &-acidic flavor because we begin with our propriety blend and roast it to absolute perfection. We only use certified organic, fair-trade, shade grown  & rainforest alliance-certified beans. Some, if not the best on the market. Because we love you!'
      },
      shade: {
        name: 'Shade Grown Beans',
        img: 'images/science/shade.svg',
        fact: 'As coffee beans mature more slowly in the shade, the natural sugar content increases & enhances the bold flavor of the coffee. Shade grown coffee is most often organic, free of chemical use & requires little to no chemical fertilizers, pesticides or herbicides. Shade grown coffee is not only better to consume if you suffer from any health condition, but also much better for the environment. shade grown coffee supports the many species of earth’s creatures, specifically birds.'
      },
      fair: {
        name: 'Fair Trade Certified Beans',
        img: 'images/science/fair.svg',
        fact: 'Fair-trade coffee empowers farmers to get a fair price for their harvest, helps create safe working conditions & also provides decent wages. This results is that farmers are able to feed their families, keep them healthy, keep their kids in school & plan for their future. It also supports the local economy & the natural environment.'
      },
      vegan: {
        name: 'Vegan Certified Beans',
        img: 'images/science/vegan.svg',
        fact: 'Koffee Reinvented is a certified Vegan product & also an entirely plant-based company. Our ingredients contain no animal flesh or any of their by-products, including ALL dairy,  eggs & none of the very controversial honey. WE LOVE ANIMALS so much that we make sure not to supporter and/or promote ANY such cruelty or inhumane treatment to them! We believe we are at a time in the world where this education is crucial for more than 100 reasons.'
      },
      gmo: {
        name: 'Non GMO Ingredients',
        img: 'images/science/gmo.svg',
        fact: 'GMOs, or genetically modified organisms, have proven to be harmful to human, plant & animal health. They are also extremely detrimental to the environment. We pride ourselves in being a GMO Free company. We love Mother Earth too much to hurt her!'
      },
      cacao: {
        name: 'Cacao',
        img: 'images/science/cacao.svg',
        fact: 'Cacao is one of the most antioxidant-rich foods in the entire world. It has 40 times the antioxidants of blueberries. It Stimulates digestive enzymes, is said to improve mood (Duh!) & promotes weight loss when not paired with sugar.'
      },
      trace: {
        name: 'Trace Minerals',
        img: 'images/science/trace.svg',
        fact: 'The human  body requires nearly two thirds of all the elements currently known to man in order to maintain health. Keeping these minerals in balance is a complex, yet incredibly vital task. The events of everyday living demand a continual ingestion of minerals. Although trace minerals are no longer as plentiful in the foods you eat, they exist plentifully in their proper proportions in the mineral-rich waters of the earth’s oceans and seas. This is why we teamed up with "\'Trace Minerals Research" to provide only the best trace minerals available.'
      },
      vanilla: {
        name: 'Vanilla Bean',
        img: 'images/science/vanilla.svg',
        fact: 'The Vanilla Bean promotes a healthy digestive process by soothing inflammation in the gut. Vanilla is also rich in antioxidants &  lowers has even been said to lower cholesterol levels. Our Vanilla bean flavor is sweetened with a Sugar-Free Monk Fruit creating a one of a the smoothest flavors to ever hit your tongue!'
      }
    };

    sciencey.activate = function() {
      sciencey.svg = document.querySelector("svg");
      Object.keys(sciencey.facts).forEach(function(elem) {
        console.log(elem);
        document.getElementById(elem).addEventListener("mouseenter", function(e) {
            sciencey.svg.appendChild(e.target);
        });

        document.getElementById(elem).addEventListener("click", function(e) {
            sciencey.activeFact = sciencey.facts[elem];
            console.log(sciencey.facts[elem]);
            sciencey.overlay = 1;
            $scope.$apply();
        });

      });

    }
    
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