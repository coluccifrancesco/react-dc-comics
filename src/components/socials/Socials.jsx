import './socials.css';

export default function Socials() {
    return(
        <div className='bg'>
            <div className='container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center pt-4 pb-4 social'>
                <button className='sign'>SIGN-UP NOW!</button>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>FOLLOW US</h4>
                    <img src='../../../public/footer-facebook.png' alt='facebook' />
                    <img src='../../../public/footer-twitter.png' alt='twitter' />
                    <img src='../../../public/footer-youtube.png' alt='youtube' />  
                    <img src='../../../public/footer-pinterest.png' alt='pinterest' />
                    <img src='../../../public/footer-periscope.png' alt='periscope' />
                </div>
            </div>
        </div>
    )
}