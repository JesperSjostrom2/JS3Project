import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to="/"> <span>B</span>logify </Link> </h1>
            <div className="links">
                <Link to="/create"> Create blog  </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;