const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.status(200).send(
        "<h2 style='text-align: center; font-size: 32px;'>Hello World</h2>"
    );
    res.end();
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

