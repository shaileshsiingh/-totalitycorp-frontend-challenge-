import React, { useState } from "react";
// import { a } from "react-router-dom";
import "./header.css";
import bagsvg from "../../assets/header/bag.svg";
import favorsvg from "../../assets/header/favorites.svg";
import ordersvg from "../../assets/header/orders.svg";
import accountsvg from "../../assets/header/account.svg";
import signsvg from "../../assets/header/signIn.svg";

function Header() {
  const [hide1, setHide1] = useState();
  const [hide2, setHide2] = useState();
  const [hide3, setHide3] = useState();

  return (
    <>
      <div className="apple-header">
        <div className={hide2 ? "nav-container active" : "nav-container"}>
          <nav className={hide3 ? "move-up" : ""}>
            <ul className="mobile-nav">
              <li>
                <div
                  className="menu-icon-container"
                  onClick={() => setHide2(!hide2)}
                >
                  <div className="menu-icon">
                    <span className="line-1" />
                    <span className="line-2" />
                  </div>
                </div>
              </li>
              <li>
                <a href="# " className="a-logo">
                  {" "}
                </a>
              </li>
              <li className="uk-inline">
                <a
                  href
                  className="a-bag uk-button uk-button-default"
                  type="button"
                >
                  {" "}
                </a>

                <div data-uk-dropdown="mode: click" className="bagdropdown-am">
                  <p class="bagpara1-am">Your Bag is empty</p>
                  <hr style={{ marginTop: "6%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a href="# ">
                      <img src={bagsvg} alt="" class="bagsvg-am " />
                      &nbsp;Bag
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a href="# ">
                      <img src={favorsvg} alt="" class="bagsvg-am " />
                      &nbsp;Favorites
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a href="# ">
                      <img src={ordersvg} alt="" class="bagsvg-am " />
                      &nbsp;Orders
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="# ">
                      <img src={accountsvg} alt="" class="bagsvg-am " />
                      &nbsp;Account
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="/Signin">
                      <img src={signsvg} alt="" class="bagsvg-am " />
                      &nbsp;Sign in
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              className={
                hide1
                  ? "desktop-nav hide"
                  : "desktop-nav" && hide3
                  ? "desktop-nav move-down"
                  : "desktop-nav"
              }
              id="search1"
            >
              <li>
                <a to="/" className="a-logo">
                  {" "}
                </a>
              </li>
              <li>
                <a href="# ">Store</a>
              </li>
              <li>
                <a to="/machome">Mac</a>
              </li>
              <li>
                <a to="/ipad">iPad</a>
              </li>
              <li>
                <a to="iphone12">iPhone</a>
              </li>
              <li>
                <a to="/watch">Watch</a>
              </li>
              <li>
                <a to="/tv">TV & Home</a>
              </li>
              <li>
                <a to="/music">Only On Apple</a>
              </li>
              <li>
                <a to="/music">Accessories</a>
              </li>
              <li>
                <a to="/music">Music</a>
              </li>
              <li>
                <a to="/Support">Support</a>
              </li>
              <li>
                <a
                  href="# "
                  onClick={() => setHide1(true)}
                  className="a-search"
                >
                  {" "}
                </a>
              </li>

              <li className="uk-inline">
                <button
                  href="# "
                  className="a-bag uk-button uk-button-default"
                  type="button"
                >
                  {" "}
                </button>

                <div data-uk-dropdown="mode: click" className="bagdropdown-am">
                  <p class="bagpara1-am">Your Bag is empty</p>
                  <hr style={{ marginTop: "6%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="# ">
                      <img src={bagsvg} alt="" class="bagsvg-am " />
                      &nbsp;Bag
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="# ">
                      <img src={favorsvg} alt="" class="bagsvg-am " />
                      &nbsp;Favorites
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="# ">
                      <img src={ordersvg} alt="" class="bagsvg-am " />
                      &nbsp;Orders
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="# ">
                      <img src={accountsvg} alt="" class="bagsvg-am " />
                      &nbsp;Account
                    </a>
                  </div>
                  <hr style={{ marginTop: "2%" }} />
                  <div style={{ marginTop: "-5%" }}>
                    <a to="/Signin">
                      <img src={signsvg} alt="" class="bagsvg-am " />
                      &nbsp;Sign in
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          {/* End of navigation items */}
          <div
            className={hide1 ? "search-container" : "search-container hide"}
            id="search2"
          >
            <div className="a-search" />
            <div className="search-bar">
              <form action>
                <input type="text" placeholder="Search apple.com" />
              </form>
            </div>
            <div className="a-close" onClick={() => setHide1(false)} />
            <div className="quick-as">
              <h2>Quick as</h2>
              <ul>
                <li>
                  <a href="# ">Visiting an Apple Store FAQ</a>
                </li>
                <li>
                  <a href="# ">Shop Apple Store Online</a>
                </li>
                <li>
                  <a href="# ">Accessories</a>
                </li>
                <li>
                  <a href="# ">AirPods</a>
                </li>
                <li>
                  <a href="# ">AirTag</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-search-container">
            <div className="a-search" />
            <div className={hide3 ? "search-bar active" : "search-bar"}>
              <form action onClick={() => setHide3(true)}>
                <input type="text" placeholder="Search apple.com" />
              </form>
            </div>
            <span className="cancel-btn" onClick={() => setHide3(false)}>
              Cancel
            </span>
            <div className="quick-as">
              <h2>Quick as</h2>
              <ul>
                <li>
                  <a href="# ">Visiting an Apple Store FAQ</a>
                </li>
                <li>
                  <a href="# ">Shop Apple Store Online</a>
                </li>
                <li>
                  <a href="# ">Accessories</a>
                </li>
                <li>
                  <a href="# ">AirPods</a>
                </li>
                <li>
                  <a href="# ">AirTag</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={hide1 ? "overlay show" : "overlay"} />
      </div>
    </>
  );
}

export default Header;
