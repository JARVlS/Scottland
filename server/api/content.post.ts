import fs from "node:fs";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  fs.writeFileSync("./assets/content.json", JSON.stringify(body));
  return {success: true}
});
