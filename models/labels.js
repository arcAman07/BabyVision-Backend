const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const mongoose = require("mongoose");
const {Schema} = mongoose;
const labelSchema = new Schema(
    {
        name:{ type:'string', required: true},
        username: {type: 'string',
            required: true},
        picture:{ type:'string'},
        label:{type:'string'},


}

);

module.exports = labelSchema;