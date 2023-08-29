
import {Link} from 'react-router-dom'

export const Header = ()=>{

    return(
        <header>
            <h2>Header da página</h2>

            <Link to='/'>Home</Link><hr />
            <Link to='/sobre'>Sobre</Link><hr />
            <Link to='/contato'>Contato</Link>
        </header>
    )
}