
const {model, Schema} = require('mongoose');
const timest = require('../../middleware/timestamp');

const productSchema = new Schema({
    id: String,
	sku: Number,
	name: String,
	description: String,
	price: Number,
	currency: String,
	creatorId: Number,
    categories:Array,
    likes: Number,
})

productSchema.plugin(timest);
productSchema.pre('save', function(next){
    this.likes=0
    next()
  })

const Product = model('Products', productSchema)

module.exports = Product

