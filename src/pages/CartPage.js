import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { cartItems, totalCount } from '../utilities/recoil';
import HomeLayout from '../components/HomeLayout';
import ProductCard from '../components/ProductCard';
import { Link } from '@reach/router';
import styles from '../scss/Cart.module.scss';
import Loading from '../components/Loading';

function CartPage() {
  const items = useRecoilValue(cartItems);
  const [isLoading, setIsLoading] = useState(true);
  const countOfCart = useRecoilValue(totalCount);
  const [products, setProducts] = useState([])
  console.log('products', products);

  useEffect(() => {
    // for (let key in items) {
    // fetch(`https://fakestoreapi.com/products/${key}`)
    // .then(res => res.json())
    // .then(json => products.push)
    // }
    Promise.all(
      Object.keys(items)
        .map(key => (
          fetch(`https://fakestoreapi.com/products/${key}`)
            .then(res => res.json())
            .then(json => json)))
    )
      .then((res) => { 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setProducts(res);
        console.log('products in promise.all', products)
        setIsLoading(false);
       })
      .catch(error => console.log(error))
  }, [])

  if (isLoading) return <Loading/>

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
                    showHorizontal
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