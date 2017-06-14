var schema = new Schema({
    name: {
        type: String,
        required: true,
       
    },
    email:{
        type: String,
        required:true,
        unique: true,
        validate: validators.isEmail()
    },
    dob: {
        type: Date,
        required:true,
    },
    mobile:{
        type:Number
    },
    hobbies: {
        type: String,
        required:true
    },
    school_name: {
        type: Schema.Types.ObjectId,
        ref: 'School',
        index: true
    }

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Student', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "school_name", "school_name"));
var model = {};
module.exports = _.assign(module.exports, exports, model);