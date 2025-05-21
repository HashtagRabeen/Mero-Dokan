const product = require("../Model/productModel");

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, unit } = req.body;
    const newProduct = new product({
      name,
      description,
      price,
      image: req.file?.filename,
      category,
      unit,
    });
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error", error);
  }
};

const getProduct = async (req, res) => {
  try {
    const showProduct = await product.find();
    res
      .status(200)
      .json({ message: "Product found successfully", showProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error", error);
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    let singleProduct = await product.findById(id);
    console.log(singleProduct);
    res
      .status(200)
      .send({ message: "found single product successfully", singleProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error", error);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  let deletedProduct = await product.findByIdAndDelete({ _id: id });
  console.log(deletedProduct);
  res
    .status(200)
    .json({ message: "Product deleted successfully", deletedProduct });
};

module.exports = { createProduct, getProduct, getProductById, deleteProduct };
