import { Alert } from 'react-bootstrap';
import React from 'react';
import { useReducer } from 'react';
import { Container,Row,Col,Card,Form } from 'react-bootstrap';
import { msgInitialize, msgReducer } from '../reducer/messageReducer';

const Home = () => {
    const [msg,dispatch]=useReducer(msgReducer,msgInitialize);
    // console.log(msg);
  return (
    <>
        <Container className='my-3'>
            <Row className='justify-content-center'>
                <Col md={6}>
                   <Card className='shadow'>
                        <Card.Body>
                            { msg.error && <Alert variant='danger'>Error showing</Alert>}
                            <Form.Control type="text" value={msg.name} onChange={(e)=>dispatch({type:'DEV_DATA_LOAD', payload:{name:e.target.value}})} placeholder='Enter Your Text' /><hr />
                            <p>{msg.name}</p>
                            <Form.Control value={msg.email} onChange={(e)=>dispatch({type:'DEV_DATA_LOAD',payload:{email:e.target.value}})} type="email" placeholder='Enter Your Email' /><hr />
                            <p>{msg.email}</p>
                            <Form.Control type="text" value={msg.skill} onChange={(e)=>dispatch({type:'DEV_DATA_LOAD',payload:{skill:e.target.value}})} placeholder='Enter Your Skill' /><hr />
                            <p>{msg.skill}</p>
                            <Form.Select onChange={(e)=>dispatch({type:'ALERT_LOAD',payload:{error:e.target.value}})}>
                                <option value="Start">Start</option>
                                <option selected value="Off">Off</option>
                            </Form.Select>
                        </Card.Body>
                   </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home;