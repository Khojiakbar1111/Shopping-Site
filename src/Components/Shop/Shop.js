
import React, {useState} from "react";
import "./Shop.css"
import imageBanner from "../image/shop_left.avif";
import rightBannerRight from "../image/shop_top.webp";
import { IoMdEye } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function Shop({ shop, filterCategory, allCategories, addToCard }) {
  // Show Product Details 
  const [showDetail, setShowDetail] = useState(false);
  // Detail show page
  const [detail, setDetail] = useState([]);
console.log(detail)
  // Detail Page
  const detailPage = (product) =>{
    const detailData = ([{product}]);
    const productDetail = detailData[0]["product"];
    setDetail(productDetail)
    setShowDetail(true)
  }

  // CLose Page
  const closePage = () =>{
    setShowDetail(false)
  }
  return (
    <>
    {
      showDetail ?
      <div className="product-detail">
        <button className="close-btn" onClick={closePage}><IoCloseOutline /></button>
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
      </div>:null
    }

      <div className="shop">
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left-box">
            <div className="category">
              <div className="header">
                <h2 >All categories</h2>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allCategories()}># All</li>
                  <li onClick={() =>filterCategory("tv")}># tv</li>
                  <li onClick={() =>filterCategory("laptop")}># laptop</li>
                  <li onClick={() =>filterCategory("watch")}># watch</li>
                  <li onClick={() =>filterCategory("speaker")}># speaker</li>
                  <li onClick={() =>filterCategory("electronics")}># electronics</li>
                  <li onClick={() =>filterCategory("headphone")}># headphone</li>
                  <li onClick={() =>filterCategory("phone")}># phone</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img-box">
                <img src={imageBanner} alt="" />
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="banner">
              <div className="img-box">
                <img src={rightBannerRight} alt="" />
              </div>
            </div>
            <div className="product-box">
              <h2>Shop Product</h2>
              <div className="product-container">
                {
                  shop.map((item, index) => {
                    return (
                      <>
                        <div className="box" key={index}>
                          <div className="img-box">
                            <img src={item.image} alt="" />
                            <div className="icon-box">
                              <li><FaHeart/></li>
                              <li onClick={() =>detailPage(item)}><IoMdEye/></li>
                            </div>
                          </div>
                          <div className="detail">
                            <h3>{item.Name}</h3>
                            <p>{item.price}</p>
                            <button onClick={() => addToCard(item)}>Add to Card</button>
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
      </div>
    </>
  )
}

export default Shop