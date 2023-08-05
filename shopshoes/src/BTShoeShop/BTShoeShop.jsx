import React, { useState } from 'react'
import prdList from './data.json'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'


const BTShoeShop = () => {
  const [prdDetail, setprdDetail] = useState(prdList[0])
  const handleprdDetail = (product) => {
    setprdDetail(product)
  }
  const [carts, setCarts] = useState([]) 
  const handleCart = (item) =>{
    setCarts((currentState)=>{
      const index = currentState.findIndex((a)=> a.id === item.id)
      if (index !== -1){
        currentState[index].cartsQuantity += 1
      } else{
        currentState.push({...item , cartsQuantity: 1})
      }
      
      return [...currentState] 
    })
  }
  const handleCartsQuantity = (id, quantity)=>{
      setCarts((currentState)=>{
          const index = currentState.findIndex((a)=> a.id === id)
          currentState[index].cartsQuantity = currentState[index].cartsQuantity + quantity || 1
          return [...currentState]
      })
  }
  const deleteCart = (id) =>{
        setCarts ((currentState)=>{
          return currentState.filter((a)=>{
            return a.id !== id
          })
        })
  }

  return (
    <div className='container'>
      <button className='btn btn-success carts' data-bs-toggle="modal" data-bs-target="#Cart" style={{ color: 'orange', fontSize: 40, fontWeight: 700 }}><i className="fa-solid fa-bag-shopping" />
</button>
      <ProductList prdList={prdList} handleprdDetail={handleprdDetail} handleCart={handleCart}/>
      <ProductDetail prdDetail={prdDetail} />
      <Cart carts={carts} handleCartsQuantity={handleCartsQuantity} deleteCart={deleteCart}/>
    </div>
  )
}

export default BTShoeShop

