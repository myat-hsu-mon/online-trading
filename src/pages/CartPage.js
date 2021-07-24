import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { cartItems, totalCount } from '../utilities/recoil';
import HomeLayout from '../components/HomeLayout';
import ProductCard from '../components/ProductCard';
import { Link } from '@reach/router';
import styles from '../scss/Cart.module.scss';

function CartPage() {
  const items = useRecoilValue(cartItems);
  const [isLoading, setIsLoading] = useState(true);
  const countOfCart = useRecoilValue(totalCount);
  let products = [];
  console.log(countOfCart);

  useEffect(() => {
    for (let key in items) {
        fetch(`https://fakestoreapi.com/products/${key}`)
        .then(res => res.json())
        .then(json => products.push)
    }
    setIsLoading(false);
    console.log('products are', products)
  }, [])

  if (isLoading) return <div>loading</div>

  return (
    <HomeLayout>
      <Container>
        {
          countOfCart > 0 ? (
            <>
              {
                products.map((item) => (
                  <ProductCard
                    product={item}
                    key={item.id}
                    horizontalCard
                  />
                ))
              }
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div className={styles.gobackText}>
                <p>No Item Selected</p>
                <Link to='/items'>
                  <p style={{ color: '#000' }}>GO BACK TO ORDER</p>
                </Link>
              </div>
            </div>
          )
        }
      </Container>
    </HomeLayout>
  )
}
export default CartPage;