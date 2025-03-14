const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();
const productRoutes = require("./routes/productRoutes"); 
app.use(express.json());

app.use("/products", productRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = app;

const port = 3000;
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
