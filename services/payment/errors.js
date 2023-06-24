class MissingWallet extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingWallet";
  }
}
class AccessDenied extends Error {
  constructor(message) {
    super(message);
    this.name = "AccessDenied";
  }
}
class InSufficientFunds extends Error {
  constructor(message) {
    super(message);
    this.name = "UnsufficientFunds";
  }
}
class TransactionDenied extends Error {
  constructor(message) {
    super(message);
    this.name = "TransactionDenied";
  }
}
export { MissingWallet, AccessDenied, InSufficientFunds, TransactionDenied };
