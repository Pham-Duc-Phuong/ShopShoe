import React from 'react'

const Cart = ({ carts , handleCartsQuantity, deleteCart}) => {
    return (
        <div>
            <div id="Cart" className="modal modal-lg" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giở hàng</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body ">
                            {carts.length ? (
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((cart, index) => {
                                            return (
                                                <tr key={cart.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{cart.name}</td>
                                                    <td><img style={{ height: 90, width: 90 }} src={cart.image} alt="" /></td>
                                                    <td>
                                                        <button style={{ width: 30, height: 30, padding: 0 }} className='btn btn-outline-success me-2' onClick={()=>{
                                                            handleCartsQuantity(cart.id , -1)
                                                        }}>-</button>{cart.cartsQuantity}
                                                        <button style={{ width: 30, height: 30, padding: 0 }} className='btn btn-outline-success ms-2' onClick={()=>{
                                                            handleCartsQuantity(cart.id , +1)
                                                        }}>+</button>
                                                    </td>                
                                                    <td>{cart.price}$</td>
                                                    <td>{cart.cartsQuantity * cart.price}$</td>
                                                    <td>
                                                        <button className='btn btn-danger'onClick={()=>{
                                                            deleteCart(cart.id)
                                                        }}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        
                                    })}
                                </tbody>
                            </table>):(<h3>Vui lòng chọn sản phẩm</h3>)
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart