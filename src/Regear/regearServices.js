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
    Bota: String,
    Data: String,
    Dia: String,
    Capa: String,
    Bolsa: String,
    DataAceito: String,
    DataFinalizado: String,
    MsgStaff: String,
    bauRegear: String
});

module.exports ={
    saveReger:async(Name, Link, Responsavel, Class, Status, MainHand, OffHand, Cabeca, Peitoral, Bota, Data, Dia, Capa, Bolsa)=>{
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
            Bota: Bota,
            Data: Data,
            Dia: Dia,
            Capa: Capa,
            Bolsa: Bolsa,
            DataAceito: "None",
            DataFinalizado: "None",
            MsgStaff: "Null",
            bauRegear: "0"
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
    },
    getRegears:async()=>{
        const regears = await Regear.find();
        return regears;
    },
    attRegearAceito:async(id, Responsavel, Status, DataAceito)=>{
        const updateReger = {
            Responsavel: Responsavel,
            Status: Status,
            DataAceito: DataAceito
        }
        const updatedRegear = await Regear.findByIdAndUpdate(id, updateReger);        
    },
    regearFinalizado:async(id, bauRegear, Status, DataFinalizado, Responsavel, MsgStaff)=>{
        const updateReger = {
            bauRegear: bauRegear,
            Status: Status,
            DataFinalizado: DataFinalizado,
            Responsavel: Responsavel,
            MsgStaff: MsgStaff          
        }
        const updatedRegear = await Regear.findByIdAndUpdate(id, updateReger);
    }
}