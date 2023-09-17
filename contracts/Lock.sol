// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Cell{

 mapping (uint => mapping (uint => uint)) cellB;

 uint randomNonce = 0;

 function setColors() public {
    uint seed = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randomNonce)));
     for(uint i = 1; i < 6; i++){
         for(uint j = 1; j < 8; j++){
             randomNonce++;
             if(( i % 2 == 0 ) && ( j % 2 == 0 )){
                 cellB[i][j] = seed % 4;
             }
             if(( i % 2 == 0 ) && ( j % 2 == 1 )){
                 cellB[i][j] = seed % 4;
             }
             if(( i % 2 == 1 ) && ( j % 2 == 0 )){
                 cellB[i][j] = seed % 4;
             }
             if(( i % 2 == 1 ) && ( j % 2 == 1 )){
                 cellB[i][j] = seed % 4;
             }
         }  
     }
 }

 function getColor(uint x, uint y) public view returns (uint){
     require((x < 6) && (y < 8));
     return cellB[x][y];
    }
}