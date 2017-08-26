var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var listingSchema = new Schema({
   cost : { type: Number },
   sqft : { type: Number },
   city : { type: String },
   __v : { type: Number }
});

var rentalSchema = new Schema({
    rent : { type: Number },
    sqft : { type: Number },
    city : { type: String },
    _v : { type: Number }
});

var schemaObject = {};
schemaObject.listingSchema = mongoose.model('Listing', listingSchema);
schemaObject.rentalSchema = mongoose.model('Rental', rentalSchema);

// export our model
module.exports = schemaObject;