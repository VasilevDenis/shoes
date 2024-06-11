import ShopItem from "../shopItem/ShopItem";
import './ListView.css';

function ListView({ products }) {
    return (
        <div className="list">
            {products.map((product, index) => (
                <ShopItem product={product} />
            ))}
        </div>
    );
}

export default ListView

