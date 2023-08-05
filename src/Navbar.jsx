export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-brand">
          <img src="./assets/centercode.svg" className="company-logo" alt="" />
          <p>Coursify</p>
        </div>
        <div className="btn-group">
          <button className="btn">For Employers</button>
          <button className="btn">Refer & Earn 15k</button>
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </>
  );
}
