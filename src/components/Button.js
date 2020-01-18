import React, { Component } from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
font-size:1em;
padding: 9px;
background-color: #b6c4cd;
  `
export class Button extends Component {
    render() {
        return (
            <div>
                 <button type="button"  style={{
            textAlign:`center`,
            padding: `12px`,
            backgroundColor: `#afc3ce`,
            borderRadius: `15px`,
            margin: `0`,
          }}
        >✉      <a href="mailto:joyce@joyofvacations.com? subject=subject text" style={{fontSize:`1.2em`}}>joyce@joyofvacations.com</a>
            
            
        )
    }
}

export default Button

