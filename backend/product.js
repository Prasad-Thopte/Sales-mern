import mongoose from "mongoose";
var Schema = mongoose.Schema;

const productSchema = new Schema( {
	pname: String,
	qty: Number,
	amt: Number,
	
	user_id: Schema.ObjectId,
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
}),
product1 = mongoose.model('product', productSchema);

export default product1;