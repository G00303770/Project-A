var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TeamSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var ItemSchema = new Schema({
 
    ItemName: {
      type: String,
      required: true
    },
  
    ItemCatalog: {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    },
    Image: {
      type: String,
      default: 'images/user.png'
    },
    ToBeCompleted: {
        type: double,
        required: true
      }
  
  });