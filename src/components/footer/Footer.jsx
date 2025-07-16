import './footer.css';
import Navigation from '../navigation/Navigation';
import Socials from '../socials/Socials';

export default function Footer (){
    return(
        <footer>
            <Navigation keyFirst='firstList.id' textFirst='firstList.text' keyShop='shopList.id' textShop='shopList.text' keySecond='secondList.id' textSecond='secondList.text' keyThird='thirdList.id' textThird='thirdList.text'/>

            <Socials path='socialMediaItems.path' alt='socialMediaItems.alt' />
        </footer>
    )
}