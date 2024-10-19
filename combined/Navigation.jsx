import { Link, Outlet } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div id='main'>
            <div className='navbar'>
                <Link to={'/componentAssignment/'}><h1>Component Assignment</h1></Link>
                <Link to={'/openDataAssignment/'}><h1>Open Data Assignment</h1></Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Navigation;