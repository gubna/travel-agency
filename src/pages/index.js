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
  <Layout>
    
    <SEO title="Home" />
   
    <div style={{ maxWidth: `900px` }}>
    <img src={holaAmigo} alt="pic" /></div>

    <p style={{color:`#00b6dd`, fontSize:`1.5em` }}>Travel Agency with over 30 years experience providing expert travel advice to ensure your travel plans are just the right fit for your vacation!  Making people happy one vacation at a time!.</p>
    <div style={{display:`flex`, justifyContent:`right`}}>
    <img src={pools} alt="pict" />
    <img src={ship} alt="pictu" />
    </div>
    
    <div style={{maxWidth:`750px`,maxHeight:`325px`, display:`flex`, justifyContent:`right`}}>
    <img src={vacation} alt="pictur" />
      
      <div style={{color:`#00b6dd`, fontSize:`1.2em`, paddingLeft:`120px`}}>
    <p>We love our customers, so feel free to contact us anytime.</p>

    <p style={{paddingLeft:`70px`}}>781-496-3947</p>

<div style={{paddingLeft:`55px`}}>
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
                </div>
                </div>
                </div>
    
  </Layout>
)

export default IndexPage
