import ShopCard from "../shopCard/ShopCard";
import './CardsView.css';

function CardsView({ products }) {
    return (
        <div className="cards">
            {products.map((product, index) => (
                <ShopCard key={index} product={product} />
            ))}
        </div>
    );
}

export default CardsView

