import React from 'react';
import HomeLayout from '../components/HomeLayout';
import FormContainer from '../components/FormContainer';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useRecoilValue } from 'recoil';
import { token } from '../utilities/recoil';
import ListingItemsPage from './ListingItemsPage';

function WelcomePage() {
  const userToken = useRecoilValue(token);

  return (
    <>
      {
        userToken ? <ListingItemsPage /> : <SignIn />
      }
    </>
  )
}
export default WelcomePage;