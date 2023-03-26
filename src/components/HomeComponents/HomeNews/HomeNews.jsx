import "./homenews.css";
import { BiTime } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
export default function HomeNews() {
  const navigate = useNavigate();
  const { lastNews } = useSelector((state) => state.newSlice);
  const { lang } = useSelector((state) => state.mainSlider);
  const dispatch = useDispatch();
  function createMarkup() {
    return {
      __html: lastNews[0]?.translations.filter(
        (el) => el.locale === localStorage.getItem("i18nextLng")
      )[0]?.body,
    };
  }
  let btmArr = [];
  for (let i = 1; i < lastNews.length; i++) {
    btmArr.push(lastNews[i]);
  }

  return (
    <section className="news">
      <div className="container">
        <div className="news-inner">
          <h1 className="title">Yangiliklar</h1>
          <div className="news-cards">
            <div className="today-top">
              <div className="main-img">
                <img
                  className="mainimg"
                  src={`https://admin.qr-madeniymiyras.uz/${lastNews[0]?.image}`}
                  alt="main"
                />
                <div className="news-text">
                  <div className="img-title">
                    <h2>
                      {
                        lastNews[0]?.translations.filter(
                          (el) =>
                            el.locale === localStorage.getItem("i18nextLng")
                        )[0]?.title
                      }
                    </h2>
                  </div>
                  <div className="img-date">
                    {" "}
                    <BiTime />{" "}
                    {lastNews[0]?.updated_at.slice(0, 10).replaceAll("-", ".")}
                  </div>
                </div>
                <img
                  src="https://www.madaniymeros.uz/img/cr_vec.718d92a1.png"
                  alt=""
                  className="bgimg"
                />
              </div>
              <div className="today-about">
                <div
                  className="title"
                  dangerouslySetInnerHTML={createMarkup()}
                ></div>

                <Link
                  to={`news/${
                    lastNews[0]?.translations.filter(
                      (el) => el.locale === localStorage.getItem("i18nextLng")
                    )[0]?.slug
                  }`}
                >
                  Batafsil{" "}
                  <span>
                    <BsArrowRight />
                  </span>{" "}
                </Link>
              </div>
            </div>
            <div className="prev-news">
              {btmArr?.map((item, index) => {
                return (
                  <div className="bg" key={item.id}>
                    <Link
                      className="bottom-news"
                      to={`news/${btmArr[index]?.slug}`}
                    >
                      <img
                        src={`https://admin.qr-madeniymiyras.uz/${btmArr[index]?.image}`}
                        alt=""
                      />
                      <div className="news-text">
                        <div className="img-title">
                          <h2>
                            {
                              btmArr[index]?.translations.filter(
                                (el) =>
                                  el.locale ===
                                  localStorage.getItem("i18nextLng")
                              )[0]?.title
                            }
                          </h2>
                        </div>
                        <div className="img-date">
                          <BiTime />
                          {btmArr[index]?.updated_at
                            .slice(0, 10)
                            .replaceAll("-", ".")}
                        </div>
                      </div>
                    </Link>
                    <img
                      className="bgimg"
                      src="https://www.madaniymeros.uz/img/cr_vec.718d92a1.png"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
