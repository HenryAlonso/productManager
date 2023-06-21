import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from '../styles.module.css'

const ProductList = (props) => {
    const {removeFromDom, product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res);
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    const handleDeletionClick = (e) => {
        deleteProduct(product._id)
    }

    return (
        <div className={styles.content}>
            <h1>All Products: </h1>

            {
                product.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link className={styles.link} to={`/product/${product._id}`}>{product.title}</Link>
                            <Link className={styles.link} to={`/product/edit/${product._id}`}> | Edit</Link>
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default ProductList;