import React, { useRef } from "react";
import "./contactForm.css";
import ContactForms from "../../Assets/Images/contactform.svg";

function ContactForm() {
  const elDiv = useRef(null);
  const elButton = useRef(null);
  const openModal = () => {
    elDiv.current.classList.toggle("contactForm__wrapper--active");
  };

  return (
    <div className="contactForm">
      <div className="contactForm__wrapper" ref={elDiv}>
        {/* <img src="" alt="" /> */}
        <h2 className="contactForm__wrapper__heading">Kursga yoziling</h2>
        <p className="contactForm__wrapper__info">
          Muammolar sizni qiynashiga yo’l qo’ymang. Hoziroq o’z o’rningizni band qiling.{" "}
        </p>

        <form className="contactForm__form">
          <input
            className="contactForm__wrapper__input"
            type="text"
            placeholder="Ism-familiyangiz"
          />
          <input
            className="contactForm__wrapper__input"
            type="text"
            placeholder="Telefon raqam"
          />

          <button className="contactForm__wrapper__button" type="submit">
            Yuborish
          </button>
          <p className="contactForm__wrapper__text">
            Ariza qoldiring va operatorlarimiz siz bilan tez orada bog’lanishadi
          </p>
        </form>
      </div>
      <button ref={elButton} className="contactForm__open-modal" onClick={openModal}>
        <img src={ContactForms} alt="ContactForm img" width="15" height="15" />
      </button>
    </div>
  );
}
export default ContactForm;
