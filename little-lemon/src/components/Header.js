import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <img src="Logo.svg" alt="Little Lemon Logo" />
            <nav>
                <ul>
                    <li><Link class="nav-item" to="/">Home</Link></li>
                    <li><Link class="nav-item" to="/chicago">About</Link></li>
                    <li><Link class="nav-item" to="/menu">Menu</Link></li>
                    <li><Link class="nav-item" to="/booking">Reservations</Link></li>
                    <li><Link class="nav-item" to="/orderonline">Order Online</Link></li>
                    <li><Link class="nav-item" to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;