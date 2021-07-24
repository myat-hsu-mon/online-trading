import React from 'react';
import { Button } from 'react-bootstrap';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartItems, totalCount } from '../utilities/recoil';
import styles from '../scss/Quantity.module.scss';

function Quantity({ product }) {
  const [items, setItems] = useRecoilState(cartItems);

console.log('items', items)
console.log('product id', product.id)
  const increase = (id) => {
    console.log('increase id', id)
    if (!(id in items)) {
      setItems((prev) => ({
        ...prev,
        [id]: 1,
      }))
    } else {
      setItems((prev) => ({
        ...prev,
        [id]: prev[id] + 1,
      }))
    }
  }

  const decrease = (id) => {
    if (items[id] > 1) {
      setItems((prev) => ({
        ...prev,
        [id]: prev[id] - 1,
      }))
    }else{
     let remainedItems = {};
     for(let key in items){
       if(Number(key)!== id){
         console.log(Number(key))
         remainedItems={
           ...remainedItems,
           [key]: items[key]
         }
       }
     }
     setItems(remainedItems);
    }
  }

  const result =( !(product.id in items)) ? (
    <Button
      variant='outline-primary'
      onClick={(e) => increase(product.id)}
      className={`${styles.quantitybtn} btn-outline-dark`}
    >Add to cart
    </Button>
  ) : (
    <div>
      <Button
        variant='outline-dark'
        onClick={(e) => decrease(product.id)}
        className={styles.quantitybtn}
      >-
      </Button>
      <span className={styles.count}>{items[product.id]}</span>
      <Button
        variant='outline-dark'
        onClick={(e) => increase(product.id)}
        className={styles.quantitybtn}
      >+
      </Button>
    </div>
  )
  return result;

}
export default Quantity;