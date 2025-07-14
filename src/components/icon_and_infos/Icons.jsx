export default function Icons(){

    const infoItems = [
        {imgSrc:'../../../public/buy-comics-digital-comics.png', text:'DIGITAL COMICS', href:'#'},
        {imgSrc:'../../../public/buy-comics-merchandise.png', text:'DC MERCHANDISE', href:'#'},
        {imgSrc:'../../../public/buy-comics-subscriptions.png', text:'SUBSCRIPTION', href:'#'},
        {imgSrc:'../../../public/buy-comics-shop-locator.png', text:'COMIC SHOP LOCATOR', href:'#'},
        {imgSrc:'../../../public/buy-dc-power-visa.svg', text:'DC POWER VISA', href:'#'}
    ];

    const columns = [];

    infoItems.forEach((item)=>{
        columns.push(
            <div className="col m-4 d-flex justify-content-between align-items-center" key={item.text}>
                <img src={item.imgSrc} alt={item.text} />
                <a href={item.href}>{item.text}</a>
            </div>
        );
    });


    return(
        <div className='infos d-flex flex-column justify-content-between align-items-center pt-4 pb-4'>
            <div className="row">
                {columns}
            </div>
        </div>
    )
}