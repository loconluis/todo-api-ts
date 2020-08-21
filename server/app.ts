import express, { Request, Response } from "express";

const app = express();


app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running!");
})

app.listen(3001, () => {
  console.log("Server is running in port 3001");
});
