import React from 'react';
import './App.css';

const linkList = [
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Ympäristö"
  },
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Taloudellisuus"
  },
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Omavaraisuus"
  },
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Tulevaisuus"
  }
]

function Header() {


  return(
    <header>
      {linkList.map((link) =>
      (<a className="nav-link" href={link.href}>{link.name}</a>))}
    </header>
  )
}

function App() {
  return (
    <body>
      <Header/>
    </body>
  );
}

export default App;