import './comics_grid.css';
import Cards from '../cards/Cards';
const bgImg = '../../../public/jumbotron.jpg';

export default function Comics_grid() {
    return(
        <section>

            {/* immagine con position absolute */}
            <img src={bgImg} className='jumbotron' />

            {/* testo con position absolute 
            dentro container con proprietà e relative */}
            <div className='currentSeries container d-flex justify-content-start align-items-center'>
                <h5>CURRENT SERIES</h5>
            </div>

            {/* griglia row col comics backgground color bg-primary 
            e margine  */}
            <Cards />

            {/* bottone */}
            <div className='loadDiv d-flex justify-content-center align-items-center'>
                <button className='load'>LOAD MORE</button>
            </div>
        </section>
    )
}