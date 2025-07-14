import './header.css';
import logo from '../../../public/dc-logo.png';

export default function Header (){
    return(
        <header>
            <div>
                <img src={logo} alt='logo' />
                <ul>
                    <a>Charachters</a>
                    <a>Comics</a>
                    <a>Movies</a>
                    <a>TV</a>
                    <a>Games</a>
                    <a>Collectibles</a>
                    <a>Videos</a>
                    <a>Fans</a>
                    <a>News</a>
                    <a>Shop</a>
                </ul>
            </div>
        </header>
    )
}