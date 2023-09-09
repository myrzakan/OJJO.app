

import cls from'../../Styles/Pages/home.module.scss'
import svg from '../../../public/img/Rectangle 2.png'

import img1 from '../../../public/img/img--hover.png'
import img2 from '../../../public/img/gallery__image.png'
import img3 from '../../../public/img/gallery__image(1).png'
import img4 from '../../../public/img/gallery__image(2).png'
import img5 from '../../../public/img/gallery__image(3).png'
import img6 from '../../../public/img/Rectangle 8.png'


const Home = () => {
    return (
        <div className={cls.home_container}>
            <div className={cls.content_home_page}>
                <h1>Долго, дорого, богато!</h1>
                <button className={cls.content_home_btn}>каталог изделий</button>
            </div>
            <div className={cls.bottom_home}></div>
            <div className={cls.bottom_home_logo}>
                <ul>
                    <li><img src={svg} alt="logo" /></li>
                    <li><img src={svg} alt="logo" /></li>
                    <li><img src={svg} alt="logo" /></li>
                    <li><img src={svg} alt="logo" /></li>
                    <li><img src={svg} alt="logo" /></li>
                    <img className={cls.img} src={svg} alt="logo" />
                </ul>
            </div>

            <div className={cls.home_title}>
                <p>#ojjo_jewerly</p>
                <h1>Наши коллекции</h1>

            </div>

            <div className={cls.home_img}>
                <img className={cls.img1} src={img1} alt="img" />
                <img className={cls.img2} src={img2} alt="img" />
                <img className={cls.img3} src={img3} alt="img" />
                <img className={cls.img4} src={img4} alt="img" />
                <img className={cls.img5} src={img5} alt="img" />
                <img className={cls.img6} src={img6} alt="img" />
            </div>
        </div>
    )
}

export default Home