import { Link } from 'react-router-dom';

/**
  This file lets the user know if they have typed in the wrong adress.
 */

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;