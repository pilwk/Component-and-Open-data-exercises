import "./Form.css"

export function Form({ product, setProduct, quantity, setQuantity, productData}) {

    const handleProductChange = (event) => {
        setProduct(event.target.value)
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if (quantity !== 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="product-form">
            <h3>Product form</h3>
            <div className="form-group">
                <label htmlFor="product">Product:</label>
                <select id="product" value={product} onChange={handleProductChange}>
                    <option value="" disabled selected>Select your option</option>
                    {/* handling products in productObject for selection */}
                    {Object.entries(productData).map(([productId, productData]) => (
                        <option value={productId}>
                            {productData.name} ({productData.price}€)
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <button className="minus-button" onClick={handleMinus}>-</button>
                <span id="quantity">{quantity}</span>
                <button className="plus-button" onClick={handlePlus}>+</button>
            </div>
        </div>
    );
}
