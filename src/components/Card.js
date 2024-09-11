import React from "react";
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card(){
    const navigate=useNavigate()
    const handleView=()=>{
         navigate('/viewdetails')
    }
    const handleCrystal=()=>{
        navigate('/crystal')
    }
    const handlePhantom=()=>{
        navigate('/phantom')
    }
    const handleSponge=()=>{
        navigate('/sponge') 
    }
    return(
        <div className="container-cards">
            <h1>Shop By Category</h1>
        <div className="card-container">
            <div className="card-item"  >
                <img src="https://www.hokmakeup.com/cdn/shop/files/Artboard_1_2379b11a-4473-43c9-a87c-26edd0daa9a7.jpg?v=1725517647" alt="wait" onClick={handleView}/>
                <p>View All</p>
            </div>
            <div className="card-item">
                <img src="https://www.hokmakeup.com/cdn/shop/files/Artboard_2_a1ffcd46-b909-415a-866d-6d9745fc8972.png?v=1725517776" alt="wait" onClick={handleCrystal}/>
                <p>Crystal Pink</p>
            </div>
            <div className="card-item">
                <img src="https://www.hokmakeup.com/cdn/shop/files/Artboard_4_69fa4102-bbbb-4a74-98ac-1c9388b7e08e.png?v=1725536201" alt="wait" onClick={handlePhantom}/>
                <p>Phantom Black Set</p>
            </div>
            <div className="card-item">
                <img src="https://www.hokmakeup.com/cdn/shop/files/Artboard_6_efc44477-3f13-460b-9ab8-6628bde1448a.png?v=1725535723" alt="wait" onClick={handleSponge}/>
                <p>Magical Sponge</p>
            </div>
        </div>
        </div>
    )
}
export default Card;