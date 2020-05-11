import React from 'react'
import Board from './Board.jsx'
import "./card-game.css"

const backImg = 'https://lh3.googleusercontent.com/proxy/7is0rIwQkChHCz0_-jtVnXKs6sMVnP9aL2GRFN0GRmsxVx3VBvNcFbZhLWEO_-ulGtvQCYdDxWbab-uctxZ6jq928s3Gp7j1ayacM66-JxL9ULsQrKbHNUFAuGwrMZYFGrc6StVDzK1UvoE-TElX1dqf168_F8dQQucYwaGr'

const mitshu = 'https://www.scanoffice.fi/wp-content/uploads/sites/11/2019/07/Mitsubishi_Electric_Geodan_maalampopumppu_550x550.jpg'
const oilon = 'https://torujyri.ee/2312-large_default/maalaempoepumppu-oilon-cube-house-8.jpg'
const nibe = 'https://www.taloon.com/media/catalog/product/cache/056e733493a29ef4973f43ee938d9796/n/i/nibe-maalampopumppu-f-1245-5.jpg'
const bosch = 'https://www.kslampo.fi/sites/default/files/bosch_5000.jpg'
const jämä = 'https://public.keskofiles.com/f/k-rauta/products/6438313087670?auto=format&w=467&h=619&fit=fill&bg=FFFFFF&q=70'
const gebwell = 'https://www.talotarvike.com/images/big/gebwell_5361941.jpg'
const geolia = 'https://cdn.finqu.com/users/13314/images/product/3955075-e32f6804_480_480.jpg'
const ctc = 'https://ekolammox.fi/wp-content/uploads/2018/01/CTC-Ecoheat-400-maalampopumppu.jpg'

function CardGame() {
  const cards = buildCards()
  return (
    <div className="Game">
      <Board cards={cards} />
    </div>
  )
}

export default CardGame

function buildCards() {
  let id = 0
  const images = {mitshu, oilon, nibe, bosch, jämä, gebwell, geolia, ctc}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
