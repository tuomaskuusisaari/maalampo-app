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
      lines={2}
      more="Lue lisää"
      less="Näytä vähemmän"
      anchorClass=""
      expanded={false}
    >
      <div class="chapter">Energiapäätökset ovat vaikeita - miten voit tietää, onko käyttämäsi energia taloudellista, ympäristöystävällistä ja huoletonta? 
      Maalämpö on. Mikset tekisi investointia sekä kiinteistösi että maapallon tulevaisuuteen, ja vaihtaisi maalämpöön?</div>

      <div class="chapter"> Miten maalämpö sitten toimii? Maahan porataan tavallisesti noin 100 - 200 metriä syvä reikä, johon upotetaan putki,
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

const containerList = [
  {
    color: "#96FFD3",
    img: "",
    vid: "https://www.youtube.com/watch?v=alb0HQVpc4o",
    txt: "Tässä on haastis."
  },
  {
    color:"#FFB494",
    img: "https://www.scanoffice.fi/wp-content/uploads/sites/11/2019/07/Mitsubishi_Electric_Geodan_maalampopumppu_550x550.jpg",
    vid: "",
    txt: "Tässä nähdään maalämpöpumppu."
  },
  {
    color: "#96FFD3",
    img: "",
    vid: "",
    txt: "Tähän laitetaan linkkejä."
  }
]

function VerticalContainer(props) {

  const color = props.color
  const txt = props.txt

  /* ei toimi
  const img = props.img
  const vid = props.vid
  const giveVis = () => {
    if (img !== "") {
      return((<img style={{width: "100%", height: "width"}} src={img}></img>))
    } else if (vid !== "") {
      return((<video preload="auto" controls>
        <source style={{width: "100%", height: "width", border: "none", outline: "none",}} src={vid}></source>
      </video>))
    }
  } */

  return(
    <div style={{backgroundColor: color,
                 width: "30%" ,
                 height: "2 * width",
                 display: "flex",
                 flexDirection: "column",
                 boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"

    }}>
      {/*giveVis*/} 
      <p style={{fontSize: "16px", padding: "10px"}}>{txt}</p>
    </div>
  )
}

function ContainerSet() {
  return(
    <div id="verticals">
      {containerList.map((info) =>
      (<VerticalContainer style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} color={info.color} img={info.color} vid={info.vid} txt={info.txt}/>))}
    </div>
  )
}

function App() {
  return (
    <div id="main">
      <Header />
      <Video />
      <div id="facts">
        <Bulletin />
      </div>
      <ContainerSet />
      <Footer />
    </div>
  );
}

export default App;