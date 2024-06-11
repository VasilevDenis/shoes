import './ShopItem.css';

const ShopCard = ( { product } ) => {
    return (
        <div className="item">
            <div className='img-box'>
                <img className='img-item' src={product.img} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <div className='color'>{product.color}</div>
            <div className='price'>${product.price}</div>
            <button>Add to cart</button>
        </div>
    );
};

export default ShopCard;
