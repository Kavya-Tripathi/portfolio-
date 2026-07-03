import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div >
        <ul style={{display:'flex',justifyContent:'space-around',listStyle:'none',backgroundColor:'black',color:'white',cursor:'pointer',height:'50px',alignItems:'center',color:'white'}}>
            <Link to ='/'style = {{textDecoration:'none'}}>
            <li style = {{color:'white'}}>Details</li></Link >
            <Link to ='/certification'>
            <li style = {{color:'white'}}>Certification</li></Link >
            <Link to ='/education'>
            <li style = {{color:'white'}}>Education</li></Link >
            <Link to ='/project'>
            <li style = {{color:'white'}}>Project</li></Link >
        </ul>
        </div>
  );
}

export default Header