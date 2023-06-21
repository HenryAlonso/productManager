import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        <div>
            <ProductForm product = {product} setProduct = {setProduct} />
            <ProductList product = {product} setProduct = {setProduct} removeFromDom = {removeFromDom} />
        </div>
    )
}
export default Main;