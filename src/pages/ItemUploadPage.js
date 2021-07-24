import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import HomeLayout from '../components/HomeLayout';
import styles from '../scss/Form.module.scss';

function ItemUploadPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      category,
      price
    }
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.status === 200) { console.log('success') };
      })
  }

  return (
    <HomeLayout>
      <FormContainer colSize={4}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='textarea'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='form-control-sm'
            />
          </Form.Group>
          <div className='text-center' style={{marginTop:'10px'}}>
            <Button
              type='submit'
              variant='primary'
            >
              Upload
            </Button>
          </div>
        </Form>
      </FormContainer>
    </HomeLayout>
  )
}
export default ItemUploadPage;