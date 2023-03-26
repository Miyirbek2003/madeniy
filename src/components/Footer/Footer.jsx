import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-title">
            <span>Qaraqalpaqstan Respublikasi Ma'deniy miyras agentligi</span>
          </div>
          <div className="footer-content">
            <div className="agencyy link">
              <span>Agentlik</span>
              <ul>
                <li>Ragbariyat</li>
                <li>Markaziy apparat</li>
                <li>Tuzilmalar</li>
                <li>Faoliyat</li>
              </ul>
            </div>
            <div className="service link">
              <span>Motbuot xizmati</span>
              <ul>
                <li>Mediatika</li>
                <li>E'lonlar</li>
                <li>Press relizlar</li>
                <li>Motbuot kotibi</li>
              </ul>
            </div>
            <div className="contact link">
              <span>Aloqa</span>

              <span>Ochiq ma'lumotlar</span>
              <span>Xizmatlar</span>
            </div>
            <div className="phone">
              <div className="title-phone">Telefon raqam</div>
              <ul>
                <li>+99871 200-01-28</li>
                <li>+99871 200-01-28</li>
                <li>+99871 200-01-28</li>
              </ul>
              <div className="title-phone">Elektron pochta</div>
              <ul>
                <li>info@madaniyuz.uz</li>
              </ul>

              <div className="title-phone">Ish grafigi</div>
              <ul>
                <li>Dushanbadan-Jumagacha</li>
                <li>09:00 - 17:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
