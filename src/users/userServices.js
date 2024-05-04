const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://insanityalbion:Xb8qqRnNTrDFrfAr@insanity-api.xswedqc.mongodb.net/?retryWrites=true&w=majority&appName=insanity-api");

const Usuarios = mongoose.model("Usuarios", {
    Name: String,
    Senha: String,
    Email: String,
    Cargo: String,
    Discordid: String
});

module.exports ={
    
    getUsers: async()=>{        
        const user = await Usuarios.find();
        return user;
    },

    seveNewUser:async(Name, Senha, Email, Cargo, Discordid)=>{
        const newUser = new Usuarios ({
            Name: Name,
            Senha: Senha,
            Email: Email,
            Cargo: Cargo,
            Discordid: Discordid
        });
        await newUser.save();
        return newUser;
    },

    checksNickname:async(Nome)=>{
        const nomeVerificado = Usuarios.find({ Name: Nome });
        return nomeVerificado;
    }
}