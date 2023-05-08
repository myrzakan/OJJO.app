
import { Link } from 'react-router-dom'
import cls from '../../Styles/Components/header.module.scss'
import svg from '../../../public/img/OJJO.png'
import v1 from '../../../public/img/V.png'
import v2 from '../../../public/img/V(1).png'


const HeaderItem = [
    {
        name: 'Collection',
        id: 0,
        route: '/collection'
    },
    {
        name: 'About',
        id: 1,
        route: '/about'
    },
]

function Header () {
    return (
        <header className={cls.header}>
            <Link to='/'>Home</Link>
            <div className={cls.svg}>
                <img src={svg} alt="logo" />
                <img className={cls.v1} src={v1} alt="logo" />
                <img className={cls.v2} src={v2} alt="logo" />
            </div>
            <ul>
                {
                    HeaderItem.map((item) => (
                        <Link to={item.route} key={item.id}>{item.name}</Link>
                    ))
                }
            </ul>
        </header>
    )
}


export default Header
