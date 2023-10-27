import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Compntens.js/Navbarr';
import Product1 from './Compntens.js/Product1';
import Product2 from './Compntens.js/Product2';
import Product3 from './Compntens.js/Product3';
import Product4 from './Compntens.js/Product4';
import Footerr from './Compntens.js/Footerr';
import Carousell from './Compntens.js/Carousell';
function App() {
  return (
    <div>
      
      <Navbarr/>
      <Carousell/>
      <div className='container'>
      <Product1/>
      
      <Product2/>
      <Product3/>
      <Product4/>
      </div>
      <Footerr/>
    </div>
    
  );
}

export default App;
