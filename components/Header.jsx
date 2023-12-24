import React from 'react';
import sg from "../assets/menu.png";

const Header = ({setMenuOpen,menuOpen}) => {
  return (
    <>
   <nav>
    <NavContent setMenuOpen={setMenuOpen} />
   </nav>
   <button className="navBtn" onClick={()=>setMenuOpen(!menuOpen)}>
        ++
    </button>
   </>
  );
};

export const HeaderP =({menuOpen,setMenuOpen})=>{
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneCome":""}`}>
            <NavContent  setMenuOpen={setMenuOpen}/>
        </div>
    )
}
 const NavContent=({setMenuOpen})=>(
    <>
    <h2>Ritik </h2>
    <div>
        <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
        <a onClick={() =>  setMenuOpen(false) } href="#work">Work</a>
        <a onClick={()=> setMenuOpen(false)} href="#timeline">Experience</a>
        
        <a  onClick={()=>setMenuOpen(false)} href="#services">Services</a>
        <a onClick={()=>setMenuOpen(false)} href='#testimonial'>Testimonial</a>
        <a onClick={()=>setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:lahariritik@gmail.com">
        <button>Email</button>
    </a>
    </>
)

export default Header
