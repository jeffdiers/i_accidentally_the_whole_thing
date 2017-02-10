const fn = require('./definitions');
(function() {
  angular.module('app', [])
  .component('giphy', {
    controller: fn.giphy(),
    templateUrl: './templates/giphy.html'
  })
  .component('signup', {
    controller: fn.signup(),
    templateUrl: './templates/signup.html'
  })
  .component('ad', {
    controller: fn.ad(),
    templateUrl: './templates/ad.html'
  })
  .component('products', {
    controller: fn.products(),
    templateUrl: './templates/products.html'
  })
  .component('adele', {
    controller: fn.adele(),
    templateUrl: './templates/adele.html'
  })
})();
