'use strict';

angular.module('nbt.ng.filters.string', [])

/**
 * Given a string count how many characters of a certain ascii range it contains.
 *
 * For ex. to count how many capitals the string 'SuperMan' contains:
 *
 * $filter('stringContainsRange')('Superman', 'A', 'Z');
 * => returns 2;
 *
 **/
.filter('stringContainsRange', function () {
  return function (str, from, to) {
    if(!str || !from || !to) { return false; }
    var chars = str.split('').filter(function(char) {
       return (char >= from) && (char <= to);
    });
    return chars.length;
  };
})

.filter('countCapitals', function($filter) {
  return function (str) {
    return $filter('stringContainsRange')(str, 'A', 'Z');
  };
})

.filter('countLowercase', function($filter) {
  return function (str) {
    return $filter('stringContainsRange')(str, 'a', 'z');
  };
})

.filter('countNumbers', function($filter) {
  return function (str) {
    return $filter('stringContainsRange')(str, '0', '9');
  };
})
// Count how many special chars are in a string.
.filter('countSpecialChars', function () {
  return function (str) {
    if(!str) { return false; }
    var chars = str.split('').filter(function(char) {
       return ((char >= '!') && (char <= '/'))
           || ((char >= ':') && (char <= '@'))
           || ((char >= '[') && (char <= '`'))
           || ((char >= '{') && (char <= '~'));
    });
    return chars.length;
  };
})