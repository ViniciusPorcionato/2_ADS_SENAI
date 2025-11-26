import "../App.css";
import subLogo from "../assets/SubLogoCelsinho.png";

export default function Footer() {
  return (
    <footer>
      <img src={subLogo} alt="DJ Celsinho" className="logo_footer" />

      <div className="contatos_footer">
        <p className="escrita_footer">
          <i className="fa fa-whatsapp"></i>
          <strong> WhatsApp: </strong>
          <a
            href="https://api.whatsapp.com/send/?phone=11941340429&text&type=phone_number&app_absent=0"
            className="whatsapp_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 11111-9999
          </a>{" "}
          | <i className="fa fa-instagram"></i>
          <strong> Instagram: </strong>
          <a
            href="https://www.instagram.com/djcelsinhoo?igsh=MW9paDg1ZDBleHV4"
            className="insta_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            @djcelsinhoo
          </a>
        </p>
      </div>
    </footer>
  );
}