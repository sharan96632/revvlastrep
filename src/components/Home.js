import "./css/Home.css";
import react from "react";
import { Footer } from "./Footer/Footer";

export const Home = () => {
  return (
    <>
      <div>
        <div className="cont">
          <div className="cont1">
            <div className="contcont1">
              <div></div>
            </div>
          </div>
          <div className="cont1">
            <img
              className="car"
              src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp"
            ></img>
          </div>
        </div>
        <div id="footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};
