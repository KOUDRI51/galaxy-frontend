import { useEffect } from "react";
import { getContract } from "../services/payment/contractManager";
import {
  ether,
  mock,
  usdt,
} from "../services/payment/contracts/availableContracts";
import {
  InSufficientFunds,
  TransactionDenied,
} from "../services/payment/errors";
import {
  isBalanceSufficient,
  transferTokens,
} from "../services/payment/transactionUtils";
import { initContract } from "../services/payment/utils";
import { getUserAddress } from "../services/payment/walletUtils";
// this should be dynamically retreived
const targetAddress = "0x6989A443d026831FC7bC224724356c77F536a79b";

const PaymentForm = ({ walletConnection }) => {
  useEffect(() => {}, []);

  async function invest(event) {
    event.preventDefault();
    let amount = event.target.amount.value;
    let paymentMethod = event.target.contractType.value;
    let contract = getContract(paymentMethod, walletConnection);
    let selfAddress = await getUserAddress(walletConnection);
    let is_sufficient = await isBalanceSufficient(
      selfAddress,
      contract,
      amount
    );
    if (is_sufficient) {
      try {
        const receipt = await transferTokens(contract, targetAddress, amount);
        alert("Transfer Succeeded");
        console.log("Token transfer successful:", receipt);
      } catch (error) {
        if (error instanceof InSufficientFunds) {
          alert();
        } else if (error instanceof TransactionDenied) {
          alert("Transfer Permission Denied");
        } else {
          console.log("Error occurred during token transfer:", error.message);
          alert("Internal Error", error.message);
        }
      }
    } else {
      alert("unsufficient balance 😕");
    }
  }
  return (
    <section className="registration clear__top">
      <div className="container">
        <form onSubmit={(event) => invest(event)}>
          <div className="input input--secondary">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="500$"
              required="required"
            />
            <span htmlFor="contractType">
              Payment method:
              <select
                className="property__select border-1 w-50"
                id="contractType"
                name="contractType"
              >
                <option className="dropdown-item" value={mock} type="number">
                  mock
                </option>
                <option className="dropdown-item" value={usdt}>
                  usdt
                </option>
                <option className="dropdown-item" value={ether}>
                  ether
                </option>
              </select>
            </span>
          </div>
          <button type="submit" className="button button--effect">
            Invest Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
