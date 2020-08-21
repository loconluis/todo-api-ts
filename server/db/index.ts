import mongoose from "mongoose";
// Connection with the database
mongoose.connect("", { useMongoClient: true });

export default mongoose;
