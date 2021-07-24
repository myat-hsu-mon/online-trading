import React, { useEffect, useState } from 'react';
import FormContainer from '../components/FormContainer';
import HomeLayout from '../components/HomeLayout';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

function ItemDetailPage(props) {
  console.log(props.itemId)
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.itemId}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setIsLoading(false);
      })
  }, [])

  if (isLoading) return <Loading />
  
  return (
    <HomeLayout>
      <FormContainer colSize={5}>
        <ProductCard product={product} showDetail />
      </FormContainer>
    </HomeLayout>
  )
}

export default ItemDetailPage;