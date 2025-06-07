import ".//welcome.css";
export default function WelcomeCard() {
  return (
      //centerwrapper is the container for the welcome card
    <div className="center-wrapper">
        
  <div className="flip-card">
    <div className="flip-card-inner">
     
      {/* flipcardfront is the front face of the card since i want the card to flip when hovered */}
      <div className="flip-card-front">


        <h2>Welcome!</h2>
        <h3>Hover to flip to learn more!</h3>
        
      </div>
 {/* and this is the back face of the card, the picture is located in the public folder*/}
      <div className="flip-card-back">
         <h1>Welcome to CIT Univeristy!</h1>
        <img src="/citlogo.png" alt="Avatar" width="200" height="140" />


         </div>
    </div>
  </div>
</div>

  );
}
