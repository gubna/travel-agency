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
            
            
            <button type="button"><Container>✉      <a href="mailto:joyce@joyofvacations.com?subject=JOY%20OF%20VACATIONS" >joyce@joyofvacations.com</a>
           </Container>
        </button> 
            
            
        )
    }
}

export default Button

