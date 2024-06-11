import './ShopCard.css';

const ShopCard = ( { product } ) => {
    return (
        <div className="card">
            <h2>{product.name}</h2>
            <div className='color'>{product.color}</div>
            <img src={product.img} alt={product.name} />
            <div className="price-color">
                <div className='price'>${product.price}</div>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default ShopCard;
