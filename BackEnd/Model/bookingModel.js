const mongoose= require("mongoose");
const { DB_LINK } = require("../config/secrets");

mongoose.connect(DB_LINK, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((db)=>
    {
        console.log('Connected to DB');
    }
);

//bookedPlan schema
const bookedPlanSchema= new mongoose.Schema({
    planId:{
        type:String,
        required:true
    },
    planName:{
        type:String,
        required:true
    },
    currentPrice:{
        type:Number,
        required:true
    },
    bookedOn:{
        type:String,
        default:Date.now()
    }
})
//booking schema

const bookingSchema= new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    bookedPlans:{
        type:[bookedPlanSchema],
        required:true
    }
})

const bookingModel = mongoose.model("bookingcollection", bookingSchema);
module.exports=bookingModel;






