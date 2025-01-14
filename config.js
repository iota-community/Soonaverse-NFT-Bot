const API_ADDRESS = "https://mainnet-node.tanglebay.com/api/v1/addresses/"; // Iota node API to get wallet balance
const BOT_TOKEN = "YOUR_DISCORD_API_TOKEN"; // Discord-API Bot-Token
const WALLET_LIST = [
    "YOUR_WALLET_ADDRESS_1",
    "YOUR_WALLET_ADDRESS_2"
]; // A List of Treasury-Wallets

const COLLECTION_ID = 'YOUR_NFT_COLLECTION_ID'; // Id of the NFT-Collection on Soonaverse
const GUILD_ID = "YOuR_DISCORD_GUILD_ID"; // Id of the discord server
const GRANT_ROLES_TO_NFT_HOLDERS = true; // Enable NFT-RoleManager feature
const SHOW_TREASURY_INFO = true; // Enable treasury as nickname
const ROLES_TABLE = [ // A table of roles depending on the minimum amount of NFT hold, only role 0 and the highest role is granted
    {roleid : "967913955408359434", reqNFTs : 0}, // 0 is granted to every NFT-Owner
    {roleid : "968142647833288704", reqNFTs : 1},
    {roleid : "968142737599762442", reqNFTs : 2},
    {roleid : "968142913664069642", reqNFTs : 4},
    {roleid : "968142985650917376", reqNFTs : 6},
    {roleid : "968143069847379969", reqNFTs : 8},
    {roleid : "968143117540786197", reqNFTs : 11},
    {roleid : "968143164982591509", reqNFTs : 14},
    {roleid : "968143214483742740", reqNFTs : 17},
    {roleid : "968143256938483752", reqNFTs : 21}
];

export {API_ADDRESS};
export {BOT_TOKEN};
export {WALLET_LIST};
export {COLLECTION_ID};
export {GUILD_ID};
export {GRANT_ROLES_TO_NFT_HOLDERS};
export {SHOW_TREASURY_INFO};
export {ROLES_TABLE};
