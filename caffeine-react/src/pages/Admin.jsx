import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function Admin(props) {

    const [articles, setArticles] = useState([])
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [changeAfterDelete, setChangeAfterDelete] = useState(false)

    useEffect(() => {
        /*    *****    GET ALL ARTICLES    *****       */
        axios.get('http://localhost:5000/api/article/')
            .then(res => {
                setArticles(res.data.msg)
            })

        /*     *****    GET ALL PRODUCTS    *****      */
        axios.get('http://localhost:5000/api/product/products')
            .then(res => {
                setProducts(res.data.msg)
            })


        /*     *****    GET ALL USERS    *****      */
        axios.get('http://localhost:5000/api/admin/users')
            .then(res => {
                //data.msg[0].name
                // console.log(res.data)
                setUsers(res.data.msg)
            })

    }, [changeAfterDelete])

    /*    *****    DELETE ARTICLE    *****       */
    const deleteArticle = (article) => {
        // console.log(article)
        const articleId = article._id;
        axios.delete(`http://localhost:5000/api/article/${articleId}`)
            .then(data => {
                // console.log(data)
                setChangeAfterDelete(!changeAfterDelete)
            })
    }

    /*    *****    DELETE PRODUCT    *****       */
    const deleteProduct = (product) => {
        console.log(product._id)
        const productId = product._id;
        axios.delete(`http://localhost:5000/api/admin/${productId}`)
            .then(data => {
                // console.log(data)
                setChangeAfterDelete(!changeAfterDelete)
            })
    }

    /*    *****    DELETE USER    *****       */
    const deleteUser = (user) => {
        console.log(user._id)
        const userId = user._id;
        axios.delete(`http://localhost:5000/api/admin/${userId}/deleteuser`)
            .then(data => {
                // console.log(data)
                setChangeAfterDelete(!changeAfterDelete)
            })
    }


    /*    *****    MAP ALL ARTICLES    *****       */
    const allArticles = articles.map(article => {
        // console.log(article)

        return (
            <>
                <div style={{ border: '1px solid gray', margin: '10px', padding: '10px 10%' }}>
                    <img
                        src={article.img}
                        alt=""
                        style={{ width: '50px', height: '50px', float: 'left', marginRight: '10px' }}
                    />
                    <h5 style={{ marginTop: '10px', float: 'left' }}>{article.title}</h5>
                    {/* <p>{article.content}</p> */}

                    <p style={{ color: 'red', marginTop: '10px', textAlign: 'end', cursor: 'pointer' }} onClick={() => deleteArticle(article)}>X</p>
                </div>
            </>
        )
    })


    /*    *****    MAP ALL PRODUCTS    *****       */
    const allProducts = products.map(product => {

        return (
            <>
                <div style={{ border: '1px solid gray', margin: '10px', padding: '10px 10%' }}>
                    <img
                        src={product.img}
                        alt=""
                        style={{ width: '50px', height: '50px', float: 'left', marginRight: '10px' }}
                    />
                    <h5 style={{ marginTop: '10px', float: 'left' }}>{product.title}</h5>

                    <p style={{ color: 'red', marginTop: '10px', textAlign: 'end', cursor: 'pointer' }} onClick={() => deleteProduct(product)}>X</p>
                </div>
            </>
        )
    })


    /*    *****    MAP ALL USERS    *****       */
    const allUsers = users.map(user => {

        return (
            <>
                <div style={{ border: '1px solid gray', margin: '10px', padding: '10px 10%' }}>
                    <img
                        src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                        alt=""
                        style={{ width: '50px', height: '50px', float: 'left', marginRight: '10px' }}
                    />
                    <h5 style={{ marginTop: '10px', float: 'left', marginRight: '10px' }}>Name: {user.name}, Email: {user.email}</h5>

                    {/* <p style={{ marginTop: '10px', float: 'left', marginRight:'10px' }}>Admin: </p>
                    

                    <BootstrapSwitchButton
                        checked={false}
                        onlabel='Yes'
                        offlabel='NO'
                        onChange={(checked) => {
                            this.setState(checked)
                        }}
                    /> */}

                    <p style={{ color: 'red', marginTop: '10px', textAlign: 'end', cursor: 'pointer' }} onClick={() => deleteUser(user)}>X</p>
                </div>
            </>
        )
    })


    /*    *****    RENDER ADMIN PAGE    *****       */

    if (!props.auth.isLoggedIn) {
        return (
            <>
                <div class="alert alert-danger" role="alert">
                    <strong>Oh !!!</strong> <a href="#" class="alert-link">You have to login first</a> and try submitting again.
                </div>
            </>
        )
    } else if (!props.auth.currentUser.isAdmin) {
        return (
            <>
                <div class="alert alert-warning" role="alert">
                    <strong>Oh !!!</strong> <a href="#" class="alert-link">You dont have permission</a>  to access this page.
                </div>
            </>
        )
    } else {
        return (
            <div style={{ width: '70%', margin: '10px auto' }}>

                <h1>Articles</h1>
                <div className='articles' style={{ height: '20vh', overflow: 'scroll' }}>

                    {allArticles}

                </div> <br />

                <h1>Products</h1>
                <div className='products' style={{ height: '20vh', overflow: 'scroll' }}>
                    {allProducts}
                </div> <br />

                <h1>Users</h1>
                <div className='users' style={{ height: '20vh', overflow: 'scroll' }}>
                    {allUsers}
                </div>
            </div>
        )
    }

}
