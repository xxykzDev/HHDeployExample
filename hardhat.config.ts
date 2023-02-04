require("@nomicfoundation/hardhat-toolbox"); // => Importamos el plugin brindado por hardhat toolbox
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17", // => version del compilador
};

export default config;
