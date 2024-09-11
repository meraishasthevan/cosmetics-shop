import React from "react";
import './CardPage.css';

function CardPage() {
    const images = [
        { id: 1, src: "https://cdn.shopify.com/s/files/1/0107/2952/1233/files/face-banner-1.jpg?v=1582638105", label: "Face" },
        { id: 2, src: "https://cdn.shopify.com/s/files/1/0107/2952/1233/files/lips-banner-1.jpg?v=1582638105", label: "Lips" },
        { id: 3, src: "https://cdn.shopify.com/s/files/1/0107/2952/1233/files/eyes-banner-1.jpg?v=1582638105", label: "Eyes" },
        { id: 4, src: "https://cdn.shopify.com/s/files/1/0107/2952/1233/files/nails-banner-1.jpg?v=1582638104", label: "Nails" },
    ];

    return (
        <div className="cardpage-container">
             <h1>Our Products</h1>
            <div className="card-flex-container">
                {images.map(image => (
                    <div className="cardpage" key={image.id}>
                        <figure className="image-container">
                            <img src={image.src} alt="wait" />
                            <figcaption className="image-caption">
                                <span>{image.label}</span>
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardPage;
