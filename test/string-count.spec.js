'use strict';

describe('filters.string module', function() {

  var $filter;

  beforeEach(module('nbt.ng.filters.string'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  describe('stringContainsRange filter', function () {
    it('should exist', function() {
      expect($filter('stringContainsRange')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('stringContainsRange')();
        expect(res).toBeFalsy();
      });
    });

    describe('when arguments are incomplete', function () {
      it('should return false', function () {
        var res = $filter('stringContainsRange')('my string', 'a');
        expect(res).toBe(false);
      });

      it('should return false', function () {
        var res = $filter('stringContainsRange')('', 'a');
        expect(res).toBe(false);
      });
      it('should return false', function () {
        var res = $filter('stringContainsRange')('a');
        expect(res).toBe(false);
      });
    });

    describe('when cast against a range of numbers', function () {
      it('should count them properly', function () {
        var res = $filter('stringContainsRange')('2 numbers here 1345', '1', '2');
        expect(res).toBe(2);
      });
    });
  });

  describe('countCapitals filter', function () {
    it('should exist', function() {
      expect($filter('countCapitals')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('countCapitals')();
        expect(res).toBeFalsy();
      });
    });

    describe('when cast against a string with no capitals', function () {
      it('should return 0', function () {
        var res = $filter('countCapitals')('no-capitals-here');
        expect(res).toBe(0);
      });
    });

    describe('when cast against a string with capitals', function () {
      it('should count them properly', function () {
        var res = $filter('countCapitals')('There are 5 CaPiTals Here');
        expect(res).toBe(5);
      });
    });
  });

  describe('countLowercase filter', function () {
    it('should exist', function() {
      expect($filter('countLowercase')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('countLowercase')();
        expect(res).toBeFalsy();
      });
    });

    describe('when cast against a string with no capitals', function () {
      it('should return 0', function () {
        var res = $filter('countLowercase')('ONLY CAPITALS');
        expect(res).toBe(0);
      });
    });

    describe('when cast against a string with capitals', function () {
      it('should count them properly', function () {
        var res = $filter('countLowercase')('There are 15 NON-CaPiTals Here');
        expect(res).toBe(15);
      });
    });
  });

  describe('countNumbers filter', function () {
    it('should exist', function() {
      expect($filter('countNumbers')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('countNumbers')();
        expect(res).toBeFalsy();
      });
    });

    describe('when cast against a string with no capitals', function () {
      it('should return 0', function () {
        var res = $filter('countNumbers')('just a string with no numbers');
        expect(res).toBe(0);
      });
    });

    describe('when cast against a string with capitals', function () {
      it('should count them properly', function () {
        var res = $filter('countNumbers')('There are 2 num8ers Here');
        expect(res).toBe(2);
      });
    });
  });

  describe('countSpecialChars filter', function () {
    it('should exist', function() {
      expect($filter('countSpecialChars')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('countSpecialChars')();
        expect(res).toBeFalsy();
      });
    });

    describe('when cast against a string with no capitals', function () {
      it('should return 0', function () {
        var res = $filter('countSpecialChars')('1236 no special chars here');
        expect(res).toBe(0);
      });
    });

    describe('when cast against a string with capitals', function () {
      it('should count them properly', function () {
        var res = $filter('countSpecialChars')('14 special chars: !@£$%^&*()_+?>');
        expect(res).toBe(14);
      });
    });
  });

  describe('countSpecialChars filter', function () {
    it('should exist', function() {
      expect($filter('countSpecialChars')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('countSpecialChars')();
        expect(res).toBeFalsy();
      });
    });

    describe('when cast against a string with no capitals', function () {
      it('should return 0', function () {
        var res = $filter('countSpecialChars')('1236 no special chars here');
        expect(res).toBe(0);
      });
    });

    describe('when cast against a string with capitals', function () {
      it('should count them properly', function () {
        var res = $filter('countSpecialChars')('14 special chars: !@£$%^&*()_+?>');
        expect(res).toBe(14);
      });
    });
  });

  describe('isValidEmail filter', function () {
    it('should exist', function() {
      expect($filter('isValidEmail')).not.toBeNull();
    });

    describe('when no string is passed', function () {
      it('should return false', function () {
        var res = $filter('isValidEmail')();
        expect(res).toBeFalsy();
      });
    });

    describe('when cast against a string with email format', function () {
      it('should return true', function () {
        var res = $filter('isValidEmail')('test@test.com');
        expect(res).toBe(true);
      });
    });

    describe('when cast against a string with wrong email format', function () {
      it('should return false (no extension)', function () {
        var res = $filter('isValidEmail')('test@test');
        expect(res).toBe(false);
      });

      it('should return false (no @)', function () {
        var res = $filter('isValidEmail')('testtest.com');
        expect(res).toBe(false);
      });

      it('should return false (no domain)', function () {
        var res = $filter('isValidEmail')('test@.com');
        expect(res).toBe(false);
      });

      it('should return false (no username)', function () {
        var res = $filter('isValidEmail')('@test.com');
        expect(res).toBe(false);
      });

      it('should return false (no special chars allowed)', function () {
        var res = $filter('isValidEmail')('£test@test.com');
        expect(res).toBe(false);
      });
    });
  });

});
