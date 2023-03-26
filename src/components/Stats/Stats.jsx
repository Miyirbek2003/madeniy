import "aos/dist/aos.css";
import React from "react";
import "./stat.css";
export default function Stats() {
  const valDone = document.querySelectorAll(".s1");
  const valDoneAll = document.querySelectorAll(".s2");
  const width1 = (valDone[0]?.innerHTML * 100) / valDoneAll[0]?.innerHTML;
  const width2 = (valDone[1]?.innerHTML * 100) / valDoneAll[1]?.innerHTML;
  return (
    <section className="stat">
      <div className="container">
        <div className="stat-inner">
          <div className="title">Statistika</div>
          <div className="stat-cards">
            <div className="stat-top">
              <div className="top-card" data-aos="fade-up">
                <span>Qayta tiklangan madaniy meros obyektlari</span>
                <div className="prog-bar">
                  <div
                    className="prog-bar-inner"
                    style={{ width: `${width1}%` }}
                  ></div>
                  <span className="s1">1136</span>
                  <span className="s2">8210</span>
                </div>
              </div>
              <div className="top-card" data-aos="fade-up">
                <span>Qayta tiklanish jarayonida madaniy meros obyektlari</span>
                <div className="prog-bar">
                  <div
                    className="prog-bar-inner"
                    style={{ width: `${width2}%` }}
                  ></div>
                  <span className="s1">2000</span>
                  <span className="s2">8210</span>
                </div>
              </div>
            </div>
            <div className="stat-bottom">
              <div className="stat-btm-card" data-aos="fade-up">
                Ijaraga beriladi madaniy meros obyektlari
                <img
                  src={"https://www.madaniymeros.uz/img/pattern1.755846a1.png"}
                  alt=""
                />
                <span>602</span>
              </div>
              <div className="stat-btm-card" data-aos="fade-up">
                Ijaraga beriladi madaniy meros obyektlari
                <img
                  src={"https://www.madaniymeros.uz/img/pattern1.755846a1.png"}
                  alt=""
                />
                <span>602</span>
              </div>
              <div className="stat-btm-card" data-aos="fade-up">
                Ijaraga beriladi madaniy meros obyektlari
                <img
                  src={"https://www.madaniymeros.uz/img/pattern1.755846a1.png"}
                  alt=""
                />
                <span>602</span>
              </div>
              <div className="stat-btm-card" data-aos="fade-up">
                Ijaraga beriladi madaniy meros obyektlari
                <img
                  src={"https://www.madaniymeros.uz/img/pattern1.755846a1.png"}
                  alt=""
                />
                <span>602</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
