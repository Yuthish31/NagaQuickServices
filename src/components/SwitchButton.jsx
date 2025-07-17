import { useLocation, useNavigate } from "react-router-dom";
import taxiTyreLogo from "../assets/img/taxi_tyre_logo.png";
import epServicesLogo from "../assets/img/ep_services_logo.png";
import taxiRoadBg from "../assets/img/taxi_road.jpeg";
import epTowerBg from "../assets/img/ep_tower.jpeg";
import './SwitchButton.css';

const SwitchButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isTaxiPage = location.pathname.startsWith("/taxi") || location.pathname === "/";

  const handleSwitch = () => {
    if (isTaxiPage) {
      navigate("/ep_services");
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <div
        className={`wrapper ${!isTaxiPage ? "wrapper-night" : ""}`}
        id="toggle"
        onClick={handleSwitch}
        style={{
          backgroundImage: `url(${isTaxiPage ? taxiRoadBg : epTowerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className={`circle ${isTaxiPage ? "sun" : "moon"}`} id="circle">
          <img
            src={isTaxiPage ? taxiTyreLogo : epServicesLogo}
            alt={isTaxiPage ? "Taxi Tyre Logo" : "EP Services Logo"}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
