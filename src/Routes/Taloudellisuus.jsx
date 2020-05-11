import React from "react"
import "./taloudellisuus.css"
import { Header, Footer} from "./Components"
import Omavaraisuus from "./Omavaraisuus"
import Tulevaisuus from "./Tulevaisuus"
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
      name: "Omavaraisuus",
      component: Omavaraisuus
    },
    {
      name: "Tulevaisuus",
      component: Tulevaisuus
    }
  ]

export default function Taloudellisuus() {
    return(
        <div id="main">
            <Header list={navList} title="Taloudellisuus" logo={KLogo} id="kampanja-logo" />
            <Footer logo={Logo} id="sulpu-logo"/>
        </div>
    )
}