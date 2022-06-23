const proxy = "https://proxy-sites.herokuapp.com/";

const WS = "0x0000000000000000000000000000000000000000";//0x0000000000000000000000000000000000000000 recibe los huerfanos por defecto

var INFINITY = "0xf9B921b48B35b21b9aEeC5Ddfc16DCe91C0f16EF"; // version 2

var TOKEN = "0x55d398326f99059fF775485246999027B3197955";
var chainId = '0x38';

if(true){// testnet comand
    INFINITY = "0x9d0c7e030a577ea534195f97d8cfd02945f3c7f0"; // version 2  0xf47fBd34E663D8F5ad78fbf46Ae097202557A8e8

    TOKEN = "0x40C80876445AB64cA272e20592d71be9c83A7E93";
    chainId = "0xC7"; //           |   '0x61';// 
    //                  BTTCAHIN       BNB test
}

export default {proxy, WS,INFINITY, TOKEN, chainId};
