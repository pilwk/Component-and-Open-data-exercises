import "./OrderInfo.css"

export function OrderInfo({product, quantity, productData}) {
    const selectedProductData = productData[product]

    return (
        <div className="order-info">
        <h3>Order info</h3>
        <table className="order-table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{selectedProductData?.name}</td>
                    <td>{quantity}</td>
                    <td>{selectedProductData?.price * quantity || 0}€</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}
