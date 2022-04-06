import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x45d63222AE422B5143a480E9d12a415366aA5Ce9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bar with tables",
        description: "This NFT will give you access to Foo DAO!",
        image: readFileSync("scripts/assets/bar.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();