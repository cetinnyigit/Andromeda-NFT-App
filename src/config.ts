import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
  coinDenom: "ustars",
  name: "Embeddable House",
  chainId: "elgafar-1",
  createdDate: "2024-03-31T19:01:01.148Z",
  modifiedDate: "2024-03-31T19:01:01.148Z",
  id: "andromeda",
  collections: [
    {
      auction:
        "andr1m334dtfkfrt6akgeex3mfnquv2uf4x6lkqm6p68hgl76c59e0krq44ueyh",
      cw721: "andr172ru29gaty4v6x0h43nyjtmru8a5p3n0rhs9ljc5g40zfpuhvt8svzclhe",
      name: "Ceto",
      id: "embeddables-auction-1",
      type: ICollectionType.AUCTION,
      featured: "ANDR1",
    },
  ],
};

export default CONFIG;
