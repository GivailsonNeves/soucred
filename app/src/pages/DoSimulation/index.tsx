import { useParams } from "react-router-dom";
import DoSimulation from "./view";

const DoSimulationContext: React.FC = () => {
  const params = useParams<any>();
  console.log({ params });

  return <DoSimulation {...params} />;
};

export default DoSimulationContext;
