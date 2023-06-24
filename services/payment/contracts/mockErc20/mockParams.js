import mockAbi from "./abis/MockToken.json" assert { type: "json" };
// replace address with locally depolyed erc20 token
const mockAddr = "0x6F241cc58478E480F53342e03E7F3d4eCFbf725b";
function mockParams() {
  return { mockAbi, mockAddr };
}
export { mockParams };
