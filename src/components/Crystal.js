import React from "react";
import './Crystal.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function Crystal(){

       
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        const productWithPriceAsNumber = {
            ...product,
            Price: parseFloat(product.Price)
        };
        dispatch(addToCart(productWithPriceAsNumber));
    };


    const allCrystal = [
        {
            id: 1,
            title: "Crystal Brush",
            description: "BH Cosmetics Hello",
            price: "2499",
            image: "https://www.hokmakeup.com/cdn/shop/products/BH-4000-081-8.jpg?v=1697796321",
        },
        {
            id: 2,
            title: "Crystal Brush",
            description: "Crystal Quarts 12",
            price: "3000",
            image: "https://www.hokmakeup.com/cdn/shop/products/BH-4000-050-4.jpg?v=1697796352",
        },
        {
            id: 3,
            title: "Crystal Brush",
            description: "Bombshell Beauty 10",
            price: "2800",
            image: "https://www.hokmakeup.com/cdn/shop/files/849953013640_1.jpg?v=1695023256",
        },
        {
            id: 4,
            title: "Crystal Brush",
            description: "Highlighting Essentials 7",
            price: "4500",
            image: "https://www.hokmakeup.com/cdn/shop/files/849953014685_1.jpg?v=1694759999",
        },
        {
            id: 5,
            title: "Crystal Brush",
            description: "Face & Eye Brush-8",
            price: "5000",
            image: "https://www.hokmakeup.com/cdn/shop/files/849953022437_1.jpg?v=1695023423",
        },
        {
            id: 6,
            title: "Crystal Brush",
            description: "Poolshide Chic 12",
            price: "6000",
            image: "https://www.hokmakeup.com/cdn/shop/products/BH-4000-074-1.jpg?v=1697796285",
        }
    ];
     
    return (
        <div className="crystal-container">
            <div className="crystal">
              {allCrystal.map(card => (
                <div key={card.id} className="crystal-card">
                   <img src={card.image} alt={card.title} className="crystal-img" />
                   <div className="crystal-content">
                      <h3 className="crystal-title">{card.title}</h3>
                      <p className="crystal-description">{card.description}</p>
                      <p className="crystal-price">Price: ₹{card.price}</p>
                      <div className="crystal-actions">
                        <button className="crystal-button">View Details</button>
                        <button className="crystal-add-to-cart" onClick={() => handleAddToCart(card)}>Add to Cart</button>
                      </div>
                   </div>
                </div>
              ))}
            </div>
        </div>
    );
}

export default Crystal;
