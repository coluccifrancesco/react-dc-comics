import './header.css';
import logo from '../../../public/dc-logo.png';

export default function Header (){
    return(
        <header>
            <nav className='container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center'>
                <img src={logo} alt='logo' className='mt-4 mb-4' />
                
                <ul className='d-flex justify-content-between align-items-center mb-0 list'>
                    <li>
                        <a className='navItem' href='#'>Charachters</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>Comics</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>Movies</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>TV</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>Games</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>Collectibles</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>Videos</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>News</a>
                    </li>
                    <li>
                        <a className='navItem' href='#'>Shop</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}