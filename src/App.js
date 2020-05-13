import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import { MainPage, navList } from "../src/Routes/Koti"
import NotFoundPage from "../src/Routes/404"
import GameApp from "../src/Game/GameApp.js"

function App() {
  return (
    <HashRouter >
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/Game" component={GameApp} />
        {navList.map((item) => (<Route exact path={"/" + item.name} component={item.component} key={item.name}/>))}
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
}

export default App;