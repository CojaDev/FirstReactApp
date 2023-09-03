import React, { useState, useEffect } from 'react';

function Nav() {
  const [isListVisible, setListVisible] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768); // Adjust the breakpoint as needed

  useEffect(() => {
    // Update the isWideScreen state when the window size changes
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  return (
    <>
      <nav>
        <img
          style={{
            left: isWideScreen ? '50px' : '20px',
          }}
          className="logo"
          src="/vite.svg"
        />
        <ul
          style={{
            display: isWideScreen ? 'flex' : isListVisible ? 'block' : 'none',
            borderTop: isWideScreen
              ? '0'
              : isListVisible
              ? '2px solid #c3c2c7'
              : 'none',
            width: isWideScreen ? 'auto' : isListVisible ? '100vw' : 'auto',
            margin: isWideScreen
              ? '0 50px 0 0'
              : isListVisible
              ? '60px auto auto auto'
              : 'auto',
          }}
        >
          <a href="#">
            <li className="active">
              <span>Home</span>
            </li>
          </a>
          <a href="#">
            <li>
              <span>About</span>
            </li>
          </a>
          <a href="#">
            <li>
              <span>Contact</span>
            </li>
          </a>
        </ul>
        <p>
          <i
            onClick={toggleList}
            className={isListVisible ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
          ></i>
        </p>
      </nav>
    </>
  );
}

export default Nav;
