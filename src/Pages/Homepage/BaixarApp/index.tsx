import Title from "../../../Components/Title";
import appstore from "../../../Components/Images/appstore-button.png"
import googleplay from "../../../Components/Images/googleplay-button.png"
import downloadimg from "../../../Components/Images/download img.png"
import "./styles.scss";

function BaixarApp() {
  return (
    <div className="download-wrapper">
      <div className="download-container">
        <div className="download-left">
          <Title fontSize='25px'>Baixe nosso app para desfrutar mais!</Title>
          <div className="text">
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </div>
          <div className="download-buttons">
            <img alt="appstore" width='130px' src={appstore} />
            <img alt="googleplay" width='130px' src={googleplay} />
          </div>
        </div>
        <div className="download-right">
          <img alt="download" width='350px' src={downloadimg} />
        </div>
      </div>
    </div>
  );
}

export default BaixarApp;
