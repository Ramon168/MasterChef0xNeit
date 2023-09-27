/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SyrupBar,
  SyrupBarInterface,
} from "../../MasterChef.sol/SyrupBar";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SobaToken",
        name: "_soba",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "safeSobaTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "soba",
    outputs: [
      {
        internalType: "contract SobaToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200223f3803806200223f833981810160405260208110156200003757600080fd5b5051604080518082018252600e81526d29bcb93ab82130b9102a37b5b2b760911b60208281019190915282518084019093526005835264053595255560dc1b908301529060006200008762000136565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000e69060049060208501906200013a565b508051620000fc9060059060208401906200013a565b5050600680546001600160a01b0390931661010002610100600160a81b031960ff19909416601217939093169290921790915550620001d6565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017d57805160ff1916838001178555620001ad565b82800160010185558215620001ad579182015b82811115620001ad57825182559160200191906001019062000190565b50620001bb929150620001bf565b5090565b5b80821115620001bb5760008155600101620001c0565b61205980620001e66000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063893d20e811610104578063a9059cbb116100a2578063e7a324dc11610071578063e7a324dc146105ef578063f1127ed8146105f7578063f2fde38b14610649578063f9a258e91461066f576101da565b8063a9059cbb14610528578063b4b5ea5714610554578063c3cda5201461057a578063dd62ed3e146105c1576101da565b806395d89b41116100de57806395d89b41146104ab5780639dc29fac146104b3578063a0712d68146104df578063a457c2d7146104fc576101da565b8063893d20e8146104935780638da5cb5b1461049b5780638efed417146104a3576101da565b806340c10f191161017c57806370a082311161014b57806370a0823114610413578063715018a614610439578063782d6fe1146104415780637ecebe001461046d576101da565b806340c10f191461033e578063587cde1e1461036c5780635c19a95c146103ae5780636fcfff45146103d4576101da565b806320606b70116101b857806320606b70146102b657806323b872dd146102be578063313ce567146102f45780633950935114610312576101da565b806306fdde03146101df578063095ea7b31461025c57806318160ddd1461029c575b600080fd5b6101e761069b565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610221578181015183820152602001610209565b50505050905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102886004803603604081101561027257600080fd5b506001600160a01b038135169060200135610731565b604080519115158252519081900360200190f35b6102a461074f565b60408051918252519081900360200190f35b6102a4610755565b610288600480360360608110156102d457600080fd5b506001600160a01b03813581169160208101359091169060400135610779565b6102fc610800565b6040805160ff9092168252519081900360200190f35b6102886004803603604081101561032857600080fd5b506001600160a01b038135169060200135610809565b61036a6004803603604081101561035457600080fd5b506001600160a01b038135169060200135610857565b005b6103926004803603602081101561038257600080fd5b50356001600160a01b03166108f4565b604080516001600160a01b039092168252519081900360200190f35b61036a600480360360208110156103c457600080fd5b50356001600160a01b0316610912565b6103fa600480360360208110156103ea57600080fd5b50356001600160a01b031661091f565b6040805163ffffffff9092168252519081900360200190f35b6102a46004803603602081101561042957600080fd5b50356001600160a01b0316610937565b61036a610952565b6102a46004803603604081101561045757600080fd5b506001600160a01b038135169060200135610a13565b6102a46004803603602081101561048357600080fd5b50356001600160a01b0316610c1b565b610392610c2d565b610392610c3c565b610392610c4b565b6101e7610c5f565b61036a600480360360408110156104c957600080fd5b506001600160a01b038135169060200135610cc0565b610288600480360360208110156104f557600080fd5b5035610d34565b6102886004803603604081101561051257600080fd5b506001600160a01b038135169060200135610db9565b6102886004803603604081101561053e57600080fd5b506001600160a01b038135169060200135610e21565b6102a46004803603602081101561056a57600080fd5b50356001600160a01b0316610e35565b61036a600480360360c081101561059057600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610e99565b6102a4600480360360408110156105d757600080fd5b506001600160a01b0381358116916020013516611127565b6102a4611152565b6106296004803603604081101561060d57600080fd5b5080356001600160a01b0316906020013563ffffffff16611176565b6040805163ffffffff909316835260208301919091528051918290030190f35b61036a6004803603602081101561065f57600080fd5b50356001600160a01b03166111a3565b61036a6004803603604081101561068557600080fd5b506001600160a01b038135169060200135611216565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b820191906000526020600020905b81548152906001019060200180831161070a57829003601f168201915b5050505050905090565b600061074561073e61143b565b848461143f565b5060015b92915050565b60035490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b600061078684848461152b565b6107f68461079261143b565b6107f185604051806060016040528060288152602001611ebb602891396001600160a01b038a166000908152600260205260408120906107d061143b565b6001600160a01b03168152602081019190915260400160002054919061167d565b61143f565b5060019392505050565b60065460ff1690565b600061074561081661143b565b846107f1856002600061082761143b565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611714565b61085f61143b565b6000546001600160a01b039081169116146108c1576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6108cb828261176e565b6001600160a01b038083166000908152600760205260408120546108f0921683611854565b5050565b6001600160a01b039081166000908152600760205260409020541690565b61091c3382611991565b50565b60096020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526001602052604090205490565b61095a61143b565b6000546001600160a01b039081169116146109bc576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000438210610a535760405162461bcd60e51b8152600401808060200182810382526027815260200180611e946027913960400191505060405180910390fd5b6001600160a01b03831660009081526009602052604090205463ffffffff1680610a81576000915050610749565b6001600160a01b038416600090815260086020908152604080832063ffffffff600019860181168552925290912054168310610af0576001600160a01b03841660009081526008602090815260408083206000199490940163ffffffff16835292905220600101549050610749565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff16831015610b2b576000915050610749565b600060001982015b8163ffffffff168163ffffffff161115610be457600282820363ffffffff16048103610b5d611dd9565b506001600160a01b038716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610bbf576020015194506107499350505050565b805163ffffffff16871115610bd657819350610bdd565b6001820392505b5050610b33565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610c37610c3c565b905090565b6000546001600160a01b031690565b60065461010090046001600160a01b031681565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b610cc861143b565b6000546001600160a01b03908116911614610d2a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6108cb8282611a33565b6000610d3e61143b565b6000546001600160a01b03908116911614610da0576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610db1610dab61143b565b8361176e565b506001919050565b6000610745610dc661143b565b846107f185604051806060016040528060258152602001611f786025913960026000610df061143b565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919061167d565b6000610745610e2e61143b565b848461152b565b6001600160a01b03811660009081526009602052604081205463ffffffff1680610e60576000610e92565b6001600160a01b038316600090815260086020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610ec461069b565b80519060200120610ed3611b23565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a905282518085039091018152610140840183528051908501207f19010000000000000000000000000000000000000000000000000000000000006101608501526101628401829052610182808501829052835180860390910181526101a285018085528151918701919091206000918290526101c2860180865281905260ff8b166101e287015261020286018a90526102228601899052935192965090949293909260019261024280840193601f198301929081900390910190855afa158015611021573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110735760405162461bcd60e51b8152600401808060200182810382526026815260200180611f526026913960400191505060405180910390fd5b6001600160a01b0381166000908152600a6020526040902080546001810190915589146110d15760405162461bcd60e51b8152600401808060200182810382526022815260200180611fe06022913960400191505060405180910390fd5b874211156111105760405162461bcd60e51b8152600401808060200182810382526026815260200180611ee36026913960400191505060405180910390fd5b61111a818b611991565b505050505b505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6111ab61143b565b6000546001600160a01b0390811691161461120d576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61091c81611b27565b61121e61143b565b6000546001600160a01b03908116911614611280576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156112e957600080fd5b505afa1580156112fd573d6000803e3d6000fd5b505050506040513d602081101561131357600080fd5b50519050808211156113ad576006546040805163a9059cbb60e01b81526001600160a01b0386811660048301526024820185905291516101009093049091169163a9059cbb916044808201926020929091908290030181600087803b15801561137b57600080fd5b505af115801561138f573d6000803e3d6000fd5b505050506040513d60208110156113a557600080fd5b506114369050565b6006546040805163a9059cbb60e01b81526001600160a01b0386811660048301526024820186905291516101009093049091169163a9059cbb916044808201926020929091908290030181600087803b15801561140957600080fd5b505af115801561141d573d6000803e3d6000fd5b505050506040513d602081101561143357600080fd5b50505b505050565b3390565b6001600160a01b0383166114845760405162461bcd60e51b8152600401808060200182810382526024815260200180611e4a6024913960400191505060405180910390fd5b6001600160a01b0382166114c95760405162461bcd60e51b81526004018080602001828103825260228152602001806120026022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166115705760405162461bcd60e51b8152600401808060200182810382526025815260200180611e256025913960400191505060405180910390fd5b6001600160a01b0382166115b55760405162461bcd60e51b8152600401808060200182810382526023815260200180611f2f6023913960400191505060405180910390fd5b6115f281604051806060016040528060268152602001611f09602691396001600160a01b038616600090815260016020526040902054919061167d565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546116219082611714565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561170c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116d15781810151838201526020016116b9565b50505050905090810190601f1680156116fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610e92576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b0382166117c9576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6003546117d69082611714565b6003556001600160a01b0382166000908152600160205260409020546117fc9082611714565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b816001600160a01b0316836001600160a01b0316141580156118765750600081115b15611436576001600160a01b03831615611908576001600160a01b03831660009081526009602052604081205463ffffffff1690816118b65760006118e8565b6001600160a01b038516600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006118f68285611bd4565b905061190486848484611c16565b5050505b6001600160a01b03821615611436576001600160a01b03821660009081526009602052604081205463ffffffff169081611943576000611975565b6001600160a01b038416600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006119838285611714565b905061111f85848484611c16565b6001600160a01b03808316600090815260076020526040812054909116906119b884610937565b6001600160a01b03858116600081815260076020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611a2d828483611854565b50505050565b6001600160a01b038216611a785760405162461bcd60e51b8152600401808060200182810382526021815260200180611f9d6021913960400191505060405180910390fd5b611ab581604051806060016040528060228152602001611fbe602291396001600160a01b038516600090815260016020526040902054919061167d565b6001600160a01b038316600090815260016020526040902055600354611adb9082611bd4565b6003556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b4690565b6001600160a01b038116611b6c5760405162461bcd60e51b8152600401808060200182810382526026815260200180611e6e6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000610e9283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061167d565b6000611c3a43604051806060016040528060348152602001611df160349139611d7b565b905060008463ffffffff16118015611c8357506001600160a01b038516600090815260086020908152604080832063ffffffff6000198901811685529252909120548282169116145b15611cc0576001600160a01b038516600090815260086020908152604080832063ffffffff60001989011684529091529020600101829055611d31565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600884528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260099092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b6000816401000000008410611dd15760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156116d15781810151838201526020016116b9565b509192915050565b60408051808201909152600080825260208201529056fe534f42413a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747342455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373534f42413a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656442455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365534f42413a3a64656c656761746542795369673a207369676e6174757265206578706972656442455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636542455032303a207472616e7366657220746f20746865207a65726f2061646472657373534f42413a3a64656c656761746542795369673a20696e76616c6964207369676e617475726542455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a206275726e2066726f6d20746865207a65726f206164647265737342455032303a206275726e20616d6f756e7420657863656564732062616c616e6365534f42413a3a64656c656761746542795369673a20696e76616c6964206e6f6e636542455032303a20617070726f766520746f20746865207a65726f2061646472657373a26469706673582212209d0c17af9b52e2739d90fc198ff35e2287f84030d82c2fd4708f236591b08afb64736f6c634300060c0033";

type SyrupBarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SyrupBarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SyrupBar__factory extends ContractFactory {
  constructor(...args: SyrupBarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _soba: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_soba, overrides || {});
  }
  override deploy(
    _soba: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_soba, overrides || {}) as Promise<
      SyrupBar & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SyrupBar__factory {
    return super.connect(runner) as SyrupBar__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SyrupBarInterface {
    return new Interface(_abi) as SyrupBarInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SyrupBar {
    return new Contract(address, _abi, runner) as unknown as SyrupBar;
  }
}
