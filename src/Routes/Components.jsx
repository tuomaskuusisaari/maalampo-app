import React from 'react';
import { Link } from "react-router-dom"
import './koti.css'
import { LikeButton } from "./Like/LikeButton.js"

//Customizable header, uses list of links to map the navigation system with routing.
//You can also choose the page title, page logo, and id for styling the logo
function Header(props) {

    const linkList = props.list
    const campaignName = props.title
    const campaignLogo = props.logo
    const id = props.id
    const options =linkList.map((link) =>
    (<Link to={"/" + link.name} key={link.name}><img id="link-img" src={link.pic} alt={link.name || link.txt}/><div id="link-text">{link.name || link.text}</div></Link>))

    return(
      <div id="header">
        <div id="logo-container">
          <img id={id} src={campaignLogo} alt={id} />
          <h1>{campaignName}</h1>
        </div>
        {options}
      </div>
    )
  }


  //Customizable component where there is a text box on the left and a image on the right.
  //You can choose your own image, text title, text, and text box color.
  function SideBySide(props) {

    const img = props.img
    const title = props.title
    const txt = props.txt
    const color = props.color

    return(
      <div id="upper">
        <div style={{backgroundColor: color}}>
          <h1>{title}</h1>
          {txt.map((chapter) => (<p key={title}>{chapter}</p>))}
        </div>
        <img src={img} alt={title}/>
      </div>
    )
  }
  
  //Custom component for video player, you can choose your own video and tumbnail.
  function Video(props) {

    const source = props.src
    const poster = props.poster

    return(
      <div id="video-container">
        <video id="video" preload="auto" controls poster={poster}>
          <source src={source} type="video/mp4"></source>
        </video>
      </div>
    )
  }
  

  //Custom footer component. You can choose two of your own images with links
  //and also the id for the images.
  function Footer(props) {

    const footerLogo = props.logo
    const text = props.id
    const href = props.link
    const href2 = props.link2
    const mediaLogo = props.social

    return(
      <footer id="footer">
        <a href={href2}><img id={text} src={mediaLogo} alt="social-media" /></a>
        <a href={href}><img id={text} src={footerLogo} alt={text} /></a>
        <LikeButton/>
      </footer>
    )
  }
  
  
  //Content box that is larger in vertical than in horizontal, you can choose your own
  //background color, content, title and links.
  function VerticalContainer(props) {
  
    const color = props.color
    const txt = props.txt
    const title = props.title
    const link = props.link
  
  
    return(
      <div id="cont" style={{backgroundColor: color}}>
        <h1>{title}</h1>
        {txt}
        {link}
      </div>
    )
  }
  

  //Combining 3 Vertical container together to form a content module.
  function ContainerSet(props) {

    const contentList = props.list

    return(
      <div id="verticals">
        {contentList.map((info) =>
        (<VerticalContainer style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} title={info.title} color={info.color} txt={info.txt} link={info.link} key={info.title}/>))}
      </div>
    )
  }
  
  //Custom content box with button, you can choose your own title, button text and link.
  //At the moment used only by MainPage.
  function Calculator(props) {

    const topText = props.top
    const bottomtext = props.bottom
    const link = props.link

    return(
      <div id="calc-container">
        <h2>{topText}</h2>
        <a id="btn" href={link}>
          <h3>{bottomtext}</h3>
        </a>
      </div>
    )
  }

export {
    Header,
    Video,
    Footer,
    ContainerSet,
    Calculator,
    SideBySide
}