import './header.css';
import logo from '../../../public/dc-logo.png';

const navItems = [
  {
    className: 'navItem',
    href: '#',
    text: 'Charachters'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'Comics'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'Movies'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'TV'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'Games'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'Collectibles'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'Videos'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'News'
  },
  {
    className: 'navItem',
    href: '#',
    text: 'Shop'
  }
];

export default function Header (){
    return(
        <header>
            <nav className='container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center'>
                <img src={logo} alt='logo' className='mt-4 mb-4' />

                <ul className='d-flex justify-content-between align-items-center mb-0 list'>
                
                    {navItems.map((props) => {
                        const {className, href, text} = props;
                        console.log(props);
                        
                        return <li>
                            <a className={className} href={href}>{text}</a>
                        </li>
                    })}
                    
                </ul>
            </nav>
        </header>
    )
}