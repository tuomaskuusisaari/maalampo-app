import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom"
import { MainPage, navList } from "../src/Routes/Koti"
import NotFoundPage from "../src/Routes/404"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFoundPage} />
        {navList.map((item) => (<Route exact path={"/" + item.name} component={item.component} />))}
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;