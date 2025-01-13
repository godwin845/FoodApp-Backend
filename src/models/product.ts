import mongoose, { Document, Schema } from 'mongoose';

interface IProducts extends Document {
    name: string;
    price: string;
    imageUrl: string;
}

const productSchema: Schema = new mongoose.Schema({
    name: String,
    price: String,
    imageUrl: String,
});

const Product = mongoose.model<IProducts>('Product', productSchema);

export default Product;