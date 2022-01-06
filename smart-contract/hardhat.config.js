require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hCOYoqXnYbDcZ4R03Qhd4fc6y25KliL6',
      accounts: ['9c8df2449d2a7fcd224afe64c7548797836a7e4ce2e062b69bf1fcd9e385470c'],
    },
  },
};