var schema = new Schema({
    school_name: {
        type: String,
        required: true,
        unique: true
        // uniqueCaseInsensitive: true,
    },
    school_address: {
        type: String
    },
    school_phone_number: {
        type: Number
    },
    student_name: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        index: true
    }]

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('School', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema,"student_name","student_name")); 
var model = {};
module.exports = _.assign(module.exports, exports, model);