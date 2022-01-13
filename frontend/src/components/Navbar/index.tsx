import {ReactComponent as GithubIcon} from "assets/img/github.svg";
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/medidrones" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/medicode</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
