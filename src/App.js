import React, { useImperativeHandle, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import './App.css';


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

function App() {
  return (
    <div id="main">
      <Header />
      <Video />
      <div id="facts">
        <Bulletin />
      </div>
    </div>
  );
}

export default App;