import "./agency.css";
export default function Agency() {
  return (
    <section className="agency">
      <div className="container">
        <div className="agency-inner">
          <div className="agency-left">
            <div className="agency-title">
              O'zbekiston Respublikasi Madaniy me'ros agentligi
            </div>
            <p>
              Madaniy meros agentligi O‘zbekiston Respublikasida moddiy madaniy
              meros, muzeylar, arхeologiya, madaniy boyliklarning olib
              chiqilishi va olib kirilishi sohasida maхsus vakolatli davlat
              boshqaruv organi hisoblanadi
            </p>
            <div className="btns">
              <button className="more">Agentlik</button>
              <button className="age">Rahbariyat</button>
            </div>
          </div>
          <div className="agency-right">
            <img
              src={"https://www.madaniymeros.uz/img/gerb.deafcdd7.png"}
              alt=""
            />
            <div className="title">
              {" "}
              O‘ZBEKISTON RESPUBLIKASI MADANIY MEROS AGENTLIGI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
