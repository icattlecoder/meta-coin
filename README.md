## install

```sh
npm install
```

> make sure you have installed Ganache client and Truffle v4.1.7

## test

```sh
truffle test
```

## deploy on development

```sh
truffle deploy
```

## deploy on kovan testnet

Before deploy on kovan, you can export MNEMONICS, make sure your terminal history is safe.

```sh
export MNEMONICS="<your mnemonics>"
truffle deploy --network=kovan
```

## run external javascript to interactive with your smart contract.

```
truffle exec scripts/exec/send_coin.js
```