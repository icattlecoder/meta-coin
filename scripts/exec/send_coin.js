const MetaCoin = artifacts.require("MetaCoin");

module.exports = async (callback) => {
    
        let metacoin = await MetaCoin.deployed();
        let account1 = web3.eth.accounts[0];
        let account2 = web3.eth.accounts[1];
        let balance = await metacoin.getBalance(account1);
        console.log(`account ${account1} balance is ${balance}`);

        console.log(`let's send 500 coin from ${account1} to ${account2}`);
        await metacoin.sendCoin(account2, 500);

        balance = await metacoin.getBalance(account1);
        console.log(`account ${account1} balance is ${balance}`);
        balance = await metacoin.getBalance(account2);
        console.log(`account ${account2} balance is ${balance}`);
}