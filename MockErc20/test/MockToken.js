const MockToken = artifacts.require("./MockToken.sol");

contract("MockToken", (accounts) => {
  it("Testing the initial supply", async () => {
    const TokenInstance = await MockToken.deployed();
    const result = await TokenInstance.totalSupply.call();
    assert.equal(1000000 * 10 ** 18, result);
  });
});
