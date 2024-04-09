
import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Home.css"
import { NavLink } from "react-router-dom";
import HomeProducts from "./HomeProducts";
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import testImage from "../image/T1.avif";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import imageBanner from "../image/Multi-Banner-1.avif";
import imageBanner2 from "../image/Multi-banner-2.avif";
import imageBanner3 from "../image/Multi-Banner-3.webp";
import imageBanner4 from "../image/Multi-banner-4.avif";
import imageBanner5 from "../image/Multi-Banner-5.webp";
import { IoCartOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Home = ({ addToCard }) => {
    // New Product
    const [newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [topProduct, setTopProduct] = useState([]);
    // Show Product Details 
    const [showDetail, setShowDetail] = useState(false);

    // Detail show page
    const [detail, setDetail] = useState([]);

    // Detail Page
    const detailPage = (product) => {
        const detailData = ([{ product }]);
        const productDetail = detailData[0]["product"];
        setDetail(productDetail)
        setShowDetail(true)
    }

    // CLose Page
    const closePage = () => {
        setShowDetail(false)
    }

    // Trending Product
    const [trendingProduct, setTrendingProduct] = useState(HomeProducts)
    // FIlter of the tranding product
    const filterCate = (x) => {
        const filterProduct = HomeProducts.filter((item) => {
            return item.type === x
        })
        setTrendingProduct(filterProduct)
    }

    // show all trending products
    const allTrendingProducts = () => {
        setTrendingProduct(HomeProducts)
    }

    const productCategory = () => {
        // New product
        const newCategory = HomeProducts.filter((x) => {
            return x.type === "new"
        })
        setNewProduct(newCategory);

        // Featured product
        const featuredProduct = HomeProducts.filter((x) => {
            return x.type === "featured"
        })
        setFeaturedProduct(featuredProduct);

        // Top product
        const topProduct = HomeProducts.filter((x) => {
            return x.type === "top"
        })
        setTopProduct(topProduct)
    }

    useEffect(() =>{
        productCategory()
    })

    return (
        <>
            {
                showDetail ?
                    <div className="product-detail">
                        <button onClick={closePage} className="close-btn"><IoCloseOutline /></button>
                        <div className="container">
                            <div className="img-box">
                                <img src={detail.image} alt="" />
                            </div>
                            <div className="info">
                                <h4>{detail.cat}</h4>
                                <h2>{detail.Name}</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse aperiam corporis quibusdam dolores cumque quisquam commodi aut dignissimos voluptas nam.</p>
                                <h3>{detail.price}</h3>
                                <button onClick={() => addToCard(detail)}>Add to Card</button>
                            </div>
                        </div>
                    </div> : null
            }
            <div className="home">
                <div className="top-banner">
                    <div className="contact">
                        <h3>Sliver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first odder</p>
                        <NavLink to="/shop" className="links">Shop Now</NavLink>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProducts()}>Trending Product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={() => filterCate("new")}>New</h3>
                                    <h3 onClick={() => filterCate("featured")}>Featured</h3>
                                    <h3 onClick={() => filterCate("top")}>Top selling</h3>
                                </div>
                            </div>
                            <div className="products">
                                <div className="container">
                                    {trendingProduct.map((item, index) => (
                                        <>
                                            <div className="box" key={index}>
                                                <div className="img-box">
                                                    <img src={item.image} />
                                                    <div className="icon">
                                                        <div className="icon-box">
                                                            <IoMdEye onClick={() => detailPage(item)}/>
                                                        </div>
                                                        <div className="icon-box">
                                                            <FaHeart />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <h3>{item.Name}</h3>
                                                    <p>{item.price}</p>
                                                    <button className="btn" onClick={() => addToCard(item)}>Add to Card</button>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <button>Show More</button>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="right-container">
                                <div className="testimonail">
                                    <div className="head">
                                        <h3>Our testimonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="detail-img-box">
                                            <img src={testImage} alt="" />
                                        </div>
                                        <div className="info">
                                            <h3>Stephan Robot</h3>
                                            <h4>Web Designer</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam optio impedit magnam bland</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-letter">
                                    <div className="head">
                                        <h3>News Letter</h3>
                                    </div>
                                    <div className="form">
                                        <p>Join our malling list</p>
                                        <input type="email" placeholder="E-mail" autoComplete="off" />
                                        <button>Subscribe</button>
                                        <div className="icon-box">
                                            <div className="icon">
                                                <FaFacebookF />
                                            </div>
                                            <div className="icon">
                                                <FaTwitter />
                                            </div>
                                            <div className="icon">
                                                < FaInstagram />
                                            </div>
                                            <div className="icon">
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="banner-container">
                        <div className="left-box">
                            <div className="box">
                                <img src={imageBanner} alt="" />
                            </div>
                            <div className="box">
                                <img src={imageBanner2} alt="" />
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="top">
                                <img src={imageBanner3} alt="" />
                                <img src={imageBanner4} alt="" />
                            </div>
                            <div className="bottom">
                                <img src={imageBanner5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product_type'>
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>
                            {
                                newProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p> {curElm.price}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => detailPage(curElm)}><IoMdEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addToCard(curElm)}>< IoCartOutline /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>
                            {
                                featuredProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p> {curElm.price}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => detailPage(curElm)}><IoMdEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addToCard(curElm)}>< IoCartOutline /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>
                            {
                                topProduct.map((curElm) => {
                                    return (
                                        <>
                                            <div className='productbox'>
                                                <div className='img-box'>
                                                    <img src={curElm.image} alt=''></img>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p>{curElm.price}</p>
                                                    <div className='icon'>
                                                        <button onClick={() => detailPage(curElm)}><IoMdEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button onClick={() => addToCard(curElm)}>< IoCartOutline /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;