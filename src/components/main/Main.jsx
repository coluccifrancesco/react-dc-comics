import './main.css';
import Icons from '../icon_and_infos/Icons';
import Comics_grid from '../comics_grid/Comics_grid';

export default function Main(){
    return(
        <main>
            <Comics_grid />
            
            <Icons img='${infoItems.imgSrc}' altP='{infoItems.alt}' text='{infoItems.text}' link='{infoItems.href}' key='{infoItems.key}'/>
        </main>
    )
}