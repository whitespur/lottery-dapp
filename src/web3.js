import Web3 from 'web3';
//使用web3 v0.2的provider 注入到web3 v1.0的provider的里面
var web3 = new Web3(window.web3.currentProvider);
export default web3;