import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAboutLastNew } from "../../store/newsSlice/newSlice";

import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

export default function News() {
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAboutLastNew(id));
    window.scrollTo(0, 0);
  }, []);
  const { aboutLastNew } = useSelector((state) => state.newSlice);
  const { lang } = useSelector((state) => state.mainSlider);
  function createMarkup() {
    return {
      __html: aboutLastNew?.translations?.filter(
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
                aboutLastNew?.translations?.filter(
                  (el) => el.locale === localStorage.getItem("i18nextLng")
                )[0]?.title
              }
            </div>
            <div
              className="muzey-inner"
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
            {aboutLastNew.link ||
              aboutLastNew.phone ||
              (aboutLastNew.address && (
                <div className="contact-m">
                  {aboutLastNew.address && (
                    <span>
                      <FiMapPin color={"#05057d"} />{" "}
                      {
                        aboutLastNew?.translations?.filter(
                          (el) =>
                            el.locale === localStorage.getItem("i18nextLng")
                        )[0]?.address
                      }
                    </span>
                  )}
                  {aboutLastNew.link && (
                    <span>
                      <TfiWorld color={"#05057d"} /> {newId?.link}
                    </span>
                  )}
                  {aboutLastNew.phone && (
                    <span>
                      <BsTelephone color={"#05057d"} /> {newId?.phone}
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
