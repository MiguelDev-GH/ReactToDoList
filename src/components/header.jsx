import {Github} from 'lucide-react'

function Header(){

    return(
        <div className="Header">
            <h3 className='titulo'>App ToDo</h3>
            <a href='https://github.com/MiguelDev-GH/ReactToDoList' target='_blank'><Github size={20} />Github</a>
        </div>
    )

}

export default Header