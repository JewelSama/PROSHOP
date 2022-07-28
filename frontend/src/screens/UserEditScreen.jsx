import React, {useState, useEffect} from 'react'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {getUserDetails} from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const UserEditScreen = () => {
    const params = useParams()
    const userId = params.id

    const location = useLocation()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [isAdmin, setisAdmin] = useState(false)



    const navigate = useNavigate()
    const dispatch = useDispatch()


    const userDetails = useSelector(state => state.userDetails)

    const {loading, error, user } = userDetails


    useEffect(() => {
       
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <Link to="/admin/userlist" className="btn btn-light my-3">
            Go Back
        </Link>
    
        <FormContainer>
        <h1>Edit User</h1>
        {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" value={name} 
            onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} 
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
           
            <Form.Group className="mt-2" controlId='isadmin'>
            <Form.Check type="checkbox" label = "Is Admin" checked={isAdmin}
            onChange={(e) => setisAdmin(e.target.checked)}></Form.Check>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
                Update
            </Button>
        </Form>

        )}
    </FormContainer>
    </>

  )
}

export default UserEditScreen