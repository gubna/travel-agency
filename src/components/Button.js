import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
                 <button type="button"  style={{
            textAlign:`center`,
            padding:`15px`,
            backgroundColor: `#b6c4cd`,
            borderRadius: `15px`,
          }}
        >><a href="mailto:joyce@joyofvacations.com? subject=subject text" style={{fontSize:`1.7em`, display:`flex`, justifyContent:`center`}}>joyce@joyofvacations.com</a>
    </button> 
            </div>
        )
    }
}

export default Button