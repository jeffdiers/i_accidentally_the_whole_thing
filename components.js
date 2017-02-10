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

  function ad(){
console.log('hi ad')
  }
  function giphy(){
console.log('hi giphy')
  }
  function adele(){
console.log('hi adele')
  }
  function products(){
console.log('hi products')
  }
  function signup(){
console.log('hi signup')
  }

})();
