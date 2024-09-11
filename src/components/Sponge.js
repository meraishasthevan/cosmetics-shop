import React from "react";
import './Sponge.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function Sponge() {

       
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
    
        const productWithPriceAsNumber = {
            ...product,
            Price: parseFloat(product.Price)
        };
        dispatch(addToCart(productWithPriceAsNumber));
    };


    const allSponge = [
        {
           id: 1,
           title: "Sponge",
           description: "Magical Makeup Sponges",
           price: "855",
           image: "https://www.hokmakeup.com/cdn/shop/files/6976074370124_1.jpg?v=1722856434",
        },
        {
            id: 2,
            title: "Lip Oils",
            description: "Fruit Fetish Lip Oils",
            price: "1594",
            image: "https://www.hokmakeup.com/cdn/shop/files/717489001458_1.jpg?v=1713858049",
        },
        {
            id: 3,
            title: "Spray",
            description: "Natural Spray Prime",
            price: "1441",
            image: "https://www.hokmakeup.com/cdn/shop/files/717489850032_4.png?v=1716361384",
        },
        {
            id: 4,
            title: "Nail Polish",
            description: "Sugardaddy 19 (15ml)",
            price: "209",
            image: "https://cdn.shopify.com/s/files/1/0107/2952/1233/products/30084691_800x.jpg?v=1698907049",
        },
        {
            id: 5,
            title: "Nail Polish",
            description: "Nail Enamel Standout ",
            price: "150",
            image: "https://www.newu.in/cdn/shop/files/30054896_1024x1024.jpg?v=1698829463",
        },
        {
            id: 6,
            title: "Water Cleanser",
            description: "L'Occitane Aqua Reotier Gel",
            price: "2250",
            image: "https://images-static.nykaa.com/media/catalog/product/3/2/326a0933253581505472_2111231.jpg",
        }
    ];

    return (
        <div className="sponge-container">
            <div className="sponge">
                {allSponge.map(card => (
                    <div key={card.id} className="sponge-card">
                        <img src={card.image} alt={card.title} className="sponge-img" />
                        <div className="sponge-content">
                            <h3 className="sponge-title">{card.title}</h3>
                            <p className="sponge-description">{card.description}</p>
                            <p className="sponge-price">Price: ₹{card.price}</p>
                            <div className="sponge-actions">
                                <button className="sponge-button">View Details</button>
                                <button className="sponge-add-to-cart" onClick={() => handleAddToCart(card)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sponge;
