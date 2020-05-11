import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { MainPage, navList } from "../src/Routes/Koti"
import NotFoundPage from "../src/Routes/404"
import CardGame from "../src/Game/CardGame"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/Game" component={CardGame} />
        {navList.map((item) => (<Route exact path={"/" + item.name} component={item.component} key={item.name}/>))}
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;