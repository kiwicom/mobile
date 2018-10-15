// @flow

import { detectCardType } from '../InsurancePaymentContext';

// source: https://www.paypalobjects.com/en_GB/vhelp/paypalmanager_help/credit_card_numbers.htm
// source: https://github.com/drmonkeyninja/test-payment-cards

describe('detectCardType', () => {
  it('should work for Mastercard', () => {
    const mastercardNumbers = ['5555555555554444', '5105105105105100'];
    mastercardNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('MASTERCARD');
    });
  });

  it('should work for Visa', () => {
    const visaNumbers = [
      '4111111111111111',
      '4012888888881881',
      '4222222222222',
    ];
    visaNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('VISA');
    });
  });

  it('should work for Diners Club', () => {
    const dinersClubNumbers = ['30569309025904', '38520000023237'];
    dinersClubNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('DINERS_CLUB');
    });
  });

  it('should work for Discover', () => {
    const discoverNumbers = ['6011111111111117', '6011000990139424'];
    discoverNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('DISCOVER');
    });
  });

  it('should work for American Express', () => {
    const americanExpressNumbers = [
      '378282246310005',
      '371449635398431',
      '378734493671000',
    ];
    americanExpressNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('AMERICAN_EXPRESS');
    });
  });

  it('should work for Maestro', () => {
    const maestroNumbers = ['6759649826438453', '6304000000000000'];
    maestroNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('MAESTRO');
    });
  });

  it('should work for Mir', () => {
    const mirNumbers = ['2200123456789010'];
    mirNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('MIR');
    });
  });

  it('should say UNKMOWN for e.g. JCB card', () => {
    const jcbNumbers = ['3088000000000017'];
    jcbNumbers.forEach(number => {
      expect(detectCardType(number)).toBe('UNKNOWN');
    });
  });
});
