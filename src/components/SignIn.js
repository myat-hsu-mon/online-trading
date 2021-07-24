import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSetRecoilState } from 'recoil';
import { token } from '../utilities/recoil';
import FormContainer from './FormContainer';
import HomeLayout from './HomeLayout';
import styles from '../scss/Form.module.scss'
import Cookies from 'js-cookie';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserToken = useSetRecoilState(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setUserToken('R787ufdfi384');
      Cookies.set('R787ufdfi384');
    } else {
      window.alert('login fail');
    }
  }

  return (
    <HomeLayout>
      <FormContainer colSize={4}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group className='mb-3'>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='name@gmail.com'
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=''
              className='form-control-sm'
            />
          </Form.Group>
          <div className='text-center'>
            <Button
              type='submit'
              variant='info'
            >Login
            </Button>
            <p>Create Account?</p>
            <Link to='signup'>Sign up</Link>
          </div>
        </Form>
      </FormContainer>
    </HomeLayout>
  )
}
export default SignIn;