// controllers/productController.js
const axios = require('axios');

const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);  // Send the fetched data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

const getCategories = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const categories = [...new Set(response.data.map((product) => product.category))];
    res.json(categories);  // Send unique categories
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

module.exports = { getProducts, getCategories };
