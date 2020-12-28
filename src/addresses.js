export const usm = {
  abi: [
    "function mint(address to, uint minUsmOut) external payable returns (uint)",
    "function burn(address from, address payable to, uint usmToBurn, uint minEthOut) external returns (uint)",
    "function fund(address to, uint minFumOut) external payable returns (uint)",
    "function defund(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)",
    "function defundFromFUM(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)",
    "function ethPool() public view returns (uint pool)",
    "function minFumBuyPrice() public view returns (uint mfbp)",
    "function buySellAdjustment() public view returns (uint adjustment)",
    "function ethBuffer(WadMath.Round upOrDown) external view returns (int buffer)",
    "function ethToUsm(uint ethAmount, WadMath.Round upOrDown) external view returns (uint usmOut)",
    "function usmToEth(uint usmAmount, WadMath.Round upOrDown) external view returns (uint ethOut)",
    "function debtRatio() external view returns (uint ratio)",
    "function usmPrice(Side side) external view returns (uint price)",
    "function fumPrice(Side side) external view returns (uint price)",
    "event MinFumBuyPriceChanged(uint previous, uint latest)",
    "event BuySellAdjustmentChanged(uint previous, uint latest)",
  
    "function totalSupply() external view returns (uint256)",
    "function balanceOf(address account) external view returns (uint256)",
    "function transfer(address recipient, uint256 amount) external returns (bool)",
    "function allowance(address owner, address spender) external view returns (uint256)",
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
  ],
  address: {
    '1': '0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC'
  }
}

