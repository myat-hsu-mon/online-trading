import React from 'react';
import { Link } from '@reach/router';
import { Card } from 'react-bootstrap';
import Quantity from './Quantity';
import styles from '../scss/ProductCard.module.scss';

function ProductCard({ product, showDetail, showHorizontal }) {
  console.log('product is: ', product)
  return (
    <Card bg='light' className={`${styles.card} ${showDetail && styles.cardDetail}`}>
      <Link to={`/items/${product.id}`} style={{textDecoration:'none'}}>
        <div className={styles.img}>
        <Card.Img src={product.image} alt='' className='img-fluid'/>
        </div>
        <Card.Body>
          <h3 className={styles.productPrice}>{product.price} ks</h3>
          <Card.Title className={styles.productTitle}>{product.title}</Card.Title>
        </Card.Body>
      </Link>
      <Card.Footer className='justify-content-center'>
        <Quantity product={product}/>
      </Card.Footer>
    </Card>
  )
}
export default ProductCard;