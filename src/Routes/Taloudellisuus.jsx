import React from "react"
import "./taloudellisuus.css"
import { Header, Footer} from "./Components"
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
      name: "Ympäristö & Tulevaisuus",
      component: Ympäristö
    }
  ]

export default function Taloudellisuus() {
    return(
        <div id="main">
            <Header list={navList} title="Taloudellisuus & Omavaraisuus" logo={KLogo} id="kampanja-logo" />
            <Footer logo={Logo} id="sulpu-logo"/>
        </div>
    )
}