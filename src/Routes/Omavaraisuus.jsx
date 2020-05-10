import React from "react"
import "./omavaraisuus.css"
import { Header, Footer } from "./Components"
import Taloudellisuus from "./Taloudellisuus"
import Tulevaisuus from "./Tulevaisuus"
import Ympäristö from "./Ympäristö"
//import { MainPage } from "./Koti"
import KLogo from "../Pics/Frame 1 (1).jpg"

const navList = [
    //{
      //name: "Koti",
      //component: MainPage
    //},
    {
      name: "Ympäristö",
      component: Ympäristö
    },
    {
      name: "Taloudellisuus",
      component: Taloudellisuus
    },
    {
      name: "Tulevaisuus",
      component: Tulevaisuus
    }
  ]

export default function Omavaraisuus() {
    return(
        <div id="main">
            <Header list={navList} title="Omavaraisuus" logo={KLogo} id="kampanja-logo" />
        </div>
    )
}