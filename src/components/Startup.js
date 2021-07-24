import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItems, isLoading, profile, token, totalCount } from '../utilities/recoil';

function Startup({ children }) {
   const userToken = useRecoilValue(token);
   const [items, setItems] = useRecoilState(cartItems)
   const [userLoading, setUserLoading] = useRecoilState(isLoading);
   const [userProfile, setUserProfile] = useRecoilState(profile);
   const setTotalCount = useSetRecoilState(totalCount);

   const fetchCartItems = () => {
      //fetch cartItems with token
      setItems({
         1:3,
         3:2,
         4:2,
      })
      setTotalCount(3)
   }

   const fetchUserProfile = () => {
      //fetch userprofile with token
      setUserProfile({
         name:'Myat Hsu',
         email:'myathsumon.ycc@gmail.com',
      })
      setUserLoading(false)
   }

   useEffect(() => {
     if(userToken) {
        fetchCartItems();
        fetchUserProfile();
     }else{
        setUserLoading(false);
     }
   }, [])

   if(userLoading) return <h6>loading</h6>

   return (
      <>
         {children}
      </>
   )
}
export default Startup;