import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from '../styles.module.css';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    const handleTitleSubmit = (e) => {
        setTitle(e.target.value);
    }
    const handlePriceSubmit = (e) => {
        setPrice(e.target.value);
    }
    const handleDescriptionSubmit = (e) => {
        setDescription(e.target.value);
    }

    return (
        <div className={styles.content}>
        <h1>Update Information for {title}</h1>
        <form className={styles.form} onSubmit={updateProduct}>
            <span className={styles.inputs}>
                <label className={styles.label} htmlFor='title'>Title: </label>
                <input className={styles.half} id='title' type='text' value={title} onChange={handleTitleSubmit} />
            </span>
            <span className={styles.inputs}>
                <label className={styles.label} htmlFor='price'>Price: </label>
                <input className={styles.half} id='price' type='text' value={price} onChange={handlePriceSubmit} />
            </span>
            <span className={styles.inputs}>
                <label className={styles.label} htmlFor='description'>Description: </label>
                <input className={styles.half} id='description' type='text' value={description} onChange={handleDescriptionSubmit} />
            </span>
            <input className={styles.submit} type='submit' value='Update'/>
        </form>
        <Link to="/">Home</Link>
    </div>
    )
}

export default Update;