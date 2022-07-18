const { Schema, model } = require('mongoose');

const checkOutSchema = new Schema(
  {
    seller_id: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    ],
  },
  {
    versionKey: false,
  }
);
module.exports = model('CheckOut', checkOutSchema);
