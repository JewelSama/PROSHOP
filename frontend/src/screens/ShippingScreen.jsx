import React, {useState} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import {Form, Button,} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'


const ShippingScreen = () => {
    const navigate = useNavigate()

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')


  return (
    <div>ShippingScreen</div>
  )
}

export default ShippingScreen;