import { checkWallet, initProvider, initSigner } from "./utils.js";
import { AccessDenied, MissingWallet } from "./errors.js";
// returns a provider and a signer on success and executes a callback on faillure
async function connectWallet() {
  if (checkWallet()) {
    let provider = await initProvider();
    if (provider) {
      let signer = initSigner(provider);
      return { provider, signer };
    } else {
      throw new AccessDenied("Permission to access wallet Rejected");
    }
  } else {
    throw new MissingWallet("Missing Wallet");
  }
}
// retreive the selected account public address
function getUserAddress(walletConnection) {
  return walletConnection.signer.getAddress();
}
export { connectWallet, getUserAddress };
