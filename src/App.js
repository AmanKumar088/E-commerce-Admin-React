import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Account from './Component/Auth/Account';
import AuthSignup from './Component/Auth/Signup';
import Dashbord from './Component/Dashbord/Dashbord';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubCategory from './Component/Dashbord/SubCategory/SubCategory';
import Product from './Component/Dashbord/Product/Product';
import AddCategory from './Component/Dashbord/CategoryMain/AddCategory';
import AddSubCategory from './Component/Dashbord/SubCategory/AddSubCategory';
import AddProduct from './Component/Dashbord/Product/AddProduct';
import SingleCategory from './Component/Dashbord/CategoryMain/SingleCategory';
import UpdateCategory from './Component/Dashbord/CategoryMain/UpdateCategory';
import SingleSubCategory from './Component/Dashbord/SubCategory/SingleCategory';
import UpdateSubCategory from './Component/Dashbord/SubCategory/UpdateSubCategory';
import UpdateProduct from './Component/Dashbord/Product/UpdateProduct';
import SingleProduct from './Component/Dashbord/Product/SingleProduct';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Account />} ></Route>
      <Route path='/signup'  element={<AuthSignup />}></Route>
      <Route path='/dashbord'  element={<Dashbord />}> </Route>
      <Route path='/subCategory' element={<SubCategory />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/AddCategory' element={<AddCategory />}></Route>
      <Route path='/Addsubcategory' element={<AddSubCategory />}></Route>
      <Route path='/Addproduct' element={<AddProduct />}></Route>
      <Route path='/single/:id' element={<SingleCategory />}></Route>
      <Route path='/update/:id' element={<UpdateCategory />}></Route>
      <Route path='/getsub/:id' element={<SingleSubCategory />}></Route>
      <Route path='/updatesub/:id' element={<UpdateSubCategory />}></Route>
      <Route path='/updateproduct/:id' element={<UpdateProduct />}></Route>
      <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
