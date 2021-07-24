import { Router } from '@reach/router';
import WelcomePage from './pages/WelcomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingItemsPage from './pages/ListingItemsPage.js';
import ItemDetailPage from './pages/ItemDetailPage.js';
import ItemUploadPage from './pages/ItemUploadPage.js';
import CartPage from './pages/CartPage.js';
import './scss/App.scss';
import SignUp from './components/SignUp.js';
import ProfilePage from './pages/ProfilePage.js';

function App() {
  return (
    <Router>
      <WelcomePage path='/' />
      <SignUp path='/signup' />
      <ListingItemsPage path='/items' />
      <ItemDetailPage path='items/:itemId' />
      <ItemUploadPage path='items/upload' />
      <CartPage path='/cart' />
      <ProfilePage path='/profile' />
    </Router>
  );
}

export default App;
