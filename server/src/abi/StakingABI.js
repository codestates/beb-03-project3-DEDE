export const stakingAbi = [
  {
	"constant": true,
	"inputs": [],
	"name": "isDedeDex",
	"outputs": [
	  {
		"name": "",
		"type": "bool"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [],
	"name": "renounceOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "kip17",
		"type": "address"
	  }
	],
	"name": "setKip17",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "dedeDex",
		"type": "address"
	  }
	],
	"name": "setDedeDex",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [
	  {
		"name": "",
		"type": "address"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"constant": true,
	"inputs": [],
	"name": "isOwner",
	"outputs": [
	  {
		"name": "",
		"type": "bool"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "dedeStaking",
		"type": "address"
	  }
	],
	"name": "setDedeStaking",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": true,
	"inputs": [],
	"name": "isKip17",
	"outputs": [
	  {
		"name": "",
		"type": "bool"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "newOwner",
		"type": "address"
	  }
	],
	"name": "transferOwnership",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": true,
	"inputs": [],
	"name": "isStaking",
	"outputs": [
	  {
		"name": "",
		"type": "bool"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
  },
  {
	"anonymous": false,
	"inputs": [
	  {
		"indexed": true,
		"name": "previousOwner",
		"type": "address"
	  },
	  {
		"indexed": true,
		"name": "newOwner",
		"type": "address"
	  }
	],
	"name": "OwnershipTransferred",
	"type": "event"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "period",
		"type": "uint256"
	  }
	],
	"name": "setPeriod",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "from",
		"type": "address"
	  },
	  {
		"name": "amount",
		"type": "uint256"
	  }
	],
	"name": "stake",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "to",
		"type": "address"
	  },
	  {
		"name": "amount",
		"type": "uint256"
	  }
	],
	"name": "unstake",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  },
  {
	"constant": true,
	"inputs": [
	  {
		"name": "from",
		"type": "address"
	  }
	],
	"name": "getStakedTokens",
	"outputs": [
	  {
		"name": "",
		"type": "uint256"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"constant": true,
	"inputs": [],
	"name": "getTotalStakedTokens",
	"outputs": [
	  {
		"name": "",
		"type": "uint256"
	  }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
  },
  {
	"constant": false,
	"inputs": [
	  {
		"name": "tokenAddress",
		"type": "address"
	  }
	],
	"name": "setToken",
	"outputs": [
	  {
		"name": "",
		"type": "bool"
	  }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
  }
];

export const stakingByteCode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3603c600581905550611466806100e46000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063c2a672e011610066578063c2a672e0146103b7578063d458a8ca14610405578063f2fde38b14610427578063f3bcbf631461046b57610100565b80638da5cb5b146102b95780638f32d59b1461030357806397276cdd14610325578063adc9772e1461036957610100565b806363c28db1116100d357806363c28db1146101cf578063715018a6146102275780637f8f073c1461023157806386252a621461027557610100565b80630f3a9f6514610105578063144fa6d71461013357806351d185981461018f5780635bac13ab146101ad575b600080fd5b6101316004803603602081101561011b57600080fd5b810190808035906020019092919050505061048d565b005b6101756004803603602081101561014957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610511565b604051808215151515815260200191505060405180910390f35b610197610611565b6040518082815260200191505060405180910390f35b6101b56106f2565b604051808215151515815260200191505060405180910390f35b610211600480360360208110156101e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061074a565b6040518082815260200191505060405180910390f35b61022f610793565b005b6102736004803603602081101561024757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108cc565b005b6102b76004803603602081101561028b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098a565b005b6102c1610a48565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61030b610a71565b604051808215151515815260200191505060405180910390f35b6103676004803603602081101561033b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ac8565b005b6103b56004803603604081101561037f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b86565b005b610403600480360360408110156103cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dea565b005b61040d611136565b604051808215151515815260200191505060405180910390f35b6104696004803603602081101561043d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061118e565b005b610473611214565b604051808215151515815260200191505060405180910390f35b610495610a71565b610507576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060058190555050565b600061051b610a71565b61058d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156105c757600080fd5b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050919050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156106b257600080fd5b505afa1580156106c6573d6000803e3d6000fd5b505050506040513d60208110156106dc57600080fd5b8101908080519060200190929190505050905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61079b610a71565b61080d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6108d4610a71565b610946576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610992610a71565b610a04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610ad0610a71565b610b42576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610b8e610a71565b610c00576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc3d8a258330846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610cdd57600080fd5b505af1158015610cf1573d6000803e3d6000fd5b505050506040513d6020811015610d0757600080fd5b81019080805190602001909291905050505080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506005544201600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b610df2610a71565b610e64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b42600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115610efc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603181526020018061140a6031913960400191505060405180910390fd5b80600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610f94576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806113d76033913960400191505060405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fc3d8a253084846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561107157600080fd5b505af1158015611085573d6000803e3d6000fd5b505050506040513d602081101561109b57600080fd5b81019080805190602001909291905050505080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b611196610a71565b611208576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6112118161126c565b50565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806113b16026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373444544455354414b494e473a2063616e6e6f7420756e7374616b65206d6f7265207468616e207374616b656420746f6b656e73444544455354414b494e473a2063616e6e6f7420756e7374616b65206265666f7265207374616b696e6720706572696f64a165627a7a72305820174c1b090d1dec3401c8b1caf8ece46f0660a0479ea4fef31bdf03e63eda8cc80029";