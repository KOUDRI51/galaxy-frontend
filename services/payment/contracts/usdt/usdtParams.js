import usdtAbi from "./usdt.json" assert { type: "json" };
const usdtAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
function usdtParams() {
  return { usdtAbi, usdtAddr };
}
export { usdtParams };
