import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config';
import router from "./routes/todoRoutes"

interface dbConnection {
    dbUrl: string
}
const port = process.env.PORT || 3000;
const app = express()
app.use(cors())
app.use(express.json())

app.use("/todoRoutes",router)

const dbConfig: dbConnection={
    dbUrl : process.env.MONGO_DB as string
}
const connectOptions = {
    useNewUrlParser: true,          // Use the new URL parser
    useUnifiedTopology: true,      // Use the new unified topology engine
    dbName: 'todo-app'              // Name of the database
};
if (!process.env.MONGO_DB) {
    throw new Error("Missing MONGO_DB environment variable. Please set it before starting the server.");
  }
// establishing connection string
mongoose.connect(dbConfig.dbUrl, connectOptions)
.then(()=>{
    console.log("Connected to the database");
})
.catch(err=>{
    console.log(dbConfig.dbUrl)
    console.error("Error connecting to db: ", err)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });