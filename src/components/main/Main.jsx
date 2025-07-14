import './main.css';
import Icons from '../icon_and_infos/Icons'

export default function Main(){
    return(
        <main>
            <div className='container-sm container-md container-lg container-xl d-flex flex-column justify-content-center align-items-center'>
                <h2>-- Content goes here --</h2>
            </div>
            <Icons />
        </main>
    )
}