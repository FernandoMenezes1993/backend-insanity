const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://insanityalbion:Xb8qqRnNTrDFrfAr@insanity-api.xswedqc.mongodb.net/?retryWrites=true&w=majority&appName=insanity-api");

const Regear = mongoose.model("Regear", {
    Name: String,
    Link: String,
    Responsavel: String,
    Class: String,
    Status: String,
    MainHand: String,
    OffHand: String,
    Cabeca: String,
    Peitoral: String,
    Bota: String
});

module.exports ={
    saveReger:async(Name, Link, Responsavel, Class, Status, MainHand, OffHand, Cabeca, Peitoral, Bota)=>{
        const newRegear = new Regear ({
            Name: Name,
            Link: Link,
            Responsavel: Responsavel,
            Class: Class,
            Status: Status,
            MainHand: MainHand,
            OffHand: OffHand,
            Cabeca: Cabeca,
            Peitoral: Peitoral,
            Bota: Bota
        });
        await newRegear.save();
        return newRegear;
    },
    regears:async(Nickname)=>{
        const regears = Regear.find( { Name: Nickname } );
        return regears;
    },
    getRegear:async(id)=>{
        try {
            const regear = await Regear.findById(id);
            return regear;
        } catch (error) {
            console.error('Erro ao buscar Regear:', error);
            // Lidar com o erro de forma adequada, possivelmente lançando novamente ou retornando null
            throw error; // ou return null;
        }
    }
}