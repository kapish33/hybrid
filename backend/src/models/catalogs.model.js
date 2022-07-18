
const { Schema, model } = require('mongoose');

const catalogSchema = new Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model('Catalog', catalogSchema);
