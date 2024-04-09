import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js/Home";
import Shop from "./Shop/Shop";
import Card from "./Card/Card";
import Contact from "./Contact/Contact";

const Route1 = ({shop,filterCategory, allCategories, addToCard, addCard, setAddCard}) =>{
    return(
        <>
         <Routes>
            <Route path="/" element={<Home addToCard={addToCard}/>}/>
            <Route path="/card" element={<Card setAddCard={setAddCard} addCard={addCard}/>} />
            <Route path="/shop" element={<Shop addToCard={addToCard} shop={shop} filterCategory={filterCategory} allCategories={allCategories}/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
        </>
    )
}

export default Route1;