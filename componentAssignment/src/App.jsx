import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Form } from './Form'
import { OrderInfo } from './OrderInfo'

function App() {
    const [product, setProduct] = useState('')
    const [quantity, setQuantity] = useState(0)
    const productData = {
        product1: { name: 'AMD Ryzen 5 5600X', price: 320 },
        product2: { name: 'AMD Ryzen 7 3700X', price: 350 },
        product3: { name: 'AMD Ryzen 9 3900X', price: 500 },
        product4: { name: 'Intel Core i5-10600K', price: 280 },
        product5: { name: 'Intel Core i7-9700K', price: 380 },
      };

    return (
        <>
        {/* Header component */}
            <Header />
        {/* Product form component */}
            <Form 
                product={product}
                setProduct={setProduct}
                quantity={quantity}
                setQuantity={setQuantity}
                productData={productData}
            />
        {/* Order info component */}
            <OrderInfo product={product} quantity={quantity} productData={productData}/>
        </>
    )
}

export default App
