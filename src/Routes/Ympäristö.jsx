import React from "react"
import "./ympäristö.css"
import { Header, Footer } from "./Components"
import Omavaraisuus from "./Omavaraisuus"
import Taloudellisuus from "./Taloudellisuus"
import Tulevaisuus from "./Tulevaisuus"
import { MainPage } from "./Koti"
import KLogo from "../Pics/Frame 1 (1).jpg"
import Logo from "../Pics/sulpu-logo.png"

const navList = [
    {
      name: "",
      text: "Koti",
      component: MainPage
    },
    {
      name: "Taloudellisuus",
      component: Taloudellisuus
    },
    {
      name: "Omavaraisuus",
      component: Omavaraisuus
    },
    {
      name: "Tulevaisuus",
      component: Tulevaisuus
    }
  ]

export default function Ympäristö() {
    return(
        <div id="main">
            <Header list={navList} title="Ympäristö" logo={KLogo} id="kampanja-logo" />
            <Footer logo={Logo} id="sulpu-logo"/>
        </div>
    )
}