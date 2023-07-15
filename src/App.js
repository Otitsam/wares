

import WaresCards from "./Components/waresCards";
import "./App.css";

import asana from "./Images/asana.png"
import blablacar from "./Images/blablacar.png"
import hunter from "./Images/hunter.png"
import institutt from "./Images/institutt.png"
import mailchimp from "./Images/mailchimp.png"
import stripe from "./Images/stripe.png"
import twilio from "./Images/twilio.png"
import typeform from "./Images/typeform.png"
import whatsapp from "./Images/whatsapp.png"



function App() {
  const wares = [
    {
      imgSrc: asana,
      title: "Asana",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: blablacar,
      title: "Blablacar",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: hunter,
      title: "Hunter",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: institutt,
      title: "Institutt",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: mailchimp,
      title: "Mailchimp",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: stripe,
      title: "Stripe",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: twilio,
      title: "Twilio",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: typeform,
      title: "Typeform",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
    {
      imgSrc: whatsapp,
      title: "Whatsapp",
      text1: "Data Access",
      text2: "Hunter API makes it easy to find or verify professional emails",
    },
  ];

  return (
    <div className="app-container">
      <div className="free-apis">
        <h1>
          A collective list of free APIs for use in software and web
          development.
        </h1>
      </div>
      <div className="input-text">
        <input
        type="text"
        placeholder="Find development, games, images APIs"
        className="input"
        />
      </div>
      <div className="featured">
        <h4>Featured APIs of the week</h4>
      </div>
      <div className="comp-card">
        {wares.map((ware) => {
          return (
            <WaresCards
              imgSrc={ware.imgSrc}
              title={ware.title}
              text1={ware.text1}
              text2={ware.text2}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
