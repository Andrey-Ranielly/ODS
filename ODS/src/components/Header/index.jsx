import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Andrey Ranielly</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/ODS">ODS</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header