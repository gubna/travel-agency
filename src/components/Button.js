import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
                 <button type="button"  style={{
            textAlign:`center`,
            padding: `12px`,
            backgroundColor: `#b6c4cd`,
            borderRadius: `15px`,
            margin: `0`,
          }}
        >✉      <a href="not available" style={{fontSize:`1.2em`}}>joyce@joyofvacationscom</a>
        </button> 
            </div>
        )
    }
}

export default Button
