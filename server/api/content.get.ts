import fs from "node:fs";

export default defineEventHandler(async (event) => {
    const data = fs.readFileSync("./assets/content.json")
    return data
});
