const infoItems = [
    {imgSrc:'../../../public/buy-comics-digital-comics.png', alt:'DIGITAL COMICS', text:'DIGITAL COMICS', href:'#', key:1},
    {imgSrc:'../../../public/buy-comics-merchandise.png', alt:'DC MERCHANDISE', text:'DC MERCHANDISE', href:'#', key:2},
    {imgSrc:'../../../public/buy-comics-subscriptions.png', alt:'SUBSCRIPTION', text:'SUBSCRIPTION', href:'#', key:3},
    {imgSrc:'../../../public/buy-comics-shop-locator.png', alt:'COMIC SHOP LOCATOR', text:'COMIC SHOP LOCATOR', href:'#', key:4},
    {imgSrc:'../../../public/buy-dc-power-visa.svg', alt:'DC POWER VISA', text:'DC POWER VISA', href:'#', key:5}
];

export default function Icons(){

    return(
        <div className='infos d-flex flex-column justify-content-between align-items-center pt-4 pb-4'>
            <div className="row">
                
                {infoItems.map((item) => {
                    return <div className="col" key={item.key}>
                        <img src={item.imgSrc} alt={item.alt} />
                        <a href={item.href}>{item.text}</a>
                    </div>
                })}
            
            </div>
        </div>
    )
}