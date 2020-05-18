require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area thought filter cost remember uniform coral light army gesture'; 
let testAccounts = [
"0x437c02b70ffa93a49835070b23e039fb3b9c8fd0a14b905b72bd18b9256c5a65",
"0xf4c1dcd0bbe39e0da137138076342a2432be8569780d999483dce141ae27e60f",
"0x469faf137501684491eeecae699368eecf3f2964042e32f0c3d7332c6cb71956",
"0x37ebfc687d3653045c0a571ac38744271b8f25abff8f103f9beb8c7e2bcd2908",
"0x2fe2c2c06772f4942cf3c3e10f1718e3aa4af4f84b008756a751fb8b92ba8cc0",
"0x47fe357819c54e7d6416ce4c29a85e94419982f08e4a682d526004ed5b275404",
"0x27aaa1ac9c5824f9a5d9de04ca79aa4323690e31f9e584679733ac526b7fd79f",
"0x2c8b71627369872ec6a52e89dd3238f50ed0322dde548adbc28390d42e4677fb",
"0xa1c42fd3af23d2b586db8307efae195c76cdb1c7d8889bef69a9483e26195c05",
"0xd65d4206e66900d5d22171419a29d52b746afcafc7ac6f02503816645b1e6ff3"
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
            version: '^0.5.11'
        }
    }
};
