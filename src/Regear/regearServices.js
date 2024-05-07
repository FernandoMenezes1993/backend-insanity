const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://insanityalbion:Xb8qqRnNTrDFrfAr@insanity-api.xswedqc.mongodb.net/?retryWrites=true&w=majority&appName=insanity-api");

const Regear = mongoose.model("Regear", {
    Name: String,
    Link: String,
    Responsavel: String,
    Class: String,
    Status: String
});

module.exports ={
    saveReger:async(Name, Link, Responsavel, Class, Status)=>{
        const newRegear = new Regear ({
            Name: Name,
            Link: Link,
            Responsavel: Responsavel,
            Class: Class,
            Status: Status
        });
        await newRegear.save();
        return newRegear;
    },
    regears:async(Nickname)=>{
        const regears = Regear.find( { Name: Nickname } );
        return regears;
    }
}