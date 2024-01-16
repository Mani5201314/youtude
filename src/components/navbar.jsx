import "../styles/navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
   
    return ( 
        <div className="navbar">
            <div className="logo">
            <Link to="/"><div><img width="120%" src="/images/youtubelogo.png" alt="" /></div></Link>
            </div>
            <div className="search">
                <input type="search"placeholder="Search                                                                          &#128269;"  />
            </div>

            <div className="options">
            <Link to="/addvideo" style={{padding:10}}>Add video</Link>
            <button style={{padding:10}}>  &#128100;   sign in</button>
            </div>
            
        </div>
     );
}
 
export default Navbar;