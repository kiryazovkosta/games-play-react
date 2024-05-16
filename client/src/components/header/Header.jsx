import { Link } from 'react-router-dom';

import { Paths } from '../../utils/Paths';

const Header = () => {
    return (
        <header>
            <h1><Link className="home" to={Paths.root}>GamesPlay</Link></h1>
            <nav>
                <Link to={Paths.games}>All games</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to={Paths.gameCreate}>Create Game</Link>
                    <Link to={Paths.logout}>Logout</Link>
                </div>

                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to={Paths.login}>Login</Link>
                    <Link to={Paths.register}>Register</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;