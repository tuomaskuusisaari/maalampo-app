import React from 'react';
import { Link } from "react-router-dom"
import './koti.css'

function Header(props) {

    const linkList = props.list
    const campaignName = props.title
    const campaignLogo = props.logo
    const id = props.id

    return(
      <div id="header">
        <div id="logo-container">
          <img id={id} src={campaignLogo} alt={id}></img>
          <h1>{campaignName}</h1>
        </div>
        {linkList.map((link) =>
        (<Link to={"/" + link.name} key={link.name}>{link.name || link.text}</Link>))}
      </div>
    )
  }
  
  function Video(props) {

    const source = props.src

    return(
      <div id="video-container">
        <video id="video" preload="auto" controls>
          <source src={source} type="video/mp4"></source>
        </video>
      </div>
    )
  }
  
  function Footer(props) {

    const footerLogo = props.logo
    const text = props.id

    return(
      <footer id="footer">
        <img id={text} src={footerLogo} alt={text}></img>
      </footer>
    )
  }
  
  
  function VerticalContainer(props) {
  
    const color = props.color
    const txt = props.txt
    const title = props.title
    const link = props.link
  
  
    return(
      <div id="cont" style={{backgroundColor: color,
                   width: "30%" ,
                   height: "2 * width",
                   display: "flex",
                   flexDirection: "column",
                   boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
  
      }}>
        <h1 style={{padding: "10px"}}>{title}</h1>
        {txt}
        {link}
      </div>
    )
  }
  
  function ContainerSet(props) {

    const contentList = props.list

    return(
      <div id="verticals">
        {contentList.map((info) =>
        (<VerticalContainer style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}} title={info.title} color={info.color} txt={info.txt} link={info.link} key={info.title}/>))}
      </div>
    )
  }
  
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
    Calculator
}