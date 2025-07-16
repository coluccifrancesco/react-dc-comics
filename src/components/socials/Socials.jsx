import './socials.css';

const socialMediaItems = [
  {
    path: '../../../public/footer-facebook.png',
    alt: 'facebook'
  },
  {
    path: '../../../public/footer-twitter.png',
    alt: 'twitter'
  },
  {
    path: '../../../public/footer-youtube.png',
    alt: 'youtube'
  },
  {
    path: '../../../public/footer-pinterest.png',
    alt: 'pinterest'
  },
  {
    path: '../../../public/footer-periscope.png',
    alt: 'periscope'
  }
];

export default function Socials() {
    return(
        <div className='bg'>
            <div className='row container-sm container-md container-lg container-xl d-flex justify-content-between align-items-center py-4 mx-auto socials'>
                <div className='col col-3'>
                    <button className='sign'>SIGN-UP NOW!</button>
                </div>
                
                <div className='col-5 d-flex justify-content-between align-items-center gap-3'>
                    <h4>FOLLOW US</h4>

                    {socialMediaItems.map((props) => {

                        const {path, alt} = props;
                        console.log(props);

                        return <img src={path} alt={alt} />

                    })}
                </div>
            
            </div>
        </div>
    )
}