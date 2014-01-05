if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  var each = function(arr,cb){
    for(i=0; i < arr.length; i++){
        cb.call(null,arr[i]);
    }
  };
  return {
    indexOf : function(arr, item) {
        for(i=0; i<arr.length; i++){
            if(arr[i]==item) return i
        };
        return -1
    },

    sum : function(arr) {
        var total = 0;
        each(arr,function(elem){
            total += elem;
        });
        return total
    },

    remove : function(arr, item) {
        
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
