const mongoose = require("mongoose")



const DB = "mongodb+srv://prem7721:premsaini@cluster0.y4ks5mi.mongodb.net/CRUDAPP?retryWrites=true&w=majority";



mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DATABASE connected")).catch((err) => console.log("error" + err.message))