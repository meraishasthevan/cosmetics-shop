import React from "react";
import './ViewDetails.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function ViewDetails(){
     
   const dispatch = useDispatch();

   const handleAddToCart = (product) => {
    
      const productWithPriceAsNumber = {
          ...product,
          Price: parseFloat(product.Price)
      };
      dispatch(addToCart(productWithPriceAsNumber));
  };

    const allCards=[
         {
            id:1,
            title:"Eye shadow",
            description:"L.N Pro Infinity Color Eyeshadow",
            Price:"800",
            image:"https://www.hokmakeup.com/cdn/shop/files/5060805940791_1.jpg?v=1716146647",

         },
         {
            id:2,
            title:"Lipstick",
            description:"Color Fetish Matte Lipstick",
            Price:"950",
            image:"https://www.hokmakeup.com/cdn/shop/files/2_b7c52ca3-0d4d-4657-b895-153f9872b40d.jpg?v=1686314200",

         },
         {
            id:3,
            title:"Kajal",
            description:"Twin pack Black Kajal",
            Price:"800",
            image:"https://cdn.shopify.com/s/files/1/0107/2952/1233/files/30078546-01_800x.webp?v=1706174550",

         },
         {
            id:4,
            title:"Foundation",
            description:"Milani Conceal Perfect",
            Price:"1530",
            image:"https://www.hokmakeup.com/cdn/shop/files/717489700009_1.jpg?v=1705498968",

         },
         {
            id:5,
            title:"Lip shade",
            description:"L.N Pro Matte Lip Fluid",
            Price:"300",
            image:"https://www.hokmakeup.com/cdn/shop/files/5060805942283_1.jpg?v=171618701",

         },
         {
            id:6,
            title:"Eye shadow",
            description:"Revolution Forever Flawless",
            Price:"1163",
            image:"https://www.hokmakeup.com/cdn/shop/files/5057566165686_1.jpg?v=1716017318",

         },
         {
            id:7,
            title:"Face Powder",
            description:"Revolution Baking Powder",
            Price:"590",
            image:"https://www.hokmakeup.com/cdn/shop/files/71pqGp3_zmL._SL1500.webp?v=1724324678",

         },
         {
            id:8,
            title:"Eye shade",
            description:"Revolution Loose Baking",
            Price:"439",
            image:"https://www.hokmakeup.com/cdn/shop/files/5901761904413_1.jpg?v=1710323506",

         },
         {
            id:9,
            title:"Rose Powder",
            description:"Perfect Glow HighLighter",
            Price:"800",
            image:"https://cdn.shopify.com/s/files/1/0107/2952/1233/products/30067303-01_800x.jpg?v=1663850989",

         },
    ];
    return(
        <div className="container-view">
        <div className="view-details">
          {allCards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.title} className="card-img" />
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <p className="card-price">Price: ₹{card.Price}</p>
                <div className="card-actions">
                  <button className="card-button">View Details</button>
                  <button className="card-add-to-cart" onClick={() => handleAddToCart(card)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ViewDetails;
