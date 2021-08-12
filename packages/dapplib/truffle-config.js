require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note predict uphold harvest drink foster gasp'; 
let testAccounts = [
"0xce79de1186180622f5d1bbb0ca8453a262b8fd7258145408c2925ec963af22e6",
"0x5fbaa09f84d51457280c96f47dd0e79238409a045375616188f7d2b17a385212",
"0x19b8819a3764963193b6a10937c3d6d1a4a1b464728415b5322c8df656234384",
"0x1fb7b9f1a0dbb119de372234eb1de298c0742c34ae2e62bfa78b7d6fa8c66c61",
"0xaa58da95aa3b396457157b2a829e0b0146ac3227195c4951567b0630764c1cad",
"0x962bbafdd81cc940812b8641e14894cf60bf366b34da9fc616087a6c54c6ea8f",
"0x670c1d87bfc9bc5a8f4a298bdd23a13368eec3496c73d1b84d8362c73292c856",
"0xa3d17a9d9319190e64411d9f3273be09748660e6737af01d6a5c71033314af35",
"0xdebb3c54b204cda142a33199b8621b337352ed0b1f6da0c1ff6da6829ec976dc",
"0xaa75045d75caaa6c2f1dab8806b2f297fa8d490d8d9489843ec7ddeb78212742"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

