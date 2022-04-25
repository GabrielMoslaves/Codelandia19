import "./styles.scss";
import BaixarApp from "./BaixarApp";
import Apresentacao from "./Apresentacao";
import ComoFunciona from "./ComoFunciona";
import Planos from "./Planos";
import Topo from "./Topo";
import Contato from "./Contato";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="home-page">
      <Topo />
      <Apresentacao />
      <ComoFunciona />
      <BaixarApp/>
      <Planos/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default Homepage;
