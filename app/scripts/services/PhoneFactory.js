'use strict';

angular.module('sprintMobile.services',[])
  .factory('PhoneFactory',[
    function() {

      var phoneCategoryData = [
        {name:'iPhones 5s',image:'http://placehold.it/150x200'},
        {name:'iPhones 5c',image:'http://placehold.it/150x200'},
        {name:'Android',image:'http://placehold.it/150x200'},
        {name:'Blackberry',image:'http://placehold.it/150x200'},
        {name:'All Smart Phones',image:'http://placehold.it/150x200'}
      ];

      return {
        phoneCategories: function() {
          return phoneCategoryData;
        }
      };
    }]);