import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAboutMuzey } from "../../store/muzeySlice/muzeySlice";
import "./muzey.css";
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

export default function Museum() {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAboutMuzey(id));
    window.scrollTo(0, 0);
  }, []);
  const { aboutMuzey } = useSelector((state) => state.muzeySlice);
  const { lang } = useSelector((state) => state.mainSlider);
  function createMarkup() {
    return {
      __html: aboutMuzey?.translations?.filter(
        (el) => el.locale === localStorage.getItem("i18nextLng")
      )[0]?.body,
    };
  }
  return (
    <section className="muzey">
      <div className="container">
        <div className="muzey-content">
          <div className="side-bar">
            <div className="side-title">Agentlik</div>
            <ul>
              <li>Ragbariyat</li>
              <li>Markaziy apparat</li>
              <li>Tuzilmalar</li>
              <li>Faoliyat</li>
            </ul>
          </div>
          <div className="muzey-right">
            <div className="title-m">
              {
                aboutMuzey?.translations?.filter(
                  (el) => el.locale === localStorage.getItem("i18nextLng")
                )[0]?.title
              }
            </div>
            <div
              className="muzey-inner"
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
            <div className="contact-m">
              <span>
                <FiMapPin />{" "}
                {
                  aboutMuzey?.translations?.filter(
                    (el) => el.locale === localStorage.getItem("i18nextLng")
                  )[0]?.address
                }
              </span>
              <span>
                <TfiWorld /> {aboutMuzey?.link}
              </span>
              <span>
                <BsTelephone /> {aboutMuzey?.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
