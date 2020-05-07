import React from 'react';
import ShowMoreText from 'react-show-more-text';
import './App.css'
import Logo from "../src/Pics/sulpu-logo.png"
import Klogo from "../src/Pics/Frame 1 (1).jpg"

const linkList = [
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Ympäristö"
  },
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Taloudellisuus"
  },
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Omavaraisuus"
  },
  {
    href: "https://www.youtube.com/watch?v=jMstFOpd-zA",
    name: "Tulevaisuus"
  }
]

function Header() {

  return(
    <div id="header">
      <div id="logo-container">
        <img id="kampanja-logo" src={Klogo} alt="Kampanja Logo"></img>
        <a id="home" href="index.html"><h1>#maaeilämpene</h1></a>
      </div>
      {linkList.map((link) =>
      (<a href={link.href} key={link.name}>{link.name}</a>))}
    </div>
  )
}

function Video() {
  return(
    <div id="video-container">
      <video id="video" preload="auto" controls>
        <source src="https://tuomaskuusisaari.github.io/vjpvideo/vjpvideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  )
}

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

function Footer() {
  return(
    <footer id="footer">
      <img id="sulpu-logo" src={Logo} alt="Sulpu Logo"></img>
    </footer>
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

function VerticalContainer(props) {

  const color = props.color
  const txt = props.txt
  const title = props.title
  const link = props.link


  return(
    <div style={{backgroundColor: color,
                 width: "30%" ,
                 height: "2 * width",
                 display: "flex",
                 flexDirection: "column",
                 boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"

    }}>
      <h1 style={{padding: "10px"}}>{title}</h1>
      <p style={{fontSize: "16px", padding: "10px"}}>{txt}</p>
      {link}
    </div>
  )
}

function ContainerSet() {
  return(
    <div id="verticals">
      {containerList.map((info) =>
      (<VerticalContainer style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} title={info.title} color={info.color} txt={info.txt} link={info.link}/>))}
    </div>
  )
}

function Calculator() {
  return(
    <div id="calc-container">
      <h2>Kuinka paljon säästäisit maalämmön avulla?</h2>
      <a id="btn" href="https://www.thermia.fi/maalampo/maalampo1/maalampo_saastot/">
        <h3>Ota selvää!</h3>
      </a>
    </div>
  )
}

function App() {
  return (
    <div id="main">
      <Header />
      <Video />
      <div id="facts">
        <h1>Mistä on kyse?</h1>
        <Bulletin />
      </div>
      <ContainerSet />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;