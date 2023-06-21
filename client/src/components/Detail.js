import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from '../styles.module.css'

const Detail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res)=>{
            console.log(res);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className={styles.content}>
            <h1>Product Information for {product.title}</h1>
            <div className={styles.detail}>
                <p>Name: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link className={styles.link} to="/">Home</Link>
            <button onClick={deleteProduct}>Delete</button>

        </div>
    )
}

export default Detail;