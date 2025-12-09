import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

/* ✅ INSERT PRODUCT (POST) */
router.post("/", async (req, res) => {
  try {
    const products = await Product.insertMany(req.body);
    res.status(201).json({
      message: "Product(s) added successfully",
      products
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* a) FETCH ALL PRODUCTS */
router.get("/", async (req, res) => {
  const products = await Product.find();
  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* b) FETCH PRODUCT BY ID */
router.get("/id/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.json({ message: "No products found" });

  res.json(product);
});

/* c) SEARCH BY PRODUCT NAME (CASE INSENSITIVE) */
router.get("/search/name", async (req, res) => {
  const { name } = req.query;

  const products = await Product.find({
    productName: { $regex: name, $options: "i" }
  });

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* d) SEARCH BY BRAND */
router.get("/search/brand", async (req, res) => {
  const { brand } = req.query;

  const products = await Product.find({ brand });
  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* e) SEARCH BY MULTIPLE FIELDS */
router.get("/search/multiple", async (req, res) => {
  const { name, category, brand } = req.query;

  const query = {};
  if (name) query.productName = { $regex: name, $options: "i" };
  if (category) query.category = category;
  if (brand) query.brand = brand;

  const products = await Product.find(query);

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* f) FILTER BY CATEGORY */
router.get("/filter/category", async (req, res) => {
  const { category } = req.query;

  const products = await Product.find({ category });
  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* g) FILTER BY PRICE RANGE */
router.get("/filter/price", async (req, res) => {
  const { min, max } = req.query;

  const products = await Product.find({
    price: { $gte: min, $lte: max }
  });

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* h) FILTER BY RATING */
router.get("/filter/rating", async (req, res) => {
  const { rating } = req.query;

  const products = await Product.find({
    rating: { $gte: rating }
  });

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* i) SORT BY PRICE */
router.get("/sort", async (req, res) => {
  const { order } = req.query;

  const products = await Product.find().sort({
    price: order === "desc" ? -1 : 1
  });

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
});

/* j) PAGINATION */
router.get("/paginate", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const skip = (page - 1) * limit;

  const totalProducts = await Product.countDocuments();
  const products = await Product.find().skip(skip).limit(limit);

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json({
    totalProducts,
    totalPages: Math.ceil(totalProducts / limit),
    currentPage: page,
    products
  });
});


export default router;
