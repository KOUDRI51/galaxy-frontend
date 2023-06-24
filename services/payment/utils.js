import { ethers } from "ethers";
// initialize the provider by requesting permission to access the wallet accounts
async function initProvider() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider;
  } catch (e) {
    console.log("could not initliaze provider due to the following error:", e);
  }
}
// retreive the keys from the wallet
function initSigner(provider) {
  return provider.getSigner();
}
// gets the connection directly without sending a request to the wallet if already requested
async function tryConnection() {
  if (checkWallet()) {
    const permissions = await window.ethereum.request({
      method: "wallet_getPermissions",
    });
    if (permissions.length == 0) {
      return false;
    } else {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = initSigner(provider);
      return { provider, signer };
    }
  } else {
    return false;
  }
}
/// returns an abstraction over a contract
function initContract(addr, abi, provider) {
  let contract = new ethers.Contract(addr, abi, provider);
  return contract;
}
/// verify whether the user has installed a wallet extension
/// by checking whether the ethereum object is injected in the page or not
function checkWallet() {
  if (window.ethereum) {
    return true;
  } else {
    false;
  }
}

export { initContract, initSigner, initProvider, checkWallet, tryConnection };
