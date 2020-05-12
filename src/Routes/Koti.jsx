import React from 'react';
import ShowMoreText from 'react-show-more-text';
import Popup from "reactjs-popup";
import Taloudellisuus from "./Taloudellisuus";
import Ympäristö from "./Ympäristö";
import Logo from "../Pics/sulpu-logo.png"
import Klogo from "../Pics/Frame 1 (1).jpg"
import Poster from "../Pics/Näyttökuva (11).png"
import { Header, Video, Footer, ContainerSet, Calculator } from "./Components"
import "./koti.css"
import { Link } from "react-router-dom"
import Envi from "../Pics/arrows.png"
import Eco from "../Pics/education.png"
import Ig from "../Pics/instagram.png"

const navList = [
  {
    name: "Ympäristö & Tulevaisuus",
    pic: Envi,
    component: Ympäristö
  },
  {
    name: "Taloudellisuus & Omavaraisuus",
    pic: Eco,
    component: Taloudellisuus
  }
]

const video = "https://tuomaskuusisaari.github.io/vjpvideo/vjpvideo.mp4"
const calcLink = "https://www.thermia.fi/maalampo/maalampo1/maalampo_saastot/"

function Bulletin() {
  return(
    <ShowMoreText
      lines={4}
      more="Lue lisää"
      less="Näytä vähemmän"
      anchorClass=""
      expanded={false}
    >
      <div className="chapter">Pippurinen maalämpö päihittää muut energiamuodot yhteisöllisyydellään, pitkäikäisyydellään ja ainutlaatuisuudellaan. 
      Tältä sivustolta löydät vastauksen kaikkeen, mikä maalämpöön siirtymisessä askarruttaa. Tutustu aiheeseen paremmin, 
      ja aloita kotisi tai taloyhtiösi lämmin ja yhteishenkeä nostattava matka kohti omavaraisuutta ja puhdasta ilmasto-omaatuntoa.
      Taataan kansakuntana yhteisöjemme kehitys puhtaampaa tulevaisuutta kohden kotimaisuutta ja taloudellisuutta unohtamatta!</div>

      <div className="chapter" id="chap">Me kampanjoimme maalämmön puolesta, sillä uskomme vastuunkannon ja pitkäjänteisyyden voimaan. 
      Voimme yhdessä taata energiariippumattoman Suomen tulevillekin polville panostamalla maalämpöön.
      Liity joukkoomme ja osoita tukesi paremman huomisen sekä kotimaisen huipputeknologian ja osaamisen puolesta!
      Valitse maalämpö, niin maa ei lämpene. Voit myös kertoa omista kokemuksistasi ja toiveistasi maalämmön suhteen käyttämällä tunnistetta #maaeilämpene</div>
    </ShowMoreText>
  )
}

const orgs = (
  <div id="orgs">
    <li><a href="https://www.sulpu.fi/">Sulpu</a></li>
    <li><a href="https://www.thermia.fi/">Thermia</a></li>
    <li><a href="https://gebwell.fi/">Gebwell</a></li>
    <li><a href="http://www.xn--maalmppumppu-jcb8w.org/">maalämpöpumppu.org</a></li>
    <li><a href="https://www.motiva.fi/ratkaisut/uusiutuva_energia/lampopumput">Motiva</a></li>
    <li><a href="https://www.vihreat.fi/asiat/vihrea-politiikka/ymparisto">Vihreät</a></li>
  </div>
)

const interview = (
  <div id="inter">
    <Popup trigger={<button>"...sijoitus talomme arvoon ja taattuun lämpöön ympäri vuoden."</button>} modal  closeOnDocumentClick>
      <div>
        ”Rakennuttaessamme omakotitaloa asensimme samalla maalämpöpumpun. Tällöin asennuksista ja porauksista ei ollut haittaa maisemalle, eikä työmaan toimintakaan hidastunut parin päivän asennuksen aikana. Mahdollisimman aikainen sijoitus maalämpöön takaa myös nopeamman takaisinmaksuajan, sekä on sijoitus talomme arvoon ja taattuun lämpöön ympäri vuoden.”
      </div>
    </Popup>
    <Popup trigger={<button>"...totesimme maalämmön edullisimmaksi ympäristöystävälliseksi vaihtoehdoksi..."</button>} modal  closeOnDocumentClick>
      <div>
        ”Olimme naapurimme kanssa pitkään ihmetelleet kalliita lämmitysmaksuja. Vertailimme erilaisia lämmitysvaihtoehtoja ja totesimme maalämmön edullisimmaksi ympäristöystävälliseksi vaihtoehdoksi. Alkusijoitus olisi kuitenkin suuri ja asentaminen olisi haitaksi pihallemme. Oli lopputalvi joten päätimme ottaa pihojen remontoinnin kevään projektiksi ja yhdessä tehty taloudellinen sijoitus ei tuntunut loppujen lopuksi niin pelottavalta."
      </div>
    </Popup>
    <Popup trigger={<button>"...ja asukkaatkin ovat innostuneet kauniin maiseman korostamisesta.”</button>} modal  closeOnDocumentClick>
      <div>
      ”Kuulin, että taloyhtiöömme asennetaan maalämpöpumppu. Ensin olin huolissani melusta ja maiseman tuhoutumisesta. Kaikki melua aiheuttavat toimenpiteet hoidettiin kuitenkin päivän kiiresimpinä aikoina, eivätkä poraukset häirinneet arkielämää. Asennus hoidettiin yllättävän tehokkaasti ja pihan korjaustyöt aloitettiin välittömästi. Nyt piha kukoistaa entistä vehreämpänä ja asukkaatkin ovat innostuneet kauniin maiseman korostamisesta.”
      </div>
    </Popup>
  </div>
)

const game = (
  <div id="game">
    <p>Vaikka maalämpö uusiutuvana energiamuotona kasvattaa vain suosiotaan, niin kuitenkin maalämpöpumpuista tiedetään yllättävän vähän. Tämän takia haluamme tuoda maalämpöpumput tutuksi ihan tavallisellekkin kansalaiselle leikkimielisen maalämpöpumppu-muistipelin kautta!</p>
    <Link id="game-link" to="/Game"><h5>Pelaa!</h5></Link>
  </div>
)

const containerList = [
  {
    color: "#96FFD3",
    title: "Kokemuksia",
    txt: interview
  },
  {
    color: "#FFB494",
    title: "Pumput tutuiksi",
    txt: game
  },
  {
    color: "#96FFD3",
    title: "Hyödyllisiä linkkejä",
    link: orgs
  }
]

function MainPage() {
  return (
      <div id="main">
        <Header list={navList} title="#maaeilämpene" logo={Klogo} id="kampanja-logo"/>
        <Video poster={Poster} src={video}/>
        <div id="facts">
          <h1>Mistä on kyse?</h1>
          <Bulletin />
        </div>
        <ContainerSet list={containerList}/>
        <Calculator link={calcLink} top="Kuinka paljon säästäisit maalämmöllä?" bottom="Ota selvää!"/>
        <Footer social={Ig} logo={Logo} id="sulpu-logo" link="https://www.sulpu.fi/" link="https://www.instagram.com/maaeilampene/"/>
      </div>
  );
}

export { MainPage, navList }