import { mock, usdt } from "./contracts/availableContracts";
import { mockParams } from "./contracts/mockErc20/mockParams";
import { usdtParams } from "./contracts/usdt/usdtParams";
import { initContract } from "./utils";

function getContract(type, walletConnection) {
  switch (type) {
    case usdt:
      let { usdtAbi, usdtAddr } = usdtParams();
      let usdtContract = initContract(
        usdtAddr,
        usdtAbi,
        walletConnection.provider
      );
      let usdtSignerContract = usdtContract.connect(walletConnection.signer);
      return usdtSignerContract;
    case mock:
      let { mockAbi, mockAddr } = mockParams();
      let mockContract = initContract(
        mockAddr,
        mockAbi.abi,
        walletConnection.provider
      );
      let mockSignerContract = mockContract.connect(walletConnection.signer);
      return mockSignerContract;
    default:
      console.log("not yet implemented");
  }
}
export { getContract };
