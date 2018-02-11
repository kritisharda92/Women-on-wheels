var mongoose = require('mongoose');


var SuggestionSchema = new mongoose.Schema({
    city : {
        type : String,
        required : true
    },
    state : {
        type : String
    },
    mood : [String],
    image : {
        type : String

    },
    things : {
        type : Array,
        required : true,
        items:{
                type:Object,
                properties:{
                    place_name:{
                        type:String

                    },
                    rate:{
                        type:Number
                    }
                }


        }
    }
});

mongoose.model('Suggestions', SuggestionSchema, 'suggestion');