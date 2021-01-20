import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import "bootstrap/dist/css/bootstrap.min.css";
import './style/nav-bar.css';
import './style/footer.css';





function App() {
  return (
    <Router>

    <Route path="/">     

       <HomePage />

    </Route>

  </Router>
  );
}

export default App;
