import React from "react"
import "./tulevaisuus.css"
import { Header, Footer} from "./Components"
import Omavaraisuus from "./Omavaraisuus"
import Taloudellisuus from "./Taloudellisuus"
import Ympäristö from "./Ympäristö"
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
      name: "Ympäristö",
      component: Ympäristö
    },
    {
      name: "Taloudellisuus",
      component: Taloudellisuus
    },
    {
      name: "Omavaraisuus",
      component: Omavaraisuus
    }
  ]

export default function Tulevaisuus() {
    return(
        <div id="main">
            <Header list={navList} title="Tulevaisuus" logo={KLogo} id="kampanja-logo" />
            <Footer logo={Logo} id="sulpu-logo"/>
        </div>
    )
}