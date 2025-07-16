import './navigation.css';

const firstList = [
    { id: 1.1, text: "DC COMICS" },
    { id: 1.2, text: "Characters" },
    { id: 1.3, text: "Comics" },
    { id: 1.4, text: "Movies" },
    { id: 1.5, text: "TV" },
    { id: 1.6, text: "Games" },
    { id: 1.7, text: "Videos" },
    { id: 1.8, text: "News" },
];

const shopList = [
    { id: 2.1, text: "Shop DC" },
    { id: 2.2, text: "Shop DC Collectibles" }
]

const secondList = [
    { id: 3.1, text: "DC" },
    { id: 3.2, text: "Terms of Use" },
    { id: 3.3, text: "Privacy policy (New)" },
    { id: 3.4, text: "Ad Choices" },
    { id: 3.5, text: "Advertising" },
    { id: 3.6, text: "Jobs" },
    { id: 3.7, text: "Subscriptions" },
    { id: 3.8, text: "Talent Workshops" },
    { id: 3.9, text: "CPSC Certificates" },
    { id: 3.10, text: "Ratings" },
    { id: 3.11, text: "Shop Help" },
    { id: 3.12, text: "Contact Us" }
];

const thirdList = [
    { id: 4.1, text: "SITES" },
    { id: 4.2, text: "DC" },
    { id: 4.3, text: "MAD Magazine" },
    { id: 4.4, text: "DC Kids" },
    { id: 4.5, text: "DC Universe" },
    { id: 4.6, text: "DC Power Visa" }
];

export default function Navigation() {
    return(
        <div className='links'>
            <div className='row container-sm container-md container-lg container-xl pt-4 pb-4 mt-0 mb-0 ms-auto me-auto'>
                <div className='col-6 row  d-flex justify-content-between'>
                        <ul className='col col-4 list'>

                            <li key={1.0}>
                                <h4>DC COMICS</h4>
                            </li>

                            {firstList.map((props) => {

                                const {key, text} = props;
                                console.log(props);
                                
                                return <li key={key}>
                                    <a>{text}</a>
                                </li>

                            })}

                            <li key={2.0}>
                                <h4>SHOP</h4>
                            </li>

                            {shopList.map((props) => {

                                const {key, text} = props;
                                console.log(props);
                                
                                return <li key={key}>
                                    <a>{text}</a>
                                </li>

                            })}

                        </ul>
                        
                        <ul className='col col-4 list'>
                            <li key={3.0}>
                                <h4>DC</h4>
                            </li>
                            
                            {secondList.map((props) => {

                                const {key, text} = props;
                                console.log(props);
                                
                                return <li key={key}>
                                    <a>{text}</a>
                                </li>

                            })}
                        </ul>
                        
                        <ul className='col col-4 list'>
                            <li key={4.0}>
                                <h4>SITES</h4>
                            </li>

                            {thirdList.map((props) => {

                                const {key, text} = props;
                                console.log(props);
                                
                                return <li key={key}>
                                    <a>{text}</a>
                                </li>

                            })}
                        </ul>
                </div>
                    
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <img src='../../../public/dc-logo-bg.png' className='logo' />
                </div>
            </div>
        </div>
    )
}