import './navigation.css';

export default function Navigation() {
    return(
        <div className='links'>
            <div className='row container-sm container-md container-lg container-xl pt-4 pb-4 mt-0 mb-0 ms-auto me-auto'>
                <div className='col-6 row  d-flex justify-content-between'>
                        <ul className='col col-4 list'>
                            <li>
                                <h4>DC COMICS</h4>
                            </li>
                            <li>
                                <a>Characters</a>
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
                                <a>Videos</a>
                            </li>
                            <li>
                                <a>News</a>
                            </li>
                            <li>
                                <h4>SHOP</h4>
                            </li>
                            <li>
                                <a>Shop DC</a>
                            </li>
                            <li>
                                <a>Shop DC Collectibles</a>
                            </li>
                        </ul>
                        <ul className='col col-4 list'>
                            <li>
                                <h4>DC</h4>
                            </li>
                            <li>
                                <a>Terms of Use</a>
                            </li>
                            <li>
                                <a>Privacy policy (New)</a>
                            </li>
                            <li>
                                <a>Ad Choices</a>
                            </li>
                            <li>
                                <a>Advertising</a>
                            </li>
                            <li>
                                <a>Jobs</a>
                            </li>
                            <li>
                                <a>Subscriptions</a>
                            </li>
                            <li>
                                <a>Talent Workshops</a>
                            </li>
                            <li>
                                <a>CPSC Certificates</a>
                            </li>
                            <li>
                                <a>Ratings</a>
                            </li>
                            <li>
                                <a>Shop Help</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                        <ul className='col col-4 list'>
                            <li>
                                <h4>SITES</h4>
                            </li>
                            <li>
                                <a>DC</a>
                            </li>
                            <li>
                                <a>MAD Magazine</a>
                            </li>
                            <li>
                                <a>DC Kids</a>
                            </li>
                            <li>
                                <a>DC Universe</a>
                            </li>
                            <li>
                                <a>DC Power Visa</a>
                            </li>
                        </ul>
                </div>
                    
                {<div className='col-6 d-flex justify-content-center align-items-center'>
                    <img src='../../../public/dc-logo-bg.png' className='logo' />
                </div>}
            </div>
        </div>
    )
}