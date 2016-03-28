(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .factory('classifiedsFactory', function($firebaseArray) {

      var ref = new Firebase('https://ngclassifieds.firebaseio.com/');

      return {
        ref: $firebaseArray(ref)
      }
      
    });
    
})();