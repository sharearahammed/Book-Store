import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

const Cards = ({handleAddToChart}) => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12">
            {
                cards.map(card => <Card key={card.id} card={card} handleAddToChart={handleAddToChart}></Card>)
            }
        </div>
    );
};

export default Cards;