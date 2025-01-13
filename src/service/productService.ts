import Product from "../models/product";

export const getAllProducts = async () => {
  return await Product.find();
};

export const addProduct = async (name: string, price: number, imageUrl: string) => {
  const newProduct = new Product({ name, price, imageUrl });
  return await newProduct.save();
};

export const updateProduct = async (id: string, name: string, price: number, imageUrl: string) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { name, price, imageUrl },
    { new: true }
  );
  if (!updatedProduct) throw new Error('Product not found');
  return updatedProduct;
};

export const deleteProduct = async (id: string) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  if (!deletedProduct) throw new Error('Product not found');
  return { message: 'Product deleted successfully' };
};