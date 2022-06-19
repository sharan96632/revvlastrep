import { React } from "react";
import { useState } from "react";
import "./Faqs.css";
import { Footer } from "../Footer/Footer";

export const Faqs = () => {
  const [show, setShow] = useState(true);
  const [showq, setShowq] = useState(true);
  const [showa, setShowa] = useState(true);
  const [showb, setShowb] = useState(true);
  const [showc, setShowc] = useState(true);
  const [showd, setShowd] = useState(true);
  const [showe, setShowe] = useState(true);
  const [showf, setShowf] = useState(true);
  const [showg, setShowg] = useState(true);
  const [showh, setShowh] = useState(true);
  const [showi, setShowi] = useState(true);
  const [showj, setShowj] = useState(true);
  const [showk, setShowk] = useState(true);
  const [showl, setShowl] = useState(true);

  return (
    <>
      <div className="contain">
        <div className="cont1">
          <div>
            {" "}
            <button className="button1">About Revv</button>{" "}
          </div>
          <div>
            {" "}
            <button className="button1">Your Bookings</button>
          </div>
          <div>
            <button className="button1">Payments</button>
          </div>
          <div>
            <button className="button1">Your Trip</button>
          </div>
        </div>
        <div className="cont2">
          <h1>About</h1>
          <div>
            <button className="button2" onClick={() => setShow(!show)}>
              What is Revv?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowq(!showq)}>
              Am I eligible to use Revv's services?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowa(!showa)}>
              Which are the areas where I can avail Revv's services?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowb(!showb)}>
              Is there a "Kilometres limit" to how much I can drive?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowc(!showc)}>
              Are there restrictions on where I can travel?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowd(!showd)}>
              Do I have to bring the car back to the same location?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowe(!showe)}>
              Can I book a one-way trip?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowf(!showf)}>
              Can I book for any duration of time?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowg(!showg)}>
              What is Peak Season? Are the prices different during Peak Season?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowh(!showh)}>
              What kind of cars can I choose from?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowi(!showi)}>
              In the event of an accident or damage to the vehicle, what is my
              maximum liability?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowj(!showj)}>
              Is Revv 24/7?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowk(!showk)}>
              Can I take a pet along with me?
            </button>
          </div>
          <div>
            <button className="button2" onClick={() => setShowl(!showl)}>
              Is there any speed limit?
            </button>
          </div>
        </div>
      </div>

      <div id="footer">
        <Footer></Footer>
      </div>
    </>
  );
};
