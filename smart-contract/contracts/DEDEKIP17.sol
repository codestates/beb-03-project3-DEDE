// SPDX-License-Identifier: MIT
pragma solidity 0.5.6;

import "@klaytn/contracts/token/KIP17/KIP17Token.sol";
import "./Ownable.sol";
import "@klaytn/contracts/drafts/Counters.sol";
import "./DEDEKIP7.sol";

contract DEDEKIP17 is KIP17Token, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  DEDEKIP7 token;

  constructor() public KIP17Token("DEDE NFT", "DEDENFT") {}

  function mintNft(address recipient, 
				  // address seller, 
				   string memory tokenURI, uint256 nftPrice) public onlyOwner {
	require(token.balanceOf(recipient) >= nftPrice, "DEDEKIP17: Insufficient tokens to mint NFT");

	// uint256 tax = nftPrice / 10;
	// token.delegatedTransferForKip17(recipient, seller, nftPrice - tax);
	// token.delegatedTransferForKip17(recipient, owner(), tax);

	_tokenIds.increment();
	uint256 newItemId = _tokenIds.current();
	_mint(recipient, newItemId);
	_setTokenURI(newItemId, tokenURI);
  }

  function setToken(address tokenAddress) public onlyOwner returns(bool) {
	require(tokenAddress != address(0x0));
	token = DEDEKIP7(tokenAddress);
	return true;
  }
}
