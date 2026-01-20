import Link from "@material-ui/core/Link";
import logo from "../images/ieee-logo-light.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Success.css";

const Success = () => {
  return (
    <>
      <section id="success-page">
        <nav className="navbar">
          <div className="nav-container">
            <a
              className="navbar-brand"
              target="_blank"
              rel="noreferrer"
              href="https://ieee-sb-nitdgp.vercel.app/"
            >
              <img src={logo} alt="IEEE Logo" width="100" height="50" />
            </a>
          </div>
        </nav>

        <div className="success-container">
          <div className="success-card">
            <div className="head">
              <h1 className="thin-text">
                IEEE SB NIT DURGAPUR
                <br />
                AUDITIONS
              </h1>
            </div>

            {/* Success Animation Container */}
            <div className="swal-icon swal-icon--success">
              <span className="swal-icon--success__line swal-icon--success__line--long"></span>
              <span className="swal-icon--success__line swal-icon--success__line--tip"></span>
              <div className="swal-icon--success__ring"></div>
              <div className="swal-icon--success__hide-corners"></div>
            </div>

            <div className="desc">
              <h3 className="thin-text">
                You have successfully registered for the audition process
              </h3>
              <p className="light-p">Join our WhatsApp group for further updates.</p>

              <Link
                href="https://chat.whatsapp.com/HWgExsxQ3zBGzRrkxmYU3N"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-link"
              >
                <WhatsAppIcon className="wa-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;