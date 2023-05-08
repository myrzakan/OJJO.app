
import { Link } from 'react-router-dom'

import cls from '../../Styles/Components/footer.module.scss'

import visa from '../../../public/img/Rectangle 13.png'
import master from '../../../public/img/Rectangle 14.png'

import youtube from '../../../public/img/youtube.png'
import vk from '../../../public/img/VK.png'
import facebook from '../../../public/img/Facebook.png'
import telegram from '../../../public/img/Telegram.png'
import E from '../../../public/img/E.png'

const bottomItem = [
    {
        name: '(c) 2020 OJJO jewelry',
        id: 1
    },
    {
        name: 'Договор публичной офферты',
        id: 2
    },
    {
        name: 'Контрагентам',
        id: 3
    },
    {
        name: 'Сделано Figma.info',
        id: 4
    }
]

const Footer = () => {
    return (
    <div className={cls.footer}>
      <div className={cls.top_footer}>
        <div className={cls.footer_links}> 
            <h3>Полезные ссылки</h3>
            <ul>
                <Link to='/'>Home</Link>

                <Link to='/about'>About</Link>

                <Link to='/collection'>Collection</Link>
            </ul>
        </div>
        <div>
            <h3>Оплата</h3>
            <ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit, similique doloribus adipisci</p>
            </ul>
            <div className={cls.footer_img}>
                <img src={visa} alt="svg" />
                <img src={master} alt="svg" />
            </div>
        </div>
        <div>
            <h3>Kонтакты</h3>
            <ul>
                <p>8 (812) 234-56-55</p>

                <p>8 (812) 234-56-55</p>

                <p>ojjo@ojjo.ru</p>
            </ul>
        </div>
        <div>
            <h3>Социальные сети</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>

            <div className={cls.footer_img2}>
                <img className={cls.Youtube} src={youtube} alt="svg" />
                <img className={cls.Vk} src={vk} alt="svg" />
                <img className={cls.Facebook} src={facebook} alt="svg" />
                <img className={cls.Telegram} src={telegram} alt="svg" />
                <img className={cls.E} src={E} alt="svg" />
            </div>
        </div>
      </div>
      <div className={cls.bottom_footer}>
        {
            bottomItem.map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        }
      </div>
    </div>
    )
}

export default Footer