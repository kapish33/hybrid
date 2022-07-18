const { Schema, model } = require('mongoose');

const productCatalogSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    catalog: {
      type: Schema.Types.ObjectId,
      ref: 'Catalog',
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
module.exports = model('ProductCatalog', productCatalogSchema);
