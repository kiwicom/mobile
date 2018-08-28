# CardManager

This module allows to save card data and retrieve it afterwards.

## API

### getCard

 ```js
getCard(): Promise<Card>
```

### saveCard

 ```js
saveCard(card: Card): void
```

## Types

### Card

```js
cardholder: string,
expiry: {
  month: number,
  year: number,
},
number: string,
```