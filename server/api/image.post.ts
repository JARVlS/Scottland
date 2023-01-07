import fs from "node:fs";
// import multiparty from "multiparty"
// import nanoid from "nanoid"

export default defineEventHandler(async (event) => {
    // const form = new multiparty.Form()
    // // const responses: Array<Promise<{ error?: any; filename: string }>> = [];
    // form.on("part", part=>{
    //     const save_name = nanoid.nanoid() + part.filename
    //     const writer = fs.createWriteStream(`./assets/${save_name}`)
    //     part.pipe(writer)
    // })
    // form.on("close", ()=>{
    //     console.log("form was closed")
    // })
});
