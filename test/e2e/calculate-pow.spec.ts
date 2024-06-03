import axios from "axios";
import * as fs from "node:fs/promises"
import { resolve } from "node:path";
import app from "../../src/app";

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: [{"Content-Type": "application/json"}] as any
})

async function clearTestDb(){
  const url = resolve(__dirname, "../..", `src/database/${process.env.DATABASE_FILE}`)
  try{
    fs.writeFile(url, JSON.stringify({}))
  }catch(e){}
}

describe("Calculate Pow", ()=>{
  beforeAll(async ()=>{
    await app.listen({port: 3333})
  })

  beforeEach(async ()=>{
    await clearTestDb()
    setTimeout(() => {}, 500);
  })

  afterAll(async ()=>{
    await app.close()
  })

  it("should calculate pow of two numbers", async ()=>{
    const response = await api.post("/pow", {
      a: 2,
      exp: 5,
    })
    const expected = 32

    expect(response.data.result).toEqual(expected)
  })
})