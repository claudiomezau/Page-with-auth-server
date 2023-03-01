const mongoose  = require("mongoose");


const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
           // useCreateIndex: true              is not supported
        });
        console.log('BD Online');
            

    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }
}

module.exports= {
    dbConnection
}