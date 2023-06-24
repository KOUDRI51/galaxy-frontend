import { ethers } from "ethers";
import { InSufficientFunds, TransactionDenied } from "./errors";

// performs conversion of the amount to wei and commit the transaction
async function transferTokens(contract, recipient, amount) {
  try {
    const tokenAmountWei = ethers.utils.parseUnits(amount.toString(), 18);
    const receipt = await contract.transfer(recipient, tokenAmountWei);
    return receipt;
  } catch (error) {
    if (error.code === 3) {
      // Handle insufficient funds error
      // ether funds not token funds
      console.log("Insufficient Funds to perform token transfer.");
      throw new InSufficientFunds("Insufficient Funds");
    } else if (error.code === 4001) {
      console.log("Denied transfer permission");
      throw new TransactionDenied("Transaction Denied");
    } else {
      // Handle other errors
      console.log("Error occurred during token transfer:", error);
      throw new InSufficientFunds();
    }
  }
}
// checks if the passed address has sufficient balance by comparing with amount
async function isBalanceSufficient(addr, contract, amount) {
  try {
    let balance = await contract.balanceOf(addr);
    const tokenAmount = parseFloat(amount);
    const tokenAmountWei = ethers.utils.parseUnits(tokenAmount.toString(), 18);
    if (tokenAmountWei.lt(balance)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("Can't check balance due to the following error:", e);
  }
}
export { isBalanceSufficient, transferTokens };
