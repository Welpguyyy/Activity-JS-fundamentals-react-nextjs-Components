import ".//welcome.css";
export default function WelcomeCard() {
  return (
    <div className="center-wrapper">
        
  <div className="flip-card">
    <div className="flip-card-inner">
     
      <div className="flip-card-front">


        <h2>Welcome!</h2>
        <h3>Hover to flip to learn more!</h3>
        
      </div>

      <div className="flip-card-back">
         <h1>Welcome to CIT Univeristy!</h1>
        <img src="/citlogo.png" alt="Avatar" width="200" height="140" />


         </div>
    </div>
  </div>
</div>

  );
}
