(function() {
    angular.module('app', [])
        .component('giphy', {
            controller: giphy,
            templateUrl: './templates/giphy.html'
        })
        .component('signup', {
            controller: signup,
            templateUrl: './templates/signup.html'
        })
        .component('headerNav', {
            controller: headerNav,
            templateUrl: './templates/headerNav.html'
        })
        .component('products', {
            controller: products,
            templateUrl: './templates/products.html'
        })
        .component('adele', {
            controller: adele,
            templateUrl: './templates/adele.html'
        })

    function headerNav() {
        const vm = this;
        console.log('ad', vm);
    }

    giphy.$inject = ['$http']
    function giphy($http){
      const vm = this

      vm.$onInit = onInit
      vm.findGif = findGif

      function onInit() {
        $http.get(`http://api.giphy.com/v1/gifs/search?q=programing&api_key=dc6zaTOxFJmzC`).then(function (res) {
          console.log(res.data);
        })
      }

      function findGif() {
        console.log("it works");
        $http.get(`http://api.giphy.com/v1/gifs/search?q=${vm.gif.title}&api_key=dc6zaTOxFJmzC`).then(function (res) {
          console.log(res.data.data);
          vm.gifphys = res.data.data
        })
      }
    }

    function adele() {
        const vm = this;
        vm.$onInit = () => {
          vm.cycleNumber = false;
        }
        vm.adeleThis = () => {
          vm.cycleNumber = 6;
        }
        vm.cycle = () => {
          vm.cycleNumber = Math.ceil(Math.random() * 10);
        }
    }

    function products() {
        const vm = this;
        vm.$onInit = () => {
          vm.products = [
            {
              id: 1,
              title: 'Ultimate Meme Sticker Pack',
              image: 'https://img0.etsystatic.com/133/0/12232642/il_570xN.897159504_ervy.jpg',
              price: 4.99
            },
            {
              id: 2,
              title: 'Nick Cage',
              image: 'https://img1.etsystatic.com/025/1/6782226/il_570xN.635931441_kdyw.jpg',
              price: 4.99
            },
            {
              id: 3,
              title: 'Drop the Mic',
              image: 'https://img1.etsystatic.com/120/0/11097653/il_570xN.1053942359_379k.jpg',
              price: 5.00
            },
            {
              id: 4,
              title: 'Number One: Commander Riker',
              image: 'https://img1.etsystatic.com/038/1/5901169/il_570xN.587382747_26r7.jpg',
              price: 7.99
            },
            {
              id: 5,
              title: 'It was Lit Fam - Embroidery Patch',
              image: 'https://img1.etsystatic.com/128/0/11213468/il_570xN.1101755415_8vk9.jpg',
              price: 6.99
            },
            {
              id: 6,
              title: 'Alive But We Don\'t Know What It Means',
              image: 'https://img0.etsystatic.com/174/0/7570984/il_570xN.1095771586_kr97.jpg',
              price: 80.99
            },
            {
              id: 7,
              title: 'Doge',
              image: 'https://img1.etsystatic.com/028/0/9285251/il_570xN.593961927_7oug.jpg',
              price: 8.99
            },
            {
              id: 8,
              title: 'Lipton: That\'s None of My Business, Tho',
              image: 'https://img1.etsystatic.com/114/0/13184812/il_570xN.1058767787_r1m4.jpg',
              price: 20.99
            }
        ];
        }
        console.log('products', vm);
    }

    function signup() {
        const vm = this;
        vm.postContact = () => {
          vm.thanks = true;
        }
        console.log('signup', vm);
    }

})();
