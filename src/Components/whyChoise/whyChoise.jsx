import "./whyChoise.css";
import whyChoiseImg1 from "../../Assets/Images/whyChoiseImg1.svg";
import whyChoiseImg2 from "../../Assets/Images/whyChoiseImg2.svg";

function WhyChoise() {
  return (
    <div className="why-choise">
      <div className="container why-choise__wrapper">
        <h2 className="why-choise__heading">
          Nega aynan "MyFamily" maktabini tanlaymiz?
        </h2>

        <div className="why-choise__about">
          <ul className="why-choise__about__list">
            <li className="why-choise__about__list__item">
              <img src={whyChoiseImg1} alt="whyChoiseImg1" width="80" height="80" />
              <div className="why-choise__about__list__item__div">
                <h5 className="why-choise__about__list__item__div__heading">
                  Bosh Maqsadimiz
                </h5>
                <p className="why-choise__about__list__item__div__text">
                  “MyFamily” oila maktabi shunday maummolarning oldini olish, ularga
                  adolatli yechim ko'rsatish, oila tushunchasining asl qiyofasini ochib
                  berishni maqsad qilgan.
                </p>
              </div>
            </li>
            <li className="why-choise__about__list__item">
              <img src={whyChoiseImg2} alt="whyChoiseImg2" width="80" height="80" />
              <div className="why-choise__about__list__item__div">
                <h5 className="why-choise__about__list__item__div__heading">
                  Mavzular Ichida
                </h5>
                <p className="why-choise__about__list__item__div__text">
                  Nikoh, To’y, Er-xotinlik munosabatlari, Ichki munosabatlar, Jinsiy
                  tarbiya, Farzand tarbiyasi, Oila salomatligi, Taloq, Ota-onaga yaxshilik
                  qilish, Yaqin qarindoshlar bilan munosabatlarni o’nglash, Qo’shnichilik.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChoise;
