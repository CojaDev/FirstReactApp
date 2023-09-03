function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="holder">
            <div className="naslov">
              <h1>Welcome to StartupV</h1>
              <p>
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="input">
                <input type="email" id="email" placeholder="Your best Email" />
                <button type="button">Notify Me</button>
              </div>
            </div>
            <div className="hero-bg">
              <svg width="720" height="635" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="97.738%" id="a">
                    <stop stopColor="#151616" offset="0%"></stop>
                    <stop stopColor="#222424" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 0h720v504.382L279.437 630.304c-53.102 15.177-108.454-15.567-123.631-68.669-.072-.25-.142-.5-.211-.75L0 0z"
                  fill="url(#a)"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="section">
            <div className="secHeader">
              <i className="fa-solid fa-book"></i>
              <h2>Discover</h2>
            </div>
            <p>
              Unlock the future with StartupV. Our cutting-edge solutions are
              designed to revolutionize your industry. From innovative
              technologies to game-changing strategies, we are here to empower
              your success.
            </p>
          </div>

          <div className="section">
            <div className="secHeader">
              <i className="fa-solid fa-network-wired"></i>
              <h2>Connect</h2>
            </div>
            <p>
              Join our thriving community of visionaries, entrepreneurs, and
              experts. Connect with like-minded individuals, access valuable
              resources, and turn your ideas into reality with StartupV.
            </p>
          </div>

          <div className="section">
            <div className="secHeader">
              <i className="fa-solid fa-arrow-up-right-dots"></i>
              <h2>Grow</h2>
            </div>
            <p>
              Experience unparalleled growth with StartupV. Our proven track
              record and dedicated team will guide you every step of the way.
              Scale your business, exceed your goals, and embark on a journey to
              greatness.
            </p>
          </div>
        </div>
      </header>
      <footer>
        <div className="container">
          <hr />
          <div className="bottom">
            <p>© 2023 StartupV, All rights reserved</p>
            <div className="icons">
              <a href="#">
                {' '}
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-google" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Header;
