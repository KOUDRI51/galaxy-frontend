var MockToken = artifacts.require("./MockToken.sol");
module.exports = async function (deployer) {
		await deployer.deploy(MockToken, 1000000, 1000, "0xee79e6506Dcf0e69722FBa448b365F388eAF1cc2");
};
