import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Container/Header';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ProductListing from './Container/ProductListing';
import ProductDetail from './Container/ProductDetail';

function App() {
  return (
    <Provider store ={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing/>}/>
          <Route path='/product/:productId' element={<ProductDetail/>}/>
          <Route> 404 NOT Found</Route>


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
