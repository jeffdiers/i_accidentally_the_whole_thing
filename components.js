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
        .component('ad', {
            controller: ad,
            templateUrl: './templates/ad.html'
        })
        .component('products', {
            controller: products,
            templateUrl: './templates/products.html'
        })
        .component('adele', {
            controller: adele,
            templateUrl: './templates/adele.html'
        })

    function ad() {
        const vm = this;
        console.log('ad', vm);
    }

    function giphy() {
        const vm = this;
        console.log('giphy', vm);
    }

    function adele() {
        const vm = this;
        console.log('adele', vm);
    }

    function products() {
        const vm = this;
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
