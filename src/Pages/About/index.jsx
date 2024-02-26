import svg1 from '../../../public/img/1.png';
import svg2 from '../../../public/img/2.png';
import svg3 from '../../../public/img/3.png';
import svg4 from '../../../public/img/4.png';
import svg5 from '../../../public/img/5.png';
import svg6 from '../../../public/img/6.png';
import imgBtm from '../../../public/img/aboutImg.png';
import cls from '../../Styles/Pages/about.module.scss';

const About = () => {
  return (
    <div className={cls.about_color}>
      <div className={cls.about_container}>
        <div className={cls.about_content}>
          <div className={cls.about_title}>
            <p>К мероприятиям</p>
            <h1>Настоящая красота здесь!</h1>
          </div>

          <div className={cls.about_card}>
            <div className={cls.card}>
              <p>СВАДЬБА</p>
            </div>
            <div>
              <p>МУЖУ</p>
            </div>
            <div>
              <p>ЖЕНЕ</p>
            </div>
            <div>
              <p>ПАРТНЕРУ</p>
            </div>
            <div>
              <p>КОЛЛЕКЦИИ</p>
            </div>
            <div>
              <p>РЕДКОСТЬ</p>
            </div>
          </div>

          <div className={cls.about_content_img}>
            {/* =========== img 1 ========*/}
            <div className={cls.About_img1}>
              <h1>КОЛЬЦО</h1>
              <img src={svg1} alt="img" />
            </div>

            {/* =========== img 2 ========*/}
            <div className={cls.About_img1}>
              <h1>СЕРЬГИ</h1>
              <img src={svg2} alt="img" />
            </div>

            {/* ========== img 3 ======  */}
            <div className={cls.About_img1}>
              <h1>ПОДВЕСКИ</h1>
              <img src={svg3} alt="img" />
            </div>

            {/* =========== img 4 ======= */}
            <div className={cls.About_img1}>
              <h1>ЗАПОНКИ</h1>
              <img src={svg4} alt="img" />
            </div>

            {/* =========== img 5 ======= */}
            <div className={cls.About_img1}>
              <h1>БРАСЛЕТЫ</h1>
              <img src={svg5} alt="img" />
            </div>

            {/* =========== img 6 ======= */}
            <div className={cls.About_img1}>
              <h1>ЧАСЫ</h1>
              <img src={svg6} alt="img" />
            </div>
          </div>
        </div>

        <div className={cls.about_content_bottom}>
          <img className={cls.about_bootom_img} src={imgBtm} alt="img" />
          <div className={cls.about_bootom_title}>
            <p className={cls.about_t1}>Не знаете, что выбрать?</p>
            <h1>Посетите наши салоны в Москве</h1>
            <p className={cls.about_t2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
              tortor vitae pellentesque egestas quam pulvinar. Pellentesque
              porttitor velit sit pellentesque. Suspendisse donec pretium id
              dignissim. Dignissim ultrices eget orci viverra. Egestas quis et
              ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem
              purus nisi libero viverra ipsum.
            </p>
            <div className={cls.about_btn}>НАШИ САЛОНЫ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
