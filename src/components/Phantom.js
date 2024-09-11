import React from "react";
import './Phantom.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function Phantom() {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        // Convert price to number
        const productWithPriceAsNumber = {
            ...product,
            Price: parseFloat(product.Price)
        };
        dispatch(addToCart(productWithPriceAsNumber));
    };

    const allPhantom = [
        {
           id: 1,
           title: "Phantom Black set",
           description: "21pcs Jessup Black Collection",
           price: "4455",
           image: "https://www.hokmakeup.com/cdn/shop/files/6971093062715_1.jpg?v=1722863062",
        },
        {
            id: 2,
            title: "Phantom Black set",
            description: "Beauty14-in-10 Duo-End-Brush",
            price: "3150",
            image: "https://www.hokmakeup.com/cdn/shop/files/6976074375006_1.jpg?v=1723018684",
        },
        {
            id: 3,
            title: "Phantom Black set",
            description: "JaQuline USA Blush",
            price: "400",
            image: "https://cdn.shopify.com/s/files/1/0107/2952/1233/files/30072675_800x.jpg?v=1698647658",
        },
        {
            id: 4,
            title: "Phantom Black set",
            description: "Lip/Eye Brush Kit",
            price: "4550",
            image: "https://www.newu.in/cdn/shop/products/30072678-01_1024x1024.jpg?v=1660282977",
        },
        {
            id: 5,
            title: "Makeup Phantom",
            description: "Fix BB Cream Nude 30ml",
            price: "200",
            image: "https://www.newu.in/cdn/shop/files/30069577_1024x1024.jpg?v=1698728168",
        },
        {
            id: 6,
            title: "Lipstick Very Berry",
            description: "Matte Liquid 6.5ml",
            price: "459",
            image: "https://www.newu.in/cdn/shop/files/30071196_1024x1024.webp?v=1698820409",
        }
    ];

    return (
        <div className="phantom-container"> 
            <div className="phantom">
                {allPhantom.map((card) => (
                    <div key={card.id} className="phantom-card">
                        <div className="phantom-card-inner">
                            <div className="phantom-card-front">
                                <img src={card.image} alt={card.title} className="phantom-img" />
                                <div className="phantom-content">
                                    <h3 className="phantom-title">{card.title}</h3>
                                    <p className="phantom-price">Price: ₹{card.price}</p>
                                </div>
                            </div>
                            <div className="phantom-card-back">
                                <div className="phantom-back-content">
                                    <h3 className="phantom-back-title">Welcome Back</h3>
                                    <p>{card.description}</p>
                                    <div className="phantom-actions">
                                        <button className="phantom-button">View Details</button>
                                        <button className="phantom-add-to-cart" onClick={() => handleAddToCart(card)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Phantom;
