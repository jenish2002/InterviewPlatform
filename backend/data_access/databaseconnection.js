const mongoose= require('mongoose');
// const mongoURI="mongodb+srv://vatsal2401:Vatsal9393@cluster0.800wcdy.mongodb.net/CloudCar?retryWrites=true&w=majority"
const mongoURI="mongodb+srv://vatsal2401:Vatsal9393@cluster0.800wcdy.mongodb.net/InterviewPlatform?retryWrites=true&w=majority"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,{  useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    ).then(()=>{
        console.log("connection succefully")
    }).catch((err) => console.log(err))
}
module.exports=connectToMongo;