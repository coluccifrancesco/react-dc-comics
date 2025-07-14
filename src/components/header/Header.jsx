import './header.css';
import logo from '../../../public/dc-logo.png';

export default function Header (){
    return(
        <header>
            <nav className='container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center'>
                <img src={logo} alt='logo' className='mt-4 mb-4' />
                
                <ul className='d-flex justify-content-between align-items-center mb-0 '>
                    <li>
                        <a>Charachters</a>
                    </li>
                    <li>
                        <a>Comics</a>
                    </li>
                    <li>
                        <a>Movies</a>
                    </li>
                    <li>
                        <a>TV</a>
                    </li>
                    <li>
                        <a>Games</a>
                    </li>
                    <li>
                        <a>Collectibles</a>
                    </li>
                    <li>
                        <a>Videos</a>
                    </li>
                    <li>
                        <a>News</a>
                    </li>
                    <li>
                        <a>Shop</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}