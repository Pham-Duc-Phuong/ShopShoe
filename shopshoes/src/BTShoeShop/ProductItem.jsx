import React from 'react'

const ProductItem = (props) => {
    const {item , handleprdDetail, handleCart} = props
    return (
            <div className='col-3 mb-4'>
                <div className="card">
                    <img className='img-fluid' src={item.image} alt="" />
                    <div className="card-body">
                        <h6 className='' style={{ height: 40 }}>{item.name}</h6>
                        <p>{item.shortDescription}</p>
                        <div className='d-flex align-item-center'>
                        <h6 style={{textDecoration:'line-through'}}>{item.price * 2}$</h6>
                        <h5 className='text-danger ms-3'>-50%</h5>
                        </div>
                        <h4>{item.price}$</h4>
                        <div className="d-flex justify-content-between">
                            <button className='my-1 btn btn-outline-danger' onClick={()=>{
                                handleCart(item)
                            }}>Add to cart</button>
                            <button className='my-1 btn btn-outline-success' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
                                handleprdDetail(item)
                            }}>Detail</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductItem