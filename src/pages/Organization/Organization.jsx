import { BsTelephone, BsClock } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import "./organization.css";
export default function Organization() {
  const { lang } = useSelector((state) => state.mainSlider);
  return (
    <section className="organ">
      <div className="container">
        <div className="organ-inner">
          <div className="side-bar">
            <div className="side-title">Agentlik</div>
            <ul>
              <li>Ragbariyat</li>
              <li>Markaziy apparat</li>
              <li>Tuzilmalar</li>
              <li>Faoliyat</li>
            </ul>
          </div>
          <div className="organ-right">
            <div className="organ-title">Rahbariyat</div>
            <div className="organ-cards">
              <div className="organ-card">
                <div className="person-img">
                  <img
                    src={
                      "https://backend.madaniymeros.uz/media/uploads/management/Abdukarimov_Baxodir_Ganjiyevich_iMv7wJM.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="person-info">
                  <div className="p-name">Abdukarimov Bahodir Ganievich</div>
                  <p className="p-description">
                    O‘zbekiston Respublikasi Turizm va madaniy meros vazirligi
                    huzuridagi Madaniy meros agentligi direktori
                  </p>
                  <div className="p-contact">
                    <span>
                      <BsTelephone /> +99871 200-01-18
                    </span>
                    <span>
                      <MdOutlineAlternateEmail /> info@madaniymeros.uz{" "}
                    </span>
                    <span>
                      <BsClock /> Dushanbadan-Jumagacha 09:00-18:00{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="organ-card">
                <div className="person-img">
                  <img
                    src={
                      "https://backend.madaniymeros.uz/media/uploads/management/Abdukarimov_Baxodir_Ganjiyevich_iMv7wJM.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="person-info">
                  <div className="p-name">Abdukarimov Bahodir Ganievich</div>
                  <p className="p-description">
                    O‘zbekiston Respublikasi Turizm va madaniy meros vazirligi
                    huzuridagi Madaniy meros agentligi direktori
                  </p>
                  <div className="p-contact">
                    <span>
                      <BsTelephone /> +99871 200-01-18
                    </span>
                    <span>
                      <MdOutlineAlternateEmail /> info@madaniymeros.uz{" "}
                    </span>
                    <span>
                      <BsClock /> Dushanbadan-Jumagacha 09:00-18:00{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="organ-card">
                <div className="person-img">
                  <img
                    src={
                      "https://backend.madaniymeros.uz/media/uploads/management/Abdukarimov_Baxodir_Ganjiyevich_iMv7wJM.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="person-info">
                  <div className="p-name">Abdukarimov Bahodir Ganievich</div>
                  <p className="p-description">
                    O‘zbekiston Respublikasi Turizm va madaniy meros vazirligi
                    huzuridagi Madaniy meros agentligi direktori
                  </p>
                  <div className="p-contact">
                    <span>
                      <BsTelephone /> +99871 200-01-18
                    </span>
                    <span>
                      <MdOutlineAlternateEmail /> info@madaniymeros.uz{" "}
                    </span>
                    <span>
                      <BsClock /> Dushanbadan-Jumagacha 09:00-18:00{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="organ-card">
                <div className="person-img">
                  <img
                    src={
                      "https://backend.madaniymeros.uz/media/uploads/management/Abdukarimov_Baxodir_Ganjiyevich_iMv7wJM.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="person-info">
                  <div className="p-name">Abdukarimov Bahodir Ganievich</div>
                  <p className="p-description">
                    O‘zbekiston Respublikasi Turizm va madaniy meros vazirligi
                    huzuridagi Madaniy meros agentligi direktori
                  </p>
                  <div className="p-contact">
                    <span>
                      <BsTelephone /> +99871 200-01-18
                    </span>
                    <span>
                      <MdOutlineAlternateEmail /> info@madaniymeros.uz{" "}
                    </span>
                    <span>
                      <BsClock /> Dushanbadan-Jumagacha 09:00-18:00{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
