import React from "react"
import "./ympäristö.css"
import { Header, Footer, ContainerSet, SideBySide } from "./Components"
import Taloudellisuus from "./Taloudellisuus"
import { MainPage } from "./Koti"
import KLogo from "../Pics/Frame 1 (1).jpg"
import Logo from "../Pics/sulpu-logo.png"
import Foot from "../Pics/Carbon_footprint_icon.png"
import Pump from "../Pics/vector 3.png"
import Home from "../Pics/home.png"
import Eco from "../Pics/education.png"
import Ig from "../Pics/instagram.png"

const navList = [
    {
      name: "",
      text: "Koti",
      pic: Home,
      component: MainPage
    },
    {
      name: "Taloudellisuus ja Omavaraisuus",
      pic: Eco,
      component: Taloudellisuus
    }
  ]

  const box1 = (
  <div id="box1">
    <p>Suomessa kotitalouksissa kulutetusta energiasta jopa puolet kuluu lämmitykseen ja lämmitys on näin keskeinen ilmastovaikutuksen aiheuttaja. Maalämpö on erittäin ympäristöystävällinen valinta, ja se onkin <a href="https://tulevaisuudenrakentaminen.samk.fi/2019/05/31/pientalon-lammityksen-hiilijalanjalki/" target="_blank">tutkitusti</a> vähäpäästöisin lämmitysmuoto esimerkiksi pientaloissa. Kotitalouden lämmitysenergian tarve on keskimäärin 19 450 kWh vuodessa ja tämä aiheuttaa keskimäärin 3626 kg CO2e päästöt. Maalämpöpumpun asentaminen taas vähentää päästöjä sähkölämmitykseen verrattuna keskimäärin noin 1360 kg CO2-e vuodessa, ja vaikutukset ovat vielä suuremmat jos lämmitykseen käytetään esimerkiksi kaukolämpöä.</p>
  </div>)

  const box2 = (
    <div id="box2">
      <p>Kiinteistösijoittaja Varma aikoo puolittaa vuokratalojensa päästöt energiaremontilla, jossa kaukolämpö vaihdetaan lämpöpumppuihin ja maalämpöön. Varma laskee, että sen neljästäkymmenestä vuokratalosta säästyvät päästöt vastaavat yli 1 700:n bensiiniauton vuosittaista käyttöä tai 7 600:tta meno–paluulentoa Helsingistä Espanjaan.</p>
      <p id="c2">”Pääosa päästöistä tulee rakennuksen käytöstä, ei sen rakentamisesta. Siksi lämmityksen kautta päästöihin voidaan vaikuttaa eniten. Ja koska vanhaa rakennuskantaa on paljon, energiaremonteilla niille voidaan antaa uusi elämä eikä vanhoja taloja ole pakko purkaa”, sanoo Leasegreenin toimitusjohtaja Thomas Luther.”</p>
      <a href="https://www.hs.fi/talous/art-2000006398649.html" target="_blank">Lue lisää</a>
    </div>
  )

  const box3 = (
    <div id="box3">
      <p>Suomalaisen hiilijalanjälki on keskimäärin yli 10 000 kg CO2e vuodessa ja siitä noin kolmannes aiheutuu asumisen päästöistä. Tiedätkö, mikä sinun hiilijalanjälkesi on? Täällä voit laskea hiilijalanjälkesi, ja näet myös eroteltuna eri osa-alueiden aiheuttamat päästöt.</p>
      <a id="bt" href="https://elamantapatesti.sitra.fi/" target="_blank">Laskuriin</a>
      <p>Onko asumisen hiilijalanjälkesi korkea? Voit pienentää sitä esimerkiksi vaihtamalla maalämpöön!</p>
      <img id="foot" src={Foot} alt="carbon-footprint"/>
    </div>
  )

  const conList = [
    {
      color: "#FFB494",
      title: "Suurin osa asumisen päästöstä tulee lämmityksestä",
      txt: box1
    },
    {
      color: "#96FFD3",
      title: "Varma esimerkki",
      txt: box2
    },
    {
      color: "#FFB494",
      title: "Hiilijalanjäljestä",
      txt: box3
    }
  ]


const textList = [
  "Maalämpö on miljardien vuosien ajan maaperään sitoutunutta auringon säteilyä, joka vain odottaa käyttöönottoa! Kyse on siis uusiutuvasta energianlähteestä, jonka tuottaminen ei kuormita luontoa. Mitä vielä, maalämpöä löytyy runsaasti meillä Suomessakin, joten lämmönsiirtoon liittyvät haitat ovat olemattomat.",
  "Valitsemalla maalämmön sijoitat tulevaan! Huipputekninen koneisto takaa kestävän ja jatkuvan energiansaannin pitkälle seuraaville polville, ja toimii siten pätevänä myyntivalttina kotia vaihtaessa. Säästät myös luontoa - maalämpö on vihreä valinta, joka varmistaa rakastamamme suomalaisen luonnon säilymisen."
]

export default function Ympäristö() {
    return(
        <div id="main">
            <Header list={navList} title="Ympäristö ja Tulevaisuus" logo={KLogo} id="kampanja-logo" />
            <div id="content">
              <SideBySide color="#99651C" title="Miksi maalämpö?" txt={textList} img={Pump} />
              <ContainerSet list={conList} />
            </div>
            <Footer social={Ig} logo={Logo} id="sulpu-logo" link="https://www.sulpu.fi/" link2="https://www.instagram.com/maaeilampene/"/>
        </div>
    )
}