import React from 'react';
import ShowMoreText from 'react-show-more-text';
import Popup from "reactjs-popup";
import Omavaraisuus from "./Omavaraisuus";
import Taloudellisuus from "./Taloudellisuus";
import Tulevaisuus from "./Tulevaisuus";
import Ympäristö from "./Ympäristö";
import Logo from "../Pics/sulpu-logo.png"
import Klogo from "../Pics/Frame 1 (1).jpg"
import { Header, Video, Footer, ContainerSet, Calculator } from "./Components"
import "./koti.css"
import { Link } from "react-router-dom"

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
      <div className="chapter">Energiapäätökset ovat vaikeita - miten voit tietää, onko käyttämäsi energia taloudellista, ympäristöystävällistä ja huoletonta? 
      Maalämpö on. Mikset tekisi investointia sekä kiinteistösi että maapallon tulevaisuuteen, ja vaihtaisi maalämpöön?</div>

      <div className="chapter" id="chap"> Miten maalämpö sitten toimii? Maahan porataan tavallisesti noin 100 - 200 metriä syvä reikä, johon upotetaan putki,
      jossa kiertää lämmönkeruuneste. Maaperä lämmittää nesteen, joka siirtyy lämpöpumppuun, jossa se kerätään käyttämällä ekologista
      lämpöpumpputekniikkaa talon lämpö- ja lämminvesijärjestelmään. Neste pumpataan takaisin kiertoputkeen lämpenemään uudestaan.</div>

      <div className="chapter">Maalämpö on kotimaista uusiutuvaa energiaa parhaimmillaan - luonnon omat lämmönvaraajat, kallioperä ja vesistöt, pitävät sinut ja 
      perheesi lämpimänä monen sukupolven ajan. Kompakti laitteisto on viimeisimmilleen hiottua huipputeknologiaa, joka paitsi säästää 
      luontoa ja kalliita rakennusneliöitä, takaa kotisi tulevaisuuden.</div>

      <div className="chapter">Nykypäivän yhteiskunnan yleisessä keskustelussa ja päätöksenteossa kustannustehokkuuden ja ympäristökysymysten painoarvo ovat 
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
    <Link id="game-link" to="/Game"><div>Pelaa!</div></Link>
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