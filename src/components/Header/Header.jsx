import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";
import { BsGlobe } from "react-icons/bs";
import { TbSitemap } from "react-icons/tb";
import { BsArrowRepeat, BsSearch } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import "./header.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { setLang } from "../../store/mainSlider";
export default function Header() {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isOpened2, setIsOpened2] = React.useState(false);
  const navigate = useNavigate();
  const [isBurger, setIsBurger] = React.useState(false);
  const dispatch = useDispatch();
  if (isBurger) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  var res = localStorage.getItem("size");
  var res2 = localStorage.getItem("size2");
  const { t, i18n } = useTranslation();
  const lngs = {
    uz: { nativeName: "O'zb" },
    kr: { nativeName: "Qr" },
    en: { nativeName: "En" },
    ru: { nativeName: "Рус" },
  };
  const prog = document.querySelector(".progress");
  const [selected, setSelected] = React.useState(
    lngs[localStorage.getItem("i18nextLng")].nativeName
  );
  const [isSearching, setIsSearching] = React.useState(false);
 
  return (
    <header>
      <div className="progress">
        <div className="progress-inner"></div>
      </div>
      <div className="container">
        {isBurger ? (
          <div className="burger-menu">
            <div className="container">
              <div className="logo">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Emblem_of_Karakalpakstan.svg/200px-Emblem_of_Karakalpakstan.svg.png"
                    }
                    alt="logo"
                  />
                  <span className="tit">
                    Qaraqalpaqstan Respublikasi' ma'deniy miyras agentligi
                  </span>
                </div>
                <span className="exit" onClick={() => setIsBurger(false)}>
                  &times;
                </span>
              </div>
              <div className="sr">
                <input type="text" />
                <span>
                  <BsSearch />
                </span>
              </div>
              <div className="header-action">
                <div className="dark-mode">
                  <span
                    className="ch"
                    onClick={() => {
                      const dark_drop = document.querySelector(".dark-drop");
                      const lang_drop = document.querySelector(".lang-drop");
                      const lang = document.querySelector(".lang");
                      const body = document.body.className;
                      setIsOpened(!isOpened);
                      setIsOpened2(false);
                      dark_drop.classList.toggle("show");
                      lang_drop.classList.remove("show");
                      if (body === "dark") {
                        dark_drop.style.background = "#333";
                      } else {
                        dark_drop.style.background = "white";
                      }
                    }}
                  >
                    <AiOutlineEye />

                    {t("special")}
                    <TfiAngleDown
                      style={
                        isOpened
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                      className="arr"
                    />
                  </span>
                  <div className="dark-drop">
                    <h3>Ko'rinish</h3>
                    <ul>
                      <li
                        onClick={() => {
                          const body = document.body;
                          body.classList.remove("dark");
                          const dark = document.querySelector(".dark-drop");
                          const lang = document.querySelector(".lang-drop");
                          dark.classList.remove("show");
                          lang.classList.remove("show");
                        }}
                      >
                        <input
                          name="theme"
                          type="radio"
                          id="light"
                          defaultChecked
                          onClick={() => {
                            setIsOpened(false);
                            setIsOpened2(false);
                          }}
                        />
                        <label htmlFor="light">Oddiy versiya</label>
                        <div className="check"></div>
                      </li>
                      <li
                        onClick={() => {
                          const body = document.body;
                          body.classList.add("dark");
                          const dark = document.querySelector(".dark-drop");
                          const lang = document.querySelector(".lang-drop");
                          dark.classList.remove("show");
                          setIsOpened2(false);
                          setIsOpened(false);

                          lang.classList.remove("show");
                        }}
                      >
                        <input type="radio" name="theme" id="dark" />
                        <label htmlFor="dark">Qora va oq versiya</label>
                        <div className="check"></div>
                      </li>
                    </ul>
                    <h3>Shrift o'lchami</h3>
                    <div className="resize">
                      <button
                        type="button"
                        onClick={() => {
                          const p = document.querySelectorAll("p");
                          const span = document.querySelectorAll("span");
                          const h1 = document.querySelectorAll("h1");
                          const h2 = document.querySelectorAll("h2");
                          const li = document.querySelectorAll("li");
                          res = parseInt(res) + 2;
                          localStorage.setItem("size", res);

                          const title = document.querySelectorAll(".title");
                          title.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                          p.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });

                          li.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";

                            console.log(res);
                          });
                          span.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                          h1.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                          h2.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                        }}
                      >
                        A+
                      </button>
                      <button
                        onClick={() => {
                          const p = document.querySelectorAll("p");
                          const span = document.querySelectorAll("span");
                          const h1 = document.querySelectorAll("h1");
                          const h2 = document.querySelectorAll("h2");
                          const li = document.querySelectorAll("li");
                          res2 = parseInt(res2) - 2;
                          localStorage.setItem("size2", res2);
                          const title = document.querySelectorAll(".title");
                          title.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          p.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });

                          li.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          span.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          h1.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          h2.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                        }}
                      >
                        A-
                      </button>
                      <button
                        onClick={() => {
                          const p = document.querySelectorAll("p");
                          const span = document.querySelectorAll("span");
                          const h1 = document.querySelectorAll("h1");
                          const h2 = document.querySelectorAll("h2");
                          const li = document.querySelectorAll("li");
                          const title = document.querySelectorAll(".title");
                          title.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          p.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });

                          li.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }

                            console.log(res);
                          });
                          span.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          h1.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          h2.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          res = 0;
                          res2 = 0;
                          localStorage.setItem("size", 0);
                          localStorage.setItem("size2", 0);
                        }}
                      >
                        <BsArrowRepeat />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="lang"
                  onClick={() => {
                    setIsOpened2(!isOpened2);
                    setIsOpened(false);
                    const lang = document.querySelector(".lang");
                    const body = document.body.className;
                    const dark_drop = document.querySelector(".dark-drop");
                    const lang_drop = document.querySelector(".lang-drop");
                    lang_drop.classList.toggle("show");
                    dark_drop.classList.remove("show");
                    if (body === "dark") {
                      lang_drop.style.background = "#333";
                    } else {
                      lang_drop.style.background = "white";
                    }
                  }}
                >
                  <span>
                    <BsGlobe />
                    <span>{selected} </span>
                    <TfiAngleDown
                      className="arr"
                      style={
                        isOpened2
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                    />
                  </span>
                  <div className="lang-drop">
                    <ul>
                      {Object.keys(lngs).map((lang) => (
                        <li
                          key={lang}
                          onClick={() => {
                            i18n.changeLanguage(lang);
                            dispatch(setLang(lang));
                            setSelected(lngs[lang].nativeName);
                          }}
                        >
                          {selected === lngs[lang].nativeName && (
                            <AiOutlineCheck />
                          )}
                          {lngs[lang].nativeName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="map">
                  <span>
                    <TbSitemap />
                  </span>
                </div>
              </div>
              <div className="header-links">
                <ul className="links">
                  <li className="link-item">
                    Agentlik <TfiAngleDown className="arr" />{" "}
                    <ul>
                      <li
                        onClick={() => {
                          navigate("/organization"), setIsBurger(false);
                        }}
                      >
                        Rahbariyat
                      </li>
                      <li>Markaziy apparat</li>
                      <li>Tuzilmalar</li>
                      <li>Faoliyat</li>
                    </ul>
                  </li>
                  <li className="link-item">Xizmatlar</li>
                  <li className="link-item">
                    Matbout xizmati <TfiAngleDown className="arr" />{" "}
                    <ul>
                      <li>Ragbariyat</li>
                      <li>Markaziy apparat</li>
                      <li>Tuzilmalar</li>
                      <li>Faoliyat</li>
                    </ul>
                  </li>
                  <li className="link-item">
                    Ochiq ma'lumotlar <TfiAngleDown className="arr" />{" "}
                    <ul>
                      <li>Ragbariyat</li>
                      <li>Markaziy apparat</li>
                      <li>Tuzilmalar</li>
                      <li>Faoliyat</li>
                    </ul>
                  </li>
                  <li className="link-item">
                    Madaniy me'ros <TfiAngleDown className="arr" />{" "}
                    <ul>
                      <li>Ragbariyat</li>
                      <li>Markaziy apparat</li>
                      <li>Tuzilmalar</li>
                      <li>Faoliyat</li>
                    </ul>
                  </li>
                  <li className="link-item">
                    YUNESKO <TfiAngleDown className="arr" />{" "}
                    <ul>
                      <li>Ragbariyat</li>
                      <li>Markaziy apparat</li>
                      <li>Tuzilmalar</li>
                      <li>Faoliyat</li>
                    </ul>
                  </li>
                </ul>
                <div className="call">
                  <span>
                    {" "}
                    <FiPhone size={20} /> <span>+998 91 095 39 17</span>
                  </span>
                </div>
                <div className="search">
                  <input type="text" style={{ display: "none" }} />
                  <span>
                    <AiOutlineSearch size={25} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="header-inner">
            <div className="header-top">
              <Link to={"/"} className="logo">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Emblem_of_Karakalpakstan.svg/200px-Emblem_of_Karakalpakstan.svg.png"
                  }
                  alt="logo"
                />
                <span className="tit">
                  Qaraqalpaqstan Respublikasi' ma'deniy miyras agentligi
                </span>{" "}
              </Link>
              <div className="burger-btn" onClick={() => setIsBurger(true)}>
                <GiHamburgerMenu />
              </div>
              <div className="header-action">
                <div className="dark-mode">
                  <span
                    className="ch"
                    onClick={() => {
                      const dark_drop = document.querySelector(".dark-drop");
                      const lang_drop = document.querySelector(".lang-drop");
                      const lang = document.querySelector(".lang");
                      const body = document.body.className;
                      setIsOpened(!isOpened);
                      setIsOpened2(false);
                      dark_drop.classList.toggle("show");
                      lang_drop.classList.remove("show");
                      if (body === "dark") {
                        dark_drop.style.background = "#333";
                      } else {
                        dark_drop.style.background = "white";
                      }
                    }}
                  >
                    <AiOutlineEye />

                    {t("special")}
                    <TfiAngleDown
                      style={
                        isOpened
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                      className="arr"
                    />
                  </span>
                  <div className="dark-drop">
                    <h3>Ko'rinish</h3>
                    <ul>
                      <li
                        onClick={() => {
                          const body = document.body;
                          body.classList.remove("dark");
                          const dark = document.querySelector(".dark-drop");
                          const lang = document.querySelector(".lang-drop");
                          dark.classList.remove("show");
                          lang.classList.remove("show");
                        }}
                      >
                        <input
                          name="theme"
                          type="radio"
                          id="light"
                          defaultChecked
                          onClick={() => {
                            setIsOpened(false);
                            setIsOpened2(false);
                          }}
                        />
                        <label htmlFor="light">Oddiy versiya</label>
                        <div className="check"></div>
                      </li>
                      <li
                        onClick={() => {
                          const body = document.body;
                          body.classList.add("dark");
                          const dark = document.querySelector(".dark-drop");
                          const lang = document.querySelector(".lang-drop");
                          dark.classList.remove("show");
                          setIsOpened2(false);
                          setIsOpened(false);

                          lang.classList.remove("show");
                        }}
                      >
                        <input
                          type="radio"
                          name="theme"
                          id="dark"
                          onClick={() => {
                            setIsOpened(false);
                            setIsOpened2(false);
                          }}
                        />
                        <label htmlFor="dark">Qora va oq versiya</label>
                        <div className="check"></div>
                      </li>
                    </ul>
                    <h3>Shrift o'lchami</h3>
                    <div className="resize">
                      <button
                        type="button"
                        onClick={() => {
                          const p = document.querySelectorAll("p");
                          const span = document.querySelectorAll("span");
                          const h1 = document.querySelectorAll("h1");
                          const h2 = document.querySelectorAll("h2");
                          const li = document.querySelectorAll("li");
                          res = parseInt(res) + 2;
                          localStorage.setItem("size", res);

                          p.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });

                          li.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";

                            console.log(res);
                          });
                          span.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                          h1.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                          h2.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) + 2 + "px";
                          });
                        }}
                      >
                        A+
                      </button>
                      <button
                        onClick={() => {
                          const p = document.querySelectorAll("p");
                          const span = document.querySelectorAll("span");
                          const h1 = document.querySelectorAll("h1");
                          const h2 = document.querySelectorAll("h2");
                          const li = document.querySelectorAll("li");

                          res2 = parseInt(res2) - 2;
                          localStorage.setItem("size2", res2);
                          p.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });

                          li.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          span.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          h1.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                          h2.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            el.style.fontSize = parseInt(x) - 2 + "px";
                          });
                        }}
                      >
                        A-
                      </button>
                      <button
                        onClick={() => {
                          const p = document.querySelectorAll("p");
                          const span = document.querySelectorAll("span");
                          const h1 = document.querySelectorAll("h1");
                          const h2 = document.querySelectorAll("h2");
                          const li = document.querySelectorAll("li");

                          p.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });

                          li.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }

                            console.log(res);
                          });
                          span.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          h1.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          h2.forEach((el) => {
                            var x = window.getComputedStyle(el).fontSize;
                            if (res2 < 0) {
                              el.style.fontSize =
                                parseInt(x) - (res + res2) + "px";
                            } else {
                              el.style.fontSize = parseInt(x) - res + "px";
                            }
                          });
                          res = 0;
                          res2 = 0;
                          localStorage.setItem("size", 0);
                          localStorage.setItem("size2", 0);
                        }}
                      >
                        <BsArrowRepeat />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="lang"
                  onClick={() => {
                    setIsOpened2(!isOpened2);
                    setIsOpened(false);
                    const lang = document.querySelector(".lang");
                    const body = document.body.className;
                    const dark_drop = document.querySelector(".dark-drop");
                    const lang_drop = document.querySelector(".lang-drop");
                    lang_drop.classList.toggle("show");
                    dark_drop.classList.remove("show");
                    if (body === "dark") {
                      lang_drop.style.background = "#333";
                    } else {
                      lang_drop.style.background = "white";
                    }
                  }}
                >
                  <span>
                    <BsGlobe />
                    <span>{selected} </span>
                    <TfiAngleDown
                      className="arr"
                      style={
                        isOpened2
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                    />
                  </span>
                  <div className="lang-drop">
                    <ul>
                      {Object.keys(lngs).map((lang) => (
                        <li
                          key={lang}
                          onClick={() => {
                            i18n.changeLanguage(lang);
                            dispatch(setLang(lang));
                            setSelected(lngs[lang].nativeName);
                          }}
                        >
                          {selected === lngs[lang].nativeName && (
                            <AiOutlineCheck />
                          )}
                          {lngs[lang].nativeName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="map">
                  <span>
                    <TbSitemap />
                  </span>
                </div>
              </div>
            </div>
            <div className="header-links">
              {!isSearching && (
                <>
                  <ul className="links">
                    <li className="link-item">
                      Agentlik <TfiAngleDown className="arr" />{" "}
                      <ul>
                        <li onClick={() => navigate("/organization")}>
                          Rahbariyat
                        </li>
                        <li>Markaziy apparat</li>
                        <li>Tuzilmalar</li>
                        <li>Faoliyat</li>
                      </ul>
                    </li>
                    <li className="link-item">Xizmatlar</li>
                    <li className="link-item">
                      Matbout xizmati <TfiAngleDown className="arr" />{" "}
                      <ul>
                        <li>Ragbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tuzilmalar</li>
                        <li>Faoliyat</li>
                      </ul>
                    </li>
                    <li className="link-item">
                      Ochiq ma'lumotlar <TfiAngleDown className="arr" />{" "}
                      <ul>
                        <li>Ragbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tuzilmalar</li>
                        <li>Faoliyat</li>
                      </ul>
                    </li>
                    <li className="link-item">
                      Madaniy me'ros <TfiAngleDown className="arr" />{" "}
                      <ul>
                        <li>Ragbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tuzilmalar</li>
                        <li>Faoliyat</li>
                      </ul>
                    </li>
                    <li className="link-item">
                      YUNESKO <TfiAngleDown className="arr" />{" "}
                      <ul>
                        <li>Ragbariyat</li>
                        <li>Markaziy apparat</li>
                        <li>Tuzilmalar</li>
                        <li>Faoliyat</li>
                      </ul>
                    </li>
                  </ul>
                  <div className="call">
                    <span>
                      {" "}
                      <FiPhone size={20} /> <span>+998 91 095 39 17</span>
                    </span>
                  </div>
                </>
              )}
              {isSearching && (
                <div className="srch">
                  <input type="text" className="main-s" />
                  <span onClick={() => setIsSearching(false)}>&times;</span>
                </div>
              )}
              <div className="search">
                {!isSearching && (
                  <span onClick={() => setIsSearching(true)}>
                    <AiOutlineSearch size={25} />
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
