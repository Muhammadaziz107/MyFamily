import "./Contact.css";
import family from "../../Assets/Images/famliy.png";
import telegram from "../../Assets/Images/telegr.svg";
import instagram from "../../Assets/Images/insta.svg";
import youtube from "../../Assets/Images/youtub.svg";
import facebook from "../../Assets/Images/facebok.svg";

function Contact() {
  function wrongphone() {
    let phon = document.getElementById("phone");
    let o = document.getElementById("label");
    if (phon.value[0] === "+") {
      o.style.color = "#E50E0E";
      phon.style.border = "1px solid #E50E0E";
    } else {
      o.style.color = "transparent";
      phon.style.border = "1px solid #CCCCCC";
    }
  }

  function len() {
    let phon = document.getElementById("selectdirect");
    if (phon.value) {
      phon.style.color = "#000000";
    } else {
      phon.style.color = "#CCCCCC";
    }
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {
       
      }
      await fetch("http://localhost:9999/api/branchs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-img-wrapper">
            <img
              src={family}
              alt="family"
              className="contact__img"
              width="490"
              height="524"
            />
          </div>
          <div className="contact__box">
            <div className="success d-none">
              <h2 className="success__title">Arizangiz muvaffaqiyatli yuborildi</h2>
              <p className="success__subtitle">
                Yaqin daqiqalar ichida operatorlarimiz siz bilan bog’lanishadi
              </p>
            </div>

            <div className="contact__form-wrapper d-block">
              <h1 className="contact__title">biz bilan bog‘lanish</h1>
              <p className="contact__subtitle">
                Telefon raqamingizni qoldiring va sizga qo'ng'iroq qiling
              </p>
              <form className="contact__form" onSubmit={onSubmitForm}>
                <input
                  type="text"
                  className="contact__input"
                  placeholder="F.I.SH"
                  required
                  autoComplete="off"
                />
                <input
                  type="text"
                  className="contact__input"
                  onKeyUp={() => wrongphone()}
                  placeholder="Telefon raqam"
                  id="phone"
                  autoComplete="off"
                  required
                />
                <label htmlFor="phone" id="label" className="phonelabel">
                  Telefon raqamni to’g’ri ko’rinishda kiriting
                </label>
                <select
                  type="text"
                  className="contact__input contact__select"
                  placeholder="Yo’nalish"
                  id="selectdirect"
                  required onChange={len} 
                >
                  <option value="Yonalish" disabled>Yonalish</option>
                  <option value="Yonalish">Oila</option>
                  <option value="Yonalish">Bola</option>
                  <option value="Yonalish">Ayol</option>
                </select>
                <button type="submit" className="contact__btn">
                  Kursga yozilish
                </button>
              </form>
            </div>

            <div className="contact__footer">
              <div className="icon-wrapper">
                <a href="https://t.me/IkromSharif" className="icon">
                  <img src={telegram} alt="tele" className="icon" />
                </a>
                <a href="https://www.instagram.com/ikrom.sharif.1" className="icon">
                  <img src={instagram} alt="insta" className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC6q44iRQZDOi1FjyFU2EJow"
                  className="icon"
                >
                  <img src={youtube} alt="youtub" className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/ikrom.sharif.1"
                  className="icon fasebok"
                >
                  <img src={facebook} alt="facebok" />
                </a>
              </div>
              <a
                target="_blanka"
                href="https://goo.gl/maps/KphrBkZuvqMFKaiV6"
                className="addres"
              >
                Toshkent shahri, Amir Temur ko'chasi, 1-uy
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
