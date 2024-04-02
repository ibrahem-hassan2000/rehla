import Link from "next/link";
import React from "react";

function LayNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg ">
      <div className="container">
        <a routerlink="/home" className="navbar-brand" href="/home">
          <img src="/images/logo.png" alt="Rehlacar" />
        </a>
        <div className="navbar-toggler2">
          <Link className="btnNav" href="/account/login">
            Login
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/our-services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/prebooking/request">
                  Prebooking Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/tourism/tours">
                  Tourism Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/rehla-news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about/us">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  ContactUs
                </Link>
              </li>
            </ul>
            <a
              routerlink="/account/login"
              className="btnNav"
              href="/account/login"
            >
              Login
            </a>
            <button className="btnNav">
              عربي
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2296 5.65694C20.2162 7.26435 20.7373 9.11411 20.7346 11.0002V11.0005C20.7372 12.8866 20.2162 14.7364 19.2296 16.3438L19.224 16.3526C18.3086 17.8445 17.0259 19.0768 15.4985 19.9316C13.9711 20.7865 12.25 21.2353 10.4997 21.2354C8.74933 21.2354 7.02823 20.7865 5.50082 19.9317C3.97341 19.0768 2.69074 17.8446 1.77537 16.3527L1.76969 16.3438C0.785482 14.7352 0.264656 12.8861 0.264648 11.0004C0.264641 9.11464 0.785453 7.26552 1.76964 5.65698L1.77543 5.64797C2.6908 4.15607 3.97347 2.92385 5.50087 2.06903C7.02826 1.21421 8.74935 0.765356 10.4997 0.765366C12.25 0.765373 13.9711 1.21424 15.4985 2.06907C17.0259 2.92391 18.3085 4.15615 19.2239 5.64805L19.2296 5.65694ZM11.8079 2.51951C11.6129 2.33133 11.3884 2.17628 11.1434 2.06052C10.9422 1.96495 10.7223 1.91536 10.4996 1.91536C10.277 1.91536 10.0571 1.96495 9.85593 2.06052C9.38961 2.29871 8.99042 2.64999 8.69487 3.08225C8.09127 3.95447 7.64395 4.92501 7.37292 5.9505C8.41411 6.01457 9.45635 6.04721 10.4996 6.0484C11.5425 6.0484 12.5848 6.01576 13.6265 5.95049C13.4765 5.42322 13.2891 4.90731 13.0658 4.40668C12.7717 3.7026 12.3446 3.06186 11.8079 2.51951ZM1.43466 10.4254H5.56293C5.58981 9.27341 5.71467 8.12585 5.93616 6.99509C4.80765 6.89578 3.68203 6.75939 2.55928 6.58592C1.90183 7.76545 1.51751 9.07751 1.43466 10.4254ZM2.55928 15.4148C3.68158 15.2409 4.8076 15.1045 5.93734 15.0055C5.71541 13.8748 5.59028 12.7273 5.5633 11.5754H1.43466C1.5175 12.9232 1.90182 14.2353 2.55928 15.4148ZM9.19137 19.4812C9.3864 19.6694 9.61088 19.8245 9.85593 19.9402C10.0571 20.0358 10.277 20.0854 10.4996 20.0854C10.7223 20.0854 10.9422 20.0358 11.1434 19.9402C11.6097 19.702 12.0089 19.3507 12.3044 18.9185C12.908 18.0463 13.3553 17.0757 13.6264 16.0502C12.5852 15.9862 11.5429 15.9535 10.4996 15.9523C9.45679 15.9523 8.41448 15.985 7.37273 16.0502C7.52276 16.5775 7.71015 17.0934 7.93349 17.594C8.22756 18.2981 8.65465 18.9389 9.19137 19.4812ZM19.5646 11.5754H15.4364C15.4095 12.7273 15.2846 13.8749 15.0631 15.0056C16.1917 15.1049 17.3173 15.2413 18.44 15.4148C19.0975 14.2353 19.4818 12.9232 19.5646 11.5754ZM7.09279 7.0845C6.86789 8.18473 6.74087 9.30271 6.71322 10.4254H14.2862C14.2588 9.30272 14.132 8.18472 13.9073 7.08446C12.7727 7.15892 11.6368 7.1969 10.4996 7.19839C9.36334 7.1984 8.22772 7.16044 7.09279 7.0845ZM13.9065 14.9162C14.1314 13.816 14.2584 12.698 14.286 11.5754H6.7131C6.74049 12.698 6.86728 13.816 7.09197 14.9163C8.22661 14.8418 9.3625 14.8039 10.4996 14.8023C11.636 14.8023 12.7716 14.8403 13.9065 14.9162ZM15.436 10.4254H19.5646C19.4818 9.07751 19.0975 7.76545 18.44 6.58592C17.3177 6.75986 16.1917 6.89628 15.062 6.99519C15.2839 8.12587 15.409 9.27341 15.436 10.4254ZM17.7505 16.4733C16.7692 16.3317 15.785 16.2196 14.7979 16.137C14.6205 16.7975 14.3917 17.4432 14.1136 18.068C13.8596 18.643 13.5401 19.1868 13.1614 19.6884C14.9917 19.1271 16.5979 18.0018 17.7505 16.4733ZM4.07555 17.4244C5.12548 18.4754 6.41718 19.2527 7.83741 19.6883C7.81586 19.6604 7.7937 19.6337 7.77246 19.6053C7.04246 18.5544 6.51073 17.3789 6.20348 16.1368C5.21629 16.2204 4.2314 16.3326 3.2488 16.4733C3.50222 16.8089 3.77846 17.1267 4.07555 17.4244ZM3.24879 5.52747C4.23004 5.66905 5.21423 5.78114 6.20137 5.86373C6.37878 5.20318 6.6076 4.55753 6.88572 3.93268C7.13965 3.35768 7.45916 2.81393 7.83789 2.31226C6.00758 2.87359 4.40143 3.99889 3.24879 5.52747ZM16.9237 4.57627C15.8738 3.52534 14.5821 2.748 13.1619 2.31241C13.1834 2.34032 13.2056 2.36699 13.2268 2.39547C13.9568 3.44633 14.4886 4.6218 14.7958 5.8639C15.783 5.78029 16.7679 5.66814 17.7505 5.52746C17.4971 5.19179 17.2208 4.87398 16.9237 4.57627Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LayNav;
