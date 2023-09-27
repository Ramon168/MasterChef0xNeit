/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMigratorChef,
  IMigratorChefInterface,
} from "../../MasterChef.sol/IMigratorChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBEP20",
        name: "token",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMigratorChef__factory {
  static readonly abi = _abi;
  static createInterface(): IMigratorChefInterface {
    return new Interface(_abi) as IMigratorChefInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMigratorChef {
    return new Contract(address, _abi, runner) as unknown as IMigratorChef;
  }
}
