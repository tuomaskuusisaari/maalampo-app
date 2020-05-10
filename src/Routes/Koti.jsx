import React from 'react';
import ShowMoreText from 'react-show-more-text';
import Omavaraisuus from "./Omavaraisuus";
import Taloudellisuus from "./Taloudellisuus";
import Tulevaisuus from "./Tulevaisuus";
import Ympäristö from "./Ympäristö";
import Logo from "../Pics/sulpu-logo.png"
import Klogo from "../Pics/Frame 1 (1).jpg"
import { Header, Video, Footer, ContainerSet, Calculator } from "./Components"
import "./koti.css"

const navList = [
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
  },
  {
    name: "Tulevaisuus",
    component: Tulevaisuus
  }
]

const video = "https://tuomaskuusisaari.github.io/vjpvideo/vjpvideo.mp4"
const calcLink = "https://www.thermia.fi/maalampo/maalampo1/maalampo_saastot/"

function Bulletin() {
  return(
    <ShowMoreText
      lines={3}
      more="Lue lisää"
      less="Näytä vähemmän"
      anchorClass=""
      expanded={false}
    >
      <div class="chapter">Energiapäätökset ovat vaikeita - miten voit tietää, onko käyttämäsi energia taloudellista, ympäristöystävällistä ja huoletonta? 
      Maalämpö on. Mikset tekisi investointia sekä kiinteistösi että maapallon tulevaisuuteen, ja vaihtaisi maalämpöön?</div>

      <div class="chapter" id="chap"> Miten maalämpö sitten toimii? Maahan porataan tavallisesti noin 100 - 200 metriä syvä reikä, johon upotetaan putki,
      jossa kiertää lämmönkeruuneste. Maaperä lämmittää nesteen, joka siirtyy lämpöpumppuun, jossa se kerätään käyttämällä ekologista
      lämpöpumpputekniikkaa talon lämpö- ja lämminvesijärjestelmään. Neste pumpataan takaisin kiertoputkeen lämpenemään uudestaan.</div>

      <div class="chapter">Maalämpö on kotimaista uusiutuvaa energiaa parhaimmillaan - luonnon omat lämmönvaraajat, kallioperä ja vesistöt, pitävät sinut ja 
      perheesi lämpimänä monen sukupolven ajan. Kompakti laitteisto on viimeisimmilleen hiottua huipputeknologiaa, joka paitsi säästää 
      luontoa ja kalliita rakennusneliöitä, takaa kotisi tulevaisuuden.</div>

      <div class="chapter">Nykypäivän yhteiskunnan yleisessä keskustelussa ja päätöksenteossa kustannustehokkuuden ja ympäristökysymysten painoarvo ovat 
      suurimpia, joten siksi haluamme kampanjallamme tuoda maalämmön mukaan tähän keskusteluun juuri näistä näkökulmista. Asentaminen 
      on myös aina ajankohtainen teema, sillä se koskettaa ihmisiä arjessa, joten haluamme myös ottaa kampanjaamme mahdollisimman 
      ihmisläheisen keinon kytkeytyä kansan kanssa.</div>
    </ShowMoreText>
  )
}

const orgs = (
  <div id="orgs">
    <li><a href="https://www.sulpu.fi/">Sulpu</a></li>
    <li><a href="https://www.thermia.fi/">Thermia</a></li>
    <li><a href="https://gebwell.fi/">Gebwell</a></li>
  </div>
)

const containerList = [
  {
    color: "#96FFD3",
    title: "Käyttäjätarina",
    txt: "Tässä on haastis."
  },
  {
    color: "#FFB494",
    title: "Kaikki pumpuista",
    txt: "Tässä nähdään maalämpöpumppu."
  },
  {
    color: "#96FFD3",
    title: "Alan toimijoita",
    link: orgs
  }
]

function MainPage() {
  return (
      <div id="main">
        <Header list={navList} title="#maaeilämpene" logo={Klogo} id="kampanja-logo"/>
        <Video src={video}/>
        <div id="facts">
          <h1>Mistä on kyse?</h1>
          <Bulletin />
        </div>
        <ContainerSet list={containerList}/>
        <Calculator link={calcLink} top="Kuinka paljon säästäisit maalämmöllä?" bottom="Ota selvää!"/>
        <Footer logo={Logo} id="sulpu-logo"/>
      </div>
  );
}

export { MainPage, navList }