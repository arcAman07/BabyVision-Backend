const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const mongoose = require("mongoose");

const userSchema = new Schema(
    {
        name:{ type:'string', required: true},
        email:{ type:'string', required: true},
        username: {type: 'string',
            required: true},
        password: {type: 'string'
}

});

module.exports = userSchema;