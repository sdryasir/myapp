import React, { useEffect, useState } from 'react'
import loader from '../assets/loader.gif';
import axios from 'axios';

function Products() {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(undefined)
    const [message, setMessage] = useState('')

    const getData = ()=>{
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
        .then((products)=>{
            setProducts(products.data);
            setLoading(false);
        })
    }


    const saveProduct = ()=>{
        const product = {
            "id": 21,
            "title": "Test Product",
            "price": 100,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
            "rate": 3,
            "count": 22
            }
        }

        axios.post('https://fakestoreapi.com/products', product)
        .then((res)=>{
            if(res.status == 200){
                setMessage('Data has been saved')
            }
        }).catch((err)=>{
            setMessage(err || "something went wrong")
        })

    }

    

    useEffect(() => {
        getData();
    },[])

    return (
        <div className='container'>
            <h1>Products</h1>
            <p className='aler alert-success'>{message}</p>
            <button className='btn btn-success mb-5 mt-5' onClick={saveProduct}>Add New Product</button>
            <div className="row">
                {
                    loading ? <img style={{width:'200px'}} src={loader}/> : products.map((product) => <Card product={product} />)
                }
            </div>
        </div>
    )
}

export default Products



function Card({product}) {

    const handleDelete = (id)=>{
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleUpdate = (id, item)=>{
        axios.put(`https://fakestoreapi.com/products/${id}`, item)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }



    return (
        <div className='col-md-3 mb-4'>
            <div class="card">
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                    <a href="#" class="btn">PKR {product.price}</a>
                    <button className='btn btn-danger' onClick={()=>handleDelete(product.id)}>delete</button>
                    <button className='btn btn-info' onClick={()=>handleUpdate(product.id, product)}>Update</button>
                </div>
            </div>
        </div>
    )
}
