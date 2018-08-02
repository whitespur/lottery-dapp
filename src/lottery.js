//直接获取区块链上的彩票的智能合约
import web3 from './web3'; //装好了 用户provider的web3
//使用deploy脚本获取address
const address = '0x059b2726ea26585FDC14A525D0d28310943eA2ac';
//使用compile脚本获取abi
const abi =
    [
        {
            "constant":true,
            "inputs":[
            ],
            "name":"getBalance",
            "outputs":[
                {
                    "name":"",
                    "type":"uint256"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "constant":true,
            "inputs":[
            ],
            "name":"manager",
            "outputs":[
                {
                    "name":"",
                    "type":"address"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "constant":false,
            "inputs":[
            ],
            "name":"refund",
            "outputs":[
            ],
            "payable":false,
            "stateMutability":"nonpayable",
            "type":"function"
        },
        {
            "constant":false,
            "inputs":[
            ],
            "name":"pickWinner",
            "outputs":[
            ],
            "payable":false,
            "stateMutability":"nonpayable",
            "type":"function"
        },
        {
            "constant":true,
            "inputs":[
            ],
            "name":"getPlayersCount",
            "outputs":[
                {
                    "name":"",
                    "type":"uint256"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "constant":true,
            "inputs":[
            ],
            "name":"getManager",
            "outputs":[
                {
                    "name":"",
                    "type":"address"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "constant":true,
            "inputs":[
            ],
            "name":"winner",
            "outputs":[
                {
                    "name":"",
                    "type":"address"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "constant":false,
            "inputs":[
            ],
            "name":"enter",
            "outputs":[
            ],
            "payable":true,
            "stateMutability":"payable",
            "type":"function"
        },
        {
            "constant":true,
            "inputs":[
            ],
            "name":"getAllPlayers",
            "outputs":[
                {
                    "name":"",
                    "type":"address[]"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "constant":true,
            "inputs":[
                {
                    "name":"",
                    "type":"uint256"
                }
            ],
            "name":"players",
            "outputs":[
                {
                    "name":"",
                    "type":"address"
                }
            ],
            "payable":false,
            "stateMutability":"view",
            "type":"function"
        },
        {
            "inputs":[
            ],
            "payable":false,
            "stateMutability":"nonpayable",
            "type":"constructor"
        }

    ];
//通过contract的abi和address来调用以太坊上的智能合约的实例 相当于Java的远程调用webservice
const lottery = new web3.eth.Contract(abi, address);

export default lottery