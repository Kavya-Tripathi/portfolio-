import React from 'react'
import img from '../assets/foo.png'

export default function About() {
  return (
    <div>
        <h1>About Me</h1>
        <div style = {{width: '50%', margin: 'auto', textAlign: 'center ', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src = {img} alt = 'about' style = {{width: '100%', height: '400px'}}/> 

        </div>
        <div style = {{width: '50%', margin: 'auto', textAlign: 'center ', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p> bsdhycwsfuhnsdufiehdsjknitvo9mihdo8eydff8deyauw7a8f7fef8o8ueomfof e7foy88oyoefoejjfoewoo usidhdsu bhfeuyhsbewbs bsehshyvcefsusia </p>
        </div>
    </div>
  )
}
