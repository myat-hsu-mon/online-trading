import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { profile } from '../utilities/recoil';
import FormContainer from '../components/FormContainer';
import HomeLayout from '../components/HomeLayout';
import { Button, Form } from 'react-bootstrap';
import styles from '../scss/Form.module.scss';
import { navigate } from '@reach/router';

function ProfilePage() {
  const [userProfile, setUserProfile] = useRecoilState(profile);
  console.log(userProfile)
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // edit and save user profile
    navigate('/')
    setUserProfile({
      name,
      email,
      password
    })
  }

  return (
    <HomeLayout>
      <FormContainer colSize={4}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <div className='text-center' style={{ marginTop: '10px' }}>
              <Button
                type='submit'
                variant='primary'
              >SAVE
              </Button>
            </div>
          </Form.Group>
        </Form>
      </FormContainer>
    </HomeLayout>
  )
}
export default ProfilePage;