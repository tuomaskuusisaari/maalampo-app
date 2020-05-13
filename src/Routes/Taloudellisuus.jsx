import React from "react"
import "./taloudellisuus.css"
import { Header, Footer, ContainerSet, SideBySide} from "./Components"
import Ympäristö from "./Ympäristö"
import { MainPage } from "./Koti"
import KLogo from "../Pics/Frame 1 (1).jpg"
import Logo from "../Pics/sulpu-logo.png"
import Oma from "../Pics/omavara.png"
import Invest from "../Pics/investment.png"
import Check from "../Pics/interface.png"
import Home from "../Pics/home.png"
import Envi from "../Pics/arrows.png"
import Ig from "../Pics/instagram.png"

const navList = [
    {
      name: "",
      text: "Koti",
      pic: Home,
      component: MainPage
    },
    {
      name: "Ympäristö ja Tulevaisuus",
      pic: Envi,
      component: Ympäristö
    }
  ]

const textList = [ 
  "Kertasijoittamalla maalämpöön takaat pitkäaikaisen omavaraisuuden talvella lämmön suhteen, ja kesällä viilennyksen suhteen. Oma lämmitysjärjestelmä ei myöskään ole riippuvainen muun maailman energiatilanteesta. Laadukas eurooppalainen laitteisto varmistaa sen, että järjestelmän huoltotarve pysyy minimissä. Me kampanjoimme maalämmön puolesta, sillä uskomme vastuunkannon ja pitkäjänteisyyden voimaan.",
  "Voimme yhdessä taata energiariippumattoman Suomen tulevillekin polville panostamalla maalämpöön. Liity joukkoomme ja osoita tukesi paremman huomisen sekä kotimaisen huipputeknologian ja osaamisen puolesta! Valitse maalämpö, niin maa ei lämpene. Voit myös kertoa omista kokemuksistasi ja toiveistasi maalämmön suhteen käyttämällä tunnistetta #maaeilämpene",
  "Maalämpöön siirtymisen hyödyt näkyvät suurimmin yhteisöissä, joissa suurehko kertasijoitus voidaan jakaa osiin ja kaikille taataan varma ja vakaa energialähde pitkälle tulevaisuuteen. Maalämmöllä yhteisö voi itse varmistaa energiansaantinsa, toisin kuin luottamalla kaukaiseen ja tuntemattomaan energialaitokseen."
]

const box1 = (
  <div id="box11">
    <p>“...asun paritalossa, jossa öljylämmitys vaihdettiin vuonna 2008 maalämpöön. Investointi maksoi itsensä takaisin noin viidessä vuodessa vähentyneinä kuluina, järjestelmän odotettu käyttöikä on noin 20 vuotta, eli 15 vuotta pelkkää säästöä.”</p>
    <a href="https://www.hs.fi/paivanlehti/01102019/art-2000006256513.html" target="_blank">HS 1.10.2019</a>
    <img id="inv" src={Invest} alt="investment"/>
  </div>
)

const box2 = (
  <div id="box2">
    <p>Tekniikan tohtori Tuomo Niemelän mukaan lämpöpumppu­järjestelmillä on mahdollista saada merkittäviä säästöjä 1980-luvulla rakennetuissa ja vanhemmissa asuinrakennuksissa.</p>
    <p id="list">Vanhassa yli 40 huoneiston kerrostalossa maalämpöpumpun:</p>
    <li>hankintahinta: 300 000 e</li>
    <li>säästö: 30 000 e/vuosi</li>
    <li>takaisinmaksuaika: 10 vuotta</li>
    <li>käyttöikä 25–30 vuotta</li>
    <a href="https://www.hs.fi/koti/art-2000006307444.html" target="_blank">HS 14.11.2019</a>
    <img id="check" src={Check} alt="check-board"/>
  </div>
)

const box3 = (
  <div id="box33">
    <p>“Raisiossa sijaitseva kolmen kerrostalon Asunto-osakeyhtiö Sorolaisenmäki on energiatehokkuuden mallikansalainen. Vajaa neljä vuotta sitten tehty putki- ja energiatehokkuusremontin yhdistelmä on säästänyt asukkaiden rahoja jo yli 150 000 euron edestä.”</p>
    <p>“Yhtiö teki yli neljä vuotta sitten päätöksen irtautua kaukolämmöstä, sillä asukkaat halusivat siirtyä maalämpöön. Se oli Raisiossa ennakkoluulotonta ja ennenkuulumatonta. Samalla päätettiin ottaa käyttöön asuntojen ilmanvaihdon poistoilman lämpö, joka aiemmin meni harakoille. Se onnistui lämmöntalteenottojärjestelmän avulla."</p>
    <p>"Mäen mukaan yhtiössä oltiin muiden mielestä jopa hullunrohkeita, sillä kukaan naapuriyhtiöistä ei uskaltanut aloittaa vastaavaa hanketta. Onnistuneiden kokemusten myötä naapuritkin ovat sittemmin uusineet lämmitysjärjestelmänsä.“</p>
    <a href="https://www.hs.fi/koti/art-2000006451006.html" target="_blank">HS 26.3.2020</a>
  </div>
)

const conList = [
  {
    color: "#FFB494",
    title: "Yksityisasuja",
    txt: box1,
  },
  {
    color: "#96FFD3",
    title: "Tutkimus tukee säästöä",
    txt: box2
  },
  {
    color: "#FFB494",
    title: "Yhteisöllisyys",
    txt: box3
  }
]

export default function Taloudellisuus() {
    return(
        <div id="main">
            <Header list={navList} title="Taloudellisuus ja Omavaraisuus" logo={KLogo} id="kampanja-logo" />
            <div id="content">
              <SideBySide color="#99651C" title="Kohti omavaraisuutta" txt={textList} img={Oma} />
              <ContainerSet list={conList} />
            </div>
            <Footer social={Ig} logo={Logo} id="sulpu-logo" link="https://www.sulpu.fi/" link2="https://www.instagram.com/maaeilampene/"/>
        </div>
    )
}