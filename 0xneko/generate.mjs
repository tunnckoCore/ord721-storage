import fs from "node:fs/promises";

async function generate() {
  const contentFiles = await fs.readdir("./content");
  // const metadataFiles = await fs.readdir("./metadata");

  for (const file of contentFiles) {
    const id = Number(file.replace(".html", ""));
    const uri = await fs.readFile(`./content/${file}`, "utf-8");
    const json = JSON.parse(
      await fs.readFile(`./metadata/${id}.json`, "utf-8")
    );

    const token = {
      id,
      uri: `data:text/html;base64,${Buffer.from(uri).toString("base64")}`,
      traits: json.traits,
      // inscriberAddress: `bc1pk42g9szvyl7xxdpdszn5ql6ce2mzc0wmy05y97qfmu7hs8uftnns5tc37k`,
    };

    const manifest = {
      protocol: {
        name: "ORD721",
        version: "1.0.0",
        type: "token",
      },
      token,
      collectionDigest: `69a90692f9b6f820920415309015b985b8f121e69cf65a9cc61d8068ad9110d3`,
      collectionInscriptionId: `bfeb5be851e052c3d3aee642852302d926d10ce5c578df95e02f3de265fabe22i0`,
    };

    await fs.mkdir("./token-manifests", { recursive: true });
    await fs.writeFile(
      `./token-manifests/${id}.json`,
      JSON.stringify(manifest)
    );
  }
}

await generate();
