import './cards.css'
import comics from '../../../data/comics';

export default function Cards(){

    return(
        <ul className='row container-xs container-sm container-md container-lg container-xl mx-auto pt-5 bg'>
            {comics.map((comic) => {

                // logica per regolare gli spazi durante l'animazione hover
                let cardClass = '';
                
                if(comic.id > 6){
                    cardClass = 'card-cont-alt';
                } else {
                    cardClass = 'card-cont'
                }

                return <li className='col col-xs-12 col-sm-6 col-md-4 col-lg-2' key={comic.id}>
                    <div className={cardClass}>
                        <img src={comic.thumb} className='comicImg' alt={comic.title} />
                        <p className='mx-auto mt-2'>{comic.title}</p>
                    </div>
                </li>
            })}
        </ul>
    )
}