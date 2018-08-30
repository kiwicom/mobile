# CardManager

This module allows to save card data and retrieve it afterwards.

## API

### getCard

 ```js
getCard(): Promise<Card | null>
```

### saveCard

 ```js
saveCard(card: Card): void
```

## Types

### Card

```js
cardholder: string,
expiryMonth: string,
expiryYear: string,
number: string,
```