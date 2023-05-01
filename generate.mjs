import fs from "node:fs";

// const collection = JSON.parse(fs.readFileSync("./collection.json", "utf-8"));
const _files = fs.readdirSync("./data");

// function generateTokenFiles(files) {
//   const tokens = files.map((file) => {
//     const id = file.replace(".html", "");
//     const json = JSON.parse(fs.readFileSync(`./___json/${id}.json`, "utf-8"));

//     const token = {
//       id,
//       traits: json.token.traits,
//       inscriber: null,
//     };

//     fs.mkdirSync(`./tokens`, { recursive: true });
//     fs.writeFileSync(`./tokens/${id}.json`, JSON.stringify(token, null, 2));

//     return token;
//   });

//   return tokens;
// }

// generateTokenFiles(_files);
