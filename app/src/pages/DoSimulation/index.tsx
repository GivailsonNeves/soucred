import { useLocation } from "react-router-dom";
import DoSimulation from "./view";

const DoSimulationContext: React.FC = () => {
  const location = useLocation();

  return <DoSimulation type={location.pathname.substring(9)} />;
};

export default DoSimulationContext;
