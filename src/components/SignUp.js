import { Link, navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';
import HomeLayout from './HomeLayout';
import styles from '../scss/Form.module.scss';
import { useSetRecoilState } from 'recoil';
import { profile, token } from '../utilities/recoil';
import Cookies from 'js-cookie';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserToken = useSetRecoilState(token);
  const setUserProfile = useSetRecoilState(profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserToken('$34548555');
    setUserProfile({
      userName,
      email
    });
    Cookies.set('token','$34548555');
    navigate('/items');
    console.log('submit sign up', userName, email, password);
  }
  return (
    <HomeLayout>
      <FormContainer colSize={4}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group>
            <div className='text-center' style={{marginTop:'10px'}}>
              <Button
                type='submit'
                variant='primary'
              >Sign Up
              </Button>
              <div style={{ marginLeft: '10px', display:'inline-block' }}>
                <Link to='/'>Sign In</Link>
              </div>
            </div>
          </Form.Group>
        </Form>
      </FormContainer>
    </HomeLayout>
  )
}
export default SignUp;