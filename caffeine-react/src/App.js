import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
// styles
import "./App.css";
import "./style/nav-bar.css";
import "./style/footer.css";
import "./style/home.css";
import "./style/new-product.css";
import "./style/all-products.css";
import './style/show-one-product.css';
import "./style/all-products.css";
import "./style/Cart.css";
import "./style/login.css";
import "./style/admin.css";
import "./style/articles.css"

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from './pages/Forgot';
import ShowOneProduct from "./pages/ShowOneProduct";
import Products from "./pages/Products";
import HomePage from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import Cart from './pages/Cart'
import NewArticle from "./pages/NewArticle";
import ShowOneArticle from './pages/ShowOneArticle';
import Articles from './pages/Articles';
import Admin from "./pages/Admin";

// components
import NavBar from './components/NavBar'
import Footer from './components/Footer'








function App() {
  const [dataLoading, setDataloading] = useState(false);
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [selectProduct, setSelectProduct] = useState({});
  const [selectArtcile, setSelectArticle] = useState({});

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

      {dataLoading && (
        <Router>
          <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} />
          <Route exact path="/">
            <HomePage setSelectArticle={setSelectArticle}/>
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
            <NewProduct setAuth={setAuth}
              auth={auth} />

          </Route>

          <Route path="/products/:id">
            <ShowOneProduct selectProduct={selectProduct} auth={auth} />

          </Route>

          <Route exact path="/products">
            <Products setSelectProduct={setSelectProduct} />
          </Route>

          <Route exact path="/cart">
            <Cart  
            auth={auth} />
          </Route>

          
          <Route path="/new-article">
            <NewArticle setAuth={setAuth}
              auth={auth}/>
          </Route>

          <Route path="/:article_id/article" >
            <ShowOneArticle selectArtcile={selectArtcile} auth={auth}/>
          </Route>

          <Route path="/articles" >
            <Articles setSelectArticle={setSelectArticle}/>
          </Route>

          <Route path="/admin" >
            <Admin auth={auth}/>
          </Route>

          {/* <Footer /> */}

        </Router>
        
      )}

    </div>
  );
}

export default App;
