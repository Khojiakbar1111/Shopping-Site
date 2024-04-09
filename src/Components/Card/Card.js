import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import "./Card.css";

const Card = ({ addCard, setAddCard }) => {
    // Get product from localStorage
    const [getProduct, setGetProduct] = useState(JSON.parse(localStorage.getItem("addCard")) || []);

    useEffect(() => {
        localStorage.setItem("addCard", JSON.stringify(getProduct));
        setAddCard(getProduct);
    }, [getProduct]);

    // Increment
    const increment = (product) => {
        const updatedCard = getProduct.map((item) =>
            (item.id === product.id ? { ...item, count: item.count + 1 } : item));
        setGetProduct(updatedCard);
    };

    // Decrement
    const decrement = (product) => {
        const updatedCard = getProduct.map((item) =>
            (item.id === product.id && item.count > 1 ? { ...item, count: item.count - 1 } : item));
        setGetProduct(updatedCard);
    };

    // Delete product from card
    const removeCardProduct = (product) => {
        const updatedCard = getProduct.filter((item) => item.id !== product.id);
        setGetProduct(updatedCard);
    };

    // Total Price
    const totalPrice = getProduct.reduce((total, item) => total + item.price * item.count, 0);
    return (
        <div className="cart">
            <h3>#Card</h3>
            {addCard.length === 0 && (
                <div className="empty_cart">
                    <h3>Your shopping cart is empty</h3>
                    <NavLink to="/shop">
                        <button>Shop Now</button>
                    </NavLink>
                </div>
            )}
            <div className="container">
                {getProduct.map((item, index) => (
                    <div className="box" key={index}>
                        <div className="img_box">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="detail">
                            <div className="info">
                                <h4>{item.cat}</h4>
                                <h3>{item.Name}</h3>
                                <p>Price: {item.price}</p>
                                <p>Total: {item.price * item.count}</p>
                            </div>
                            <div className="quantity">
                                <button onClick={() => increment(item)}>+</button>
                                <input type="number" value={item.count} readOnly />
                                <button onClick={() => decrement(item)}>-</button>
                            </div>
                            <div className="icon">
                                <li onClick={() => removeCardProduct(item)}>
                                    <IoIosClose />
                                </li>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottom">
                {
                    addCard.length > 0 &&
                    <>
                        <div className="total">
                            <h4>Total: {totalPrice}</h4>
                            <button>Checkout</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Card;
