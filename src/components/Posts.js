import React from 'react'
import {Row,Col,Form, Button} from 'react-bootstrap'

import '../App.css'


const Posts = () => {
  return (
    <>
    <Row>
        <Col>
        <Form>
            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Search by ID</Form.Label>
        <Form.Control type="number" placeholder="Enter email" />
        
      </Form.Group>

      <Button type='submit' variant='success' className='mr-3'>Fetch Post</Button>
      <Button type='button' variant='danger' className='posts-button-create-post'>Create Post</Button>
    
        </Form>
        </Col>
    </Row>
    
    </>
  )
}

export default Posts