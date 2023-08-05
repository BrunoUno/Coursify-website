export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-main">
          <h1>Find your next top tech job in 1 week.</h1>
          <p className="hero-para">
            Are you a top 2% Software Engineer, Product Manager or Data
            Scientist? Let leading Indian technology companies compete to hire
            you.
          </p>
        </div>
        <div className="hero-bottom">
          <button className="hero-btn">APPLY TO JOIN</button>
          <p className="hero-button-para">100% free. It takes only 5 minutes</p>
        </div>
        <div className="hero-footer">
          <div className="hero-component">
            <img className="hero-img" src="./assets/icon3.png" alt="" />
            <h3>STEP 1: COMPLETE PROFILE</h3>
            <p>
              Once you are approved, we showcase you to leading Indian
              technology startups
            </p>
          </div>
          <div className="hero-component">
            <img className="hero-img" src="./assets/icon1.png" alt="" />
            <h3>STEP 2: RECEIVE JOB OFFERS</h3>
            <p>
              Companies start sending interview requests. Talk to only the ones
              you like.
            </p>
          </div>
          <div className="hero-component">
            <img className="hero-img" src="./assets/icon2.png" alt="" />
            <h3>STEP 3: ACCEPT DREAM JOB</h3>
            <p>Compare your offers and accept the best one. Hired!</p>
          </div>
        </div>
      </div>
    </>
  );
}
