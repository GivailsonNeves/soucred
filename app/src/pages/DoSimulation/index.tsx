import { useLocation, useParams } from "react-router-dom";
import DoSimulation from "./view";

const DoSimulationContext: React.FC = () => {
  const params = useParams<any>();

  return <DoSimulation {...params} />;
};

export default DoSimulationContext;
