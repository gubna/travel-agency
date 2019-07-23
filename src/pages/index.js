import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pools from "../images/Screenshot (81).png"
import ship from "../images/cruisship.png"
import holaAmigo from "../images/JoyOfTravel.png"
import vacation from "../images/JoyofVacations.jpg"
import facebook from '../img/social/facebook.svg'
import twitter from '../img/social/twitter.svg'


const IndexPage = () => (

    <main style={{textAlign:`center`, padding:`2em`}}>
    <SEO title="Home" />

    <h2 style={{color:`#00b6dd`, textAlign:`center`}}>Travel Agency with over 30 years experience providing expert travel advice to ensure your travel plans are just the right fit for your vacation!  Making people happy one vacation at a time!.</h2>

    <img src={vacation} alt="pictur" style={{maxWidth:`100%`,maxHeight:`265px`, textAlign:`center`, paddingRight:`5px`}} />
  
    <h2 style={{color:`#00b6dd`, fontSize:`1.2em`}} >We love our customers, so feel free to contact us anytime.</h2>

    <img src={pools} alt="whatev" /><br></br>

      <a title="facebook" href="https://www.facebook.com/pages/category/Travel-Agency/Joy-of-Vacations-175344059164081/">
      <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '3em', height: '3em'}}
                  /> </a>
                   <a title="twitter" href="https://twitter.com/JOYOFVACATIONS">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '3em', height: '3em'}}
                  />
                </a>
                <h3 style={{color:`#00b6dd`, fontSize:`1.5em` }}>joyce@joyofvacations.com</h3>
                <h3 style={{color:`#00b6dd`, fontSize:`1.5em` }}>781-496-3947</h3>
                </main>
)

export default IndexPage
