import Cookies from 'js-cookie';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItems, profile, token, totalCount } from '../utilities/recoil';
import Loading from './Loading';

function HomeLayout({ isLoading, children }) {
  const [userToken, setUserToken] = useRecoilState(token);
  const [userProfile, setUserProfile] = useRecoilState(profile);
  const countOfCart = useRecoilValue(totalCount);
  const setCartItems = useSetRecoilState(cartItems);

  const handleSignOut = () => {
    Cookies.set('token', '')
    setUserProfile({});
    setCartItems({})
  }

  return (
    <>
      <Navbar
        bg='info'
        sticky='top'
      >
        <Container>
          <Navbar.Brand href='/'>ONLINE TRADING</Navbar.Brand>
          {
            userToken ? (
              <Nav className='justify-content-end'>
                <Nav.Link href='/cart'>
                  {/* <img src='/carticon.jpg' alt=''/> */}Cart {(countOfCart>0) ? countOfCart : ''}
                </Nav.Link>
                <Nav.Link href='/profile'>{userProfile.name}</Nav.Link>
                <Nav.Link onClick={()=> handleSignOut()}>Sign Out</Nav.Link>
              </Nav>
            ) : (
              <Nav className='me-auto'>
                <Nav.Link href='items/upload'>Upload New Item</Nav.Link>
              </Nav>
            )
          }
        </Container>
        <NavDropdown title="Languages" id="languageDropdown">
          <NavDropdown.Item href="">English</NavDropdown.Item>
          <NavDropdown.Item href="">Myanmar</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
      <div style={{ marginTop: 20 }}>
        {isLoading ? <Loading /> : children}
      </div>
    </>
  )
}
export default HomeLayout;