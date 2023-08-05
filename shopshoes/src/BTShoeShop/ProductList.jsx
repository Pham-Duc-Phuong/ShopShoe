import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    const { prdList , handleprdDetail , handleCart} = props
    return (
        <div className='row'>

            {
                prdList.map((product) => {
                    return (
                        <ProductItem key={product.id} item={product} handleprdDetail={handleprdDetail} handleCart={handleCart}/>
                    )
                })
            }
        </div>
    )
}

export default ProductList