const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://insanityalbion:Xb8qqRnNTrDFrfAr@insanity-api.xswedqc.mongodb.net/?retryWrites=true&w=majority&appName=insanity-api");

const Regear = mongoose.model("Regear", {
    Name: String,
    Link: String
});

module.exports ={
    saveReger:async(Name, Link)=>{
        const newRegear = new Regear ({
            Name: Name,
            Link: Link
        });
        await newRegear.save();
        return newRegear;
    }
}