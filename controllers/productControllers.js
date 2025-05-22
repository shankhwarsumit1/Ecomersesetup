const getProducts = (req,res)=>{
    res.send('Fetching all products');
}

const getProductsById = (req,res)=>{
    res.send(`Fetching product with ID:${req.params.id}`);
}

const addNewProduct = (req,res)=>{
    res.send('Adding a new product');
}

const putRequestProduct = (req,res)=>{
    res.send('Put request called');
}

const deleteReqProduct = (req,res)=>{
    res.send('delete request called.');
}

module.exports = {
    getProducts,
    getProductsById,
    addNewProduct,
    putRequestProduct,
    deleteReqProduct
}