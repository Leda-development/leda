import { validateCreditCardNumber } from './creditCardNumber';

describe('card number validator', () => {
  describe('These tests are supposed to be true', () => {
    it('should validate correctly with 16 digits without spaces', () => {
      expect(validateCreditCardNumber('5336690042305831')).toBeTruthy();
    });

    it('should validate correctly with 16 digits with spaces', () => {
      expect(validateCreditCardNumber('5321 8675 2708 8119')).toBeTruthy();
      expect(validateCreditCardNumber('5321 3046 2971 9821')).toBeTruthy();
    });

    it('should consider as valid correct numbers with 16 digits without spaces', () => {
      expect(validateCreditCardNumber('5321867527088119')).toBeTruthy();
      expect(validateCreditCardNumber('5321304629719821')).toBeTruthy();
    });

    it('should validate correctly with 18 digits with spaces', () => {
      expect(validateCreditCardNumber('67619600 0494451892')).toBeTruthy();
    });
  });

  describe('These tests are supposed to be false', () => {
    it('should not validate with 10 digits with spaces', () => {
      expect(validateCreditCardNumber('6402 894 310')).toBeFalsy();
    });

    it('should consider invalid wrong numbers with 16 digits', () => {
      expect(validateCreditCardNumber('5321867527088111')).toBeFalsy();
      expect(validateCreditCardNumber('5321304629719822')).toBeFalsy();
    });

    it('should not validate with invalid digits without spaces', () => {
      expect(validateCreditCardNumber('3046532185961205')).toBeFalsy();
    });

    it('should not validate with digits and letters', () => {
      expect(validateCreditCardNumber('3046 5321 hello 1205')).toBeFalsy();
    });

    it('should not validate with letters', () => {
      expect(validateCreditCardNumber('this is going to be a fail')).toBeFalsy();
    });
  });
});
