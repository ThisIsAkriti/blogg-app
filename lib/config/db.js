import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://iammuhammadsaiif:saif111@cluster0.eqazgvv.mongodb.net/blogg-app');
    console.log("DB Connected");
}