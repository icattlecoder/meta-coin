const MetaCoin = artifacts.require("MetaCoin");

contract('MetaCoin', function (accounts) {
    const initAmount = 10000;
    let metaCoin;
    before("setup env", async () => {
        metaCoin = await MetaCoin.deployed();
        assert.ok(metaCoin);
    })
    
    it("meta coin should be get balanceOf", async () => {
        let balance = await metaCoin.getBalance(accounts[0]);
        assert.equal(initAmount, balance.toNumber());
    })

    it("meta coin should be send coin", async () => {
        let amount = 500;
        let result = await metaCoin.sendCoin(accounts[1], amount);
        let event = result.logs.find(l => {
            return l.event == "Transfer";
        })
        assert.equal(accounts[0], event.args._from);
        assert.equal(accounts[1], event.args._to);
        assert.equal(amount, event.args._value);

        let balance = await metaCoin.getBalance(accounts[1]);
        assert.equal(amount, balance);

        balance = await metaCoin.getBalance(accounts[0]);
        assert.equal(initAmount - amount, balance);
    })
})