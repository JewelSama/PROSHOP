import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link, useParams, useNavigate, useLocation} from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {addToCart} from '../actions/cartActions'

const CartScreen = () => {
  let params = useParams()
  let location = useLocation()
  const navigate = useNavigate()
  
  const productId = params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart


  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  console.log(qty)


  return (
    <div>CartScreen</div>
  )
}

export default CartScreen