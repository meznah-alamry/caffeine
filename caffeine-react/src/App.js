import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
// styles
import "./App.css";
import "./style/nav-bar.css";
import "./style/footer.css";
import "./style/section.css";
import "./style/new-product.css";
// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShowOneProduct from "./pages/ShowOneProduct";
import Products from "./pages/Products";
import HomePage from "./pages/Home";
import NewProduct from "./pages/NewProduct";
// components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Forgot from './pages/Forgot';




function App() {
  const [dataLoading, setDataloading] = useState(false);
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [selectProduct, setSelectProduct] = useState({})

  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, process.env.SECRET_KEY).user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    setDataloading(true);
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);

  return (
    <div className="">
      <NavBar />
      {dataLoading && (
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/login">
            <Login loginCallback={userLogin} />
          </Route>

          <Route exact path="/signup">
            <Signup loginCallback={userLogin} />
          </Route>


          <Route exact path="/forgot">



            <Forgot loginCallback={userLogin} />

            
          </Route> 


          <Route exact path="/new-product">
            <NewProduct setAuth = {setAuth}
            auth={auth}/>
          </Route>

          <Route path="/products/:id">
            <ShowOneProduct selectProduct={selectProduct} />
          </Route>

          <Route exact path="/products">
            <Products setSelectProduct={setSelectProduct} />
          </Route>


        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
