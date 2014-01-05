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
        var newArray = [];
        each(arr,function(elem){
            if(elem!=item) newArray.push(elem)
        });
        return newArray;
    },

    removeWithoutCopy : function(arr, item) {
        var i = 0;
        do{
            if(arr[i]==item){
                arr.splice(i,1)
            }else{
                i++
            }
        }while(i < arr.length);
        return arr
    },

    append : function(arr, item) {
        arr.push(item);
        return arr
    },

    truncate : function(arr) {
        arr.pop();
        return arr
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr
    },

    curtail : function(arr) {
        arr.shift();
        return arr
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr
    },

    count : function(arr, item) {
        var c=0;
        each(arr,function(elem){
            if(elem==item) c++
        });
        return c
    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
