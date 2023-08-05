export default function Reviews() {
  return (
    <>
      <div className="review-container">
        <div className="review-block">
          <div className="review-comment-first">
            <p>
              "It was a really cool experience with coursify. It was very simple
              and clean without the bugging from job consultants. Keep up the
              good work guys!"
            </p>
          </div>
          <div className="review-person">
            <div className="review-person-image">
              <img src="./assets/john.png" alt="" />
            </div>
            <div className="review-person-designation">
              <h4>Tushar, Hired by Paytm</h4>
              <p>as Senior Engineering Manager</p>
            </div>
          </div>
        </div>
        <div className="review-block">
          <div className="review-comment-second">
            <p>
              "Little did I know about the reach of coursify. They have hundreds
              of start-ups searching for candidates. I received a good number of
              offers!"
            </p>
          </div>
          <div className="review-person">
            <div className="review-person-image">
              <img src="./assets/mark.png" alt="" />
            </div>
            <div className="review-person-designation">
              <h4>Pravesh, Hired by Wooplr</h4>
              <p>as Software Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="review-button">
        <div className="review-button-container">
          <button>Your Dream Job</button>
        </div>
      </div>
    </>
  );
}
