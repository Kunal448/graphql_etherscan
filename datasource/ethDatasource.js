const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    return this
      .get(
      "https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=KS662NXA3HP74MCC4HJM4FK4CZBJTDFXHX"
      );
  }

  async totalSupplyOfEther() {
    return this
      .get
      //Insert API Endpoint - For Get Total Supply of Ether
      ("https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=KS662NXA3HP74MCC4HJM4FK4CZBJTDFXHX");
  }
}

module.exports = EtherDataSource;
