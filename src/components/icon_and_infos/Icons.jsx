import './icons.css';

const infoItems = [
    {imgSrc:'../../../public/buy-comics-digital-comics.png', alt:'DIGITAL COMICS', text:'DIGITAL COMICS', href:'#', key:1},
    {imgSrc:'../../../public/buy-comics-merchandise.png', alt:'DC MERCHANDISE', text:'DC MERCHANDISE', href:'#', key:2},
    {imgSrc:'../../../public/buy-comics-subscriptions.png', alt:'SUBSCRIPTION', text:'SUBSCRIPTION', href:'#', key:3},
    {imgSrc:'../../../public/buy-comics-shop-locator.png', alt:'COMIC SHOP LOCATOR', text:'COMIC SHOP LOCATOR', href:'#', key:4},
    {imgSrc:'../../../public/buy-dc-power-visa.svg', alt:'DC POWER VISA', text:'DC POWER VISA', href:'#', key:5}
];

export default function Icons(){

    return(
        <div className='infos py-5'>
            <div className="row mx-auto container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center">
                
                {infoItems.map((item) => {
                    return <div className="col d-flex justify-content-center align-items-center gap-2" key={item.key}>
                        <img src={item.imgSrc} alt={item.alt} />
                        <a href={item.href}>{item.text}</a>
                    </div>
                })}
            
            </div>
        </div>
    )
}