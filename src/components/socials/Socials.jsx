import './socials.css';

export default function Socials() {
    return(
        <div className='bg'>
            <div className='row container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center py-4 mx-auto socials'>
                <div className='col col-3'>
                    <button className='sign'>SIGN-UP NOW!</button>
                </div>
                
                <div className='col-5 d-flex justify-content-between align-items-center gap-3'>
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