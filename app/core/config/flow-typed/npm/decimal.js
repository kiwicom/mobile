// @flow

// Work in progress, expand as needed, see full typescript types here https://github.com/MikeMcl/decimal.js/blob/master/decimal.d.ts
declare module 'decimal.js' {
  declare class Decimal {
    constructor(decimal: DecimalValue): Decimal;
    
    equals(number: DecimalValue): boolean;
    plus(number: DecimalValue): Decimal;
    toFixed(decimalNumber?: number): string;
    minus(number: DecimalValue): Decimal;
  }
  
  declare type DecimalValue = string | number | Decimal
}
