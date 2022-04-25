import "./styles.scss";
import HeaderLogo from '../../../Components/Images/HeaderLogo.png'

function Topo() {
  return (
    <div className="header-container">
      <div className="left">
        <img src={HeaderLogo}/>
      </div>
      <div className="right">
        <div>Funcionalidades</div>
        <div>App</div>
        <div>Planos</div>
        <div>Contato</div>
      </div>
    </div>
  );
}

export default Topo;
