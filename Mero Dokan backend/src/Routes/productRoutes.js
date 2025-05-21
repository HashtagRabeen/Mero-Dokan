const express = require("express");
const {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
} = require("../Controllers/productController");

const upload = require("../multer/upload");

const router = express.Router();

router.post("/createProduct", upload.single("image"), createProduct);
router.get("/getProduct", getProduct);
router.get("/getProductById/:id", getProductById);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
