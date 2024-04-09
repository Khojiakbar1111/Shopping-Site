
import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Route1 from "./Components/Route1";
import Footer from "./Components/Footer/footer";
import HomeProducts from "./Components/Home.js/HomeProducts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(){
  // Shop Hook
  const [shop, setShop] = useState(HomeProducts);

  // Search Hook
  const [search, setSearch] = useState("");

  // Add to Card Hook
  const [addCard, setAddCard] = useState([]);


  // Filter Category
  const filterCategory = (x) =>{
    const filterCategory = HomeProducts.filter((product) =>{
      return product.cat === x
    })
    setShop(filterCategory);
  }

  // All Category
  const allCategories = () =>{
    setShop(HomeProducts)
  }

  // Search Length
  const searchLength = (search || []).length === 0;

  // Search Product
  const searchProduct = () =>{
    if(searchLength){
      alert("Please search something !")
      setShop(HomeProducts)
    }else{
      const searchProduct = HomeProducts.filter((x) =>{
        return x.cat === search
      })
      setShop(searchProduct);
    }
  }

// Add To Card Product
const addToCard = (product) => {
  const exist = addCard.find((x) => {
    return x.id === product.id;
  });
  if (exist) {
    toast.error("Product has been already added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    const updatedCard = [...addCard, { ...product, count: 1 }];
    setAddCard(updatedCard);
    localStorage.setItem('addCard', JSON.stringify(updatedCard));
    toast.success("Product has been added successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};



  return(
    <div className="app">
       <Navbar searchProduct={searchProduct} search={search} setSearch={setSearch} />
       <Route1 setAddCard={setAddCard} addCard={addCard} addToCard={addToCard} shop={shop} filterCategory={filterCategory} allCategories={allCategories}/>
       <Footer/>
       <ToastContainer />
    </div>
  )
}

export default App;