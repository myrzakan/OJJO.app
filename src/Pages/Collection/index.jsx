import cls from '../../Styles/Pages/collection.module.scss';

import svg1 from '../../../public/img/Polygon 1.png';
import svg from '../../../public/img/Polygon 2.png';
import img2 from '../../../public/img/Rectangle 5(1).png';
import img3 from '../../../public/img/Rectangle 5(2).png';
import img1 from '../../../public/img/Rectangle 5.png';
import imgBtm from '../../../public/img/aboutImg.png';

const Collection = () => {
  return (
    <div className={cls.coll_color}>
      <div className={cls.collection_container}>
        <div className={cls.collection_content}>
          {/* ======= collection title ====== */}
          <div className={cls.collection_title}>
            <p>Полезные статьи</p>
            <h1>Лучшие советы по подбору дорогих подарков</h1>
          </div>
          {/* ============== img ================== */}
          <div className={cls.collection_content_img}>
            {/* ====== collection img 1 ===== */}
            <div className={cls.collection_img}>
              <p className={cls.coll_title1}>
                Как выбрать часы для своей будущей жены
              </p>

              <img src={img1} alt="img" />
            </div>

            {/* ====== collection img 2 ===== */}
            <div className={cls.collection_img}>
              <p className={cls.coll_title2}>
                Запонки для мужа: 7 ключевых правил покупки аксессуара
              </p>

              <img src={img2} alt="img" />
            </div>

            {/* ====== collection img 3 ===== */}
            <div className={cls.collection_img}>
              <p className={cls.coll_title3}>
                Как выбрать обручальные кольца молодоженам
              </p>

              <img src={img3} alt="img" />
            </div>
          </div>

          <div className={cls.collection_content_btn}>
            <h1>ЧИТАТЬ НАШ БЛОГ</h1>
          </div>

          <div className={cls.collection_content_bottom}>
            <img className={cls.collection_bottom_img} src={imgBtm} alt="img" />

            <div className={cls.collection_bottom_title}>
              <p>Полезные советы и персональный предложения</p>
              <h1>Эксклюзивная рассылка</h1>
            </div>

            <div className={cls.collection_bottom_title2}>
              <ul>
                <li>Личный менеджер</li>
                <img className={cls.svg1} src={svg} alt="svg" />
                <img className={cls.svg2} src={svg1} alt="svg" />

                <li>Доставка и оформление</li>
                <img className={cls.svg1} src={svg} alt="svg" />
                <img className={cls.svg2} src={svg1} alt="svg" />

                <li>Индивидуальный дизайн</li>
                <img className={cls.svg1} src={svg} alt="svg" />
                <img className={cls.svg2} src={svg1} alt="svg" />
              </ul>
            </div>

            <div className={cls.collection_bottom_btn}>
              <div className={cls.bottom_btn_content}>
                <div className={cls.bottom_input}>
                  <p>ВАШ E-MAIL</p>
                </div>
                <div className={cls.bottom_btn}>
                  <p>отправить</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> // end coll_color
  );
};

export default Collection;
