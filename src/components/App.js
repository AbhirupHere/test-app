import { Component } from "react";
import Table from "./Table";
import ItemForm from "./ItemForm";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Routes>
            <Route exact path="/" Component={Table} />
            <Route path="/itemform" Component={ItemForm} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
