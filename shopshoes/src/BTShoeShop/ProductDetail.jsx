import React from 'react'

const ProductDetail = ({ prdDetail }) => {
    return (
        <div>
            <div className="modal fade modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <img className='img-fluid' src={prdDetail.image} alt="" />
                                </div>
                                <div className="col-8">
                                    <h4>{prdDetail.name}</h4>
                                    <p>{prdDetail.description}</p>
                                    <h6>Price: {prdDetail.price}$</h6>
                                    <p>Số lượng: {prdDetail.quantity}</p>
                                </div>
                            </div>
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

export default ProductDetail