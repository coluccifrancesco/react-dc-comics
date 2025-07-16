import './main.css';
import Icons from '../icon_and_infos/Icons';
import Comics_grid from '../comics_grid/Comics_grid';

export default function Main(){
    return(
        <main>
            <Comics_grid />
            
            <Icons />
        </main>
    )
}