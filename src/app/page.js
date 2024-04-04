import SayingSlider from "../../Components/SayingSlider";
import SliderImages from "../../Components/SliderImages";

export default function Home() {
  return (
    <main className="">
      <section className="header">
        <div className="svgHeader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,288L80,293.3C160,299,320,309,480,309.3C640,309,800,299,960,282.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="content">
            <div className="part1">
              <h1>
                Rehla App is The Best App For Booking Ride And Sharing Trips
              </h1>
              <p>
                Rehla is a ride sharing and a ride hailing service that links
                between passengers and vehicle owners heading to the same
                destination.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <img src="/images/appstore.webp" alt="appstore" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/playstore.webp" alt="playstore" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="part2">
              <img src="/images/headerImage.webp" alt="headerImage" />
            </div>
          </div>
        </div>
      </section>
      <section className="investor">
        <div className="container">
          <div className="parts">
            <div className="part">
              <img src="/images/img1.webp" alt="" />
            </div>
            <div className="part">
              <img src="/images/img2.webp" alt="" />
            </div>
            <div className="part">
              <img src="/images/img3.webp" alt="" />
            </div>
            <div className="part">
              <img src="/images/img4.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2 className="headTitle">
            <span>Rehla</span> Services{" "}
          </h2>
          <p className="dec">
            Fully layered dolor sit amet, nobis id expedita dolores officiis
            laboriosam.
          </p>
          <div className="parts">
            <a href="#" className="part">
              <img src="/images/serv1.webp" alt="service 1" />
              <h3>I'm going to</h3>
              <p>
                Passengers order a ride with a local driver to go to another
                place inside the city Ride-hailing.
              </p>
            </a>
            <div className="part">
              <img src="/images/serv2.webp" alt="service 1" />
              <h3>Prebooking trips</h3>
              <p>
                Passengers can make a prebooking trip order with a local driver
                to go to any place.
              </p>
            </div>
            <div className="part">
              <img src="/images/serv3.webp" alt="service 1" />
              <h3>Tourism Tours</h3>
              <p>
                Tourism expert creates a tour of the tourist cities and is
                searched for by regions.
              </p>
            </div>
            <div className="part">
              <img src="/images/serv1.webp" alt="service 1" />
              <h3>Sending Parcels</h3>
              <p>
                Sender offers a parcel to deliver between cities and wait for
                Rehla captain to accept it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <div className="parts">
            <div className="part1">
              <img src="/images/iphoneNews.webp" alt="iphoneNews" />
            </div>
            <div className="part2">
              <h2 className="headTitle">
                Stay tuned for new newsThey are coming with offers{" "}
              </h2>
              <h3>
                An enim nullam tempor gravida donec enim luctus risusd diam eget
                risus varius blandit sit amet.
              </h3>
              <ul>
                <li>
                  <h4>Feature Integration</h4>
                  <p>
                    We believe that designing products and services in close is
                    the only way to have a real impact on their business.
                  </p>
                </li>
                <li>
                  <h4>Multiple Discussions</h4>
                  <p>
                    We believe that designing products and have aclients is the
                    only way to have a real impact on their business.
                  </p>
                </li>
              </ul>
              <a href="#" className="btnPage">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="videos ">
        <div className="container">
          <div className="content">
            <div className="part1">
              <span className="headvid">About Rehla</span>
              <h2 className="headTitle">
                {" "}
                <span>Rehla</span> introducing video promotion{" "}
              </h2>
              <p>
                Rehla application .... the pleasure of traveling between cities
                at the lowest cost and more safety Rehlacar offers a unique
                travel experience between cities at the lowest cost and the most
                enjoyable and safe ways. Rehla application licensed by the
                Public Transport Authority and compatible with all safety and
                security requirements in Saudi Arabia, and is based on the
                principle of sharing travel costs between passengers and
                vehicles owners .
              </p>
              <a href="#" className="btnPage">
                Get Started
              </a>
            </div>
            <div className="part2">
              <div className="boxVideo">
                <iframe
                 
                  src="https://www.youtube.com/embed/OtTdBgQEceE"
                ></iframe>
              </div>
              <div className="boxLab"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="videos rev">
        <div className="container">
          <div className="content">
            <div className="part1">
              <span className="headvid">About Rehla</span>
              <h2 className="headTitle">
                {" "}
                <span>Rehla</span> introducing video promotion{" "}
              </h2>
              <p>
                Rehla application .... the pleasure of traveling between cities
                at the lowest cost and more safety Rehlacar offers a unique
                travel experience between cities at the lowest cost and the most
                enjoyable and safe ways. Rehla application licensed by the
                Public Transport Authority and compatible with all safety and
                security requirements in Saudi Arabia, and is based on the
                principle of sharing travel costs between passengers and
                vehicles owners .
              </p>
              <a href="#" className="btnPage">
                Get Started
              </a>
            </div>
            <div className="part2">
              <div className="boxVideo">
                <iframe
                 
                  src="https://www.youtube.com/embed/OtTdBgQEceE"
                ></iframe>
              </div>
              <div className="boxLab"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="videos ">
        <div className="container">
          <div className="content">
            <div className="part1">
              <span className="headvid">About Rehla</span>
              <h2 className="headTitle">
                {" "}
                <span>Rehla</span> introducing video promotion{" "}
              </h2>
              <p>
                Rehla application .... the pleasure of traveling between cities
                at the lowest cost and more safety Rehlacar offers a unique
                travel experience between cities at the lowest cost and the most
                enjoyable and safe ways. Rehla application licensed by the
                Public Transport Authority and compatible with all safety and
                security requirements in Saudi Arabia, and is based on the
                principle of sharing travel costs between passengers and
                vehicles owners .
              </p>
              <a href="#" className="btnPage">
                Get Started
              </a>
            </div>
            <div className="part2">
              <div className="boxVideo">
                <iframe
                 
                  src="https://www.youtube.com/embed/OtTdBgQEceE"
                ></iframe>
              </div>
              <div className="boxLab"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="container">
          <div className="parts">
            <div className="part1">
              <h2 className="headTitle">
                Join tourism experts as a <span>Rehla</span> traveler
              </h2>
              <div className="phoneImages">
                <img src="/images/phoneImg1.webp" alt="phoneImage1" />
                <img src="/images/phoneImg1.webp" alt="phoneImage2" />
                <img src="/images/phoneImg1.webp" alt="phoneImage3" />
              </div>
            </div>
            <div className="part2">
              <div className="step">
                <div className="num">
                  <span>1</span>
                </div>
                <div className="info">
                  <h3>First Step</h3>
                  <p>
                    Please Click on the Join Now and fill in your data as a
                    tourist traveler
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="num">
                  <span>2</span>
                </div>
                <div className="info">
                  <h3>Second Step</h3>
                  <p>Fill out your tourism information form</p>
                </div>
              </div>
              <div className="step">
                <div className="num">
                  <span>3</span>
                </div>
                <div className="info">
                  <h3>Third Step</h3>
                  <p>
                    After reviewing our data, you will be able to create tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps rev">
        <div className="container">
          <div className="parts">
            <div className="part1">
              <h2 className="headTitle">
                Book your prebooking <span>Rehla</span> trip now
              </h2>
              <div className="phoneImages">
                <img src="/images/phoneImg1.webp" alt="phoneImage1" />
                <img src="/images/phoneImg1.webp" alt="phoneImage2" />
                <img src="/images/phoneImg1.webp" alt="phoneImage3" />
              </div>
            </div>
            <div className="part2">
              <div className="step">
                <div className="num">
                  <span>1</span>
                </div>
                <div className="info">
                  <h3>First Step</h3>
                  <p>
                    Login with your account for Rehla or create an account for
                    the first time through our website or App
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="num">
                  <span>2</span>
                </div>
                <div className="info">
                  <h3>Second Step</h3>
                  <p>Go to Prebooking Trips</p>
                </div>
              </div>
              <div className="step">
                <div className="num">
                  <span>3</span>
                </div>
                <div className="info">
                  <h3>Third Step</h3>
                  <p>
                    Select your destination and departure date and book now and
                    wait for your offer to be accepted by one of our captains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="steps">
        <div className="container">
          <div className="parts">
            <div className="part1">
              <h2 className="headTitle">
                Join tourism experts as a <span>Rehla</span> traveler
              </h2>
              <div className="phoneImages">
                <img src="/images/phoneImg1.webp" alt="phoneImage1" />
                <img src="/images/phoneImg1.webp" alt="phoneImage2" />
                <img src="/images/phoneImg1.webp" alt="phoneImage3" />
              </div>
            </div>
            <div className="part2">
              <div className="step">
                <div className="num">
                  <span>1</span>
                </div>
                <div className="info">
                  <h3>First Step</h3>
                  <p>
                    Please Click on the Join Now and fill in your data as a
                    tourist traveler
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="num">
                  <span>2</span>
                </div>
                <div className="info">
                  <h3>Second Step</h3>
                  <p>Fill out your tourism information form</p>
                </div>
              </div>
              <div className="step">
                <div className="num">
                  <span>3</span>
                </div>
                <div className="info">
                  <h3>Third Step</h3>
                  <p>
                    After reviewing our data, you will be able to create tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionCards">
        <div className="container">
          <span className="headCards">Featured coures</span>
          <h2 className="headTitle">
            Charge <span>Rehla</span> Cards Now
          </h2>
          <p className="dec">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            integer at odio velna vitae auctor integer.
          </p>
          <div className="cards">
            <div className="cardItem">
              <div className="imgBox">
                <img alt="card name img" src="/images/card1.jpeg" />
              </div>
              <div className="cardInfo">
                <div className="headPrice">
                  <h3>
                    <span>Rehla - </span> 15 SAR
                  </h3>
                </div>
                <div className="price">
                  <h4>
                    <span>Price: </span> 15 SAR
                  </h4>
                </div>
                <a href="" className="btnPage">
                  Charge wallet
                </a>
              </div>
            </div>
            <div className="cardItem">
              <div className="imgBox">
                <img alt="card name img" src="/images/card1.jpeg" />
              </div>
              <div className="cardInfo">
                <div className="headPrice">
                  <h3>
                    <span>Rehla - </span> 15 SAR
                  </h3>
                </div>
                <div className="price">
                  <h4>
                    <span>Price: </span> 15 SAR
                  </h4>
                </div>
                <a href="" className="btnPage">
                  Charge wallet
                </a>
              </div>
            </div>
            <div className="cardItem">
              <div className="imgBox">
                <img alt="card name img" src="/images/card1.jpeg" />
              </div>
              <div className="cardInfo">
                <div className="headPrice">
                  <h3>
                    <span>Rehla - </span> 15 SAR
                  </h3>
                </div>
                <div className="price">
                  <h4>
                    <span>Price: </span> 15 SAR
                  </h4>
                </div>
                <a href="" className="btnPage">
                  Charge wallet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="screenshots">
        <div className="container">
          <h2 className="headTitle">
            <span>Rehla</span> screenshots
          </h2>
          <p className="dec">
            An enim nullam tempor sapien gravida donec enim ipsum porta justo
            integer at odio velna vitae auctor integer.
          </p>
          <div className="sliderImages">
            <SliderImages />
          </div>
        </div>
      </section>
      <section className="counters">
        <div className="container">
          <div className="parts">
            <div className="part">
              <svg
                width="55"
                height="60"
                viewBox="0 0 55 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M22.8259 1.17634C25.5496 -0.392113 28.9053 -0.392114 31.629 1.17634L50.0534 11.7862C52.7771 13.3546 54.4549 16.2533 54.4549 19.3902V40.6098C54.4549 43.7467 52.7771 46.6454 50.0534 48.2138L31.629 58.8237C28.9053 60.3921 25.5496 60.3921 22.8259 58.8237L4.40154 48.2138C1.67786 46.6454 0 43.7467 0 40.6098V19.3902C0 16.2533 1.67786 13.3546 4.40154 11.7862L22.8259 1.17634Z"
                  fill="#00BB98"
                />
                <path
                  d="M26.9366 29.2666C29.779 29.2666 32.0832 26.9683 32.0832 24.1333C32.0832 21.2983 29.779 19 26.9366 19C24.0942 19 21.79 21.2983 21.79 24.1333C21.79 26.9683 24.0942 29.2666 26.9366 29.2666Z"
                  fill="#00BB98"
                />
                <path
                  d="M37.2288 32.2004C39.2591 32.2004 40.9049 30.5588 40.9049 28.5338C40.9049 26.5088 39.2591 24.8672 37.2288 24.8672C35.1986 24.8672 33.5527 26.5088 33.5527 28.5338C33.5527 30.5588 35.1986 32.2004 37.2288 32.2004Z"
                  fill="#00BB98"
                />
                <path
                  d="M16.7474 32.2004C18.7776 32.2004 20.4235 30.5588 20.4235 28.5338C20.4235 26.5088 18.7776 24.8672 16.7474 24.8672C14.7171 24.8672 13.0713 26.5088 13.0713 28.5338C13.0713 30.5588 14.7171 32.2004 16.7474 32.2004Z"
                  fill="#00BB98"
                />
                <path
                  d="M26.9359 30.7324C21.6658 30.7324 17.3779 35.0092 17.3779 40.2657C17.3779 40.6705 17.7073 40.999 18.1132 40.999H35.7586C36.1644 40.999 36.4938 40.6705 36.4938 40.2657C36.4938 35.0092 32.206 30.7324 26.9359 30.7324Z"
                  fill="#00BB98"
                />
                <path
                  d="M18.0153 33.8244C17.5654 33.7291 17.108 33.666 16.6434 33.666C12.9952 33.666 10.0264 36.6272 10.0264 40.2659C10.0264 40.6707 10.3558 40.9993 10.7616 40.9993H16.0434C15.9611 40.769 15.9081 40.5241 15.9081 40.2659C15.9081 37.8592 16.6963 35.6372 18.0153 33.8244Z"
                  fill="#00BB98"
                />
                <path
                  d="M37.2294 33.666C36.7647 33.666 36.3074 33.7291 35.8574 33.8244C37.1764 35.6372 37.9646 37.8592 37.9646 40.2659C37.9646 40.5241 37.9117 40.769 37.8293 40.9993H43.1111C43.517 40.9993 43.8464 40.6707 43.8464 40.2659C43.8464 36.6272 40.8775 33.666 37.2294 33.666Z"
                  fill="#00BB98"
                />
              </svg>

              <div className="details">
                <h2>28K</h2>
                <p>Users</p>
              </div>
            </div>
            <div className="part">
              <svg
                width="56"
                height="60"
                viewBox="0 0 56 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M23.7693 1.17634C26.493 -0.392113 29.8487 -0.392114 32.5724 1.17634L50.9968 11.7862C53.7204 13.3546 55.3983 16.2533 55.3983 19.3902V40.6098C55.3983 43.7467 53.7204 46.6454 50.9968 48.2138L32.5724 58.8237C29.8487 60.3921 26.493 60.3921 23.7693 58.8237L5.3449 48.2138C2.62122 46.6454 0.943359 43.7467 0.943359 40.6098V19.3902C0.943359 16.2533 2.62122 13.3546 5.3449 11.7862L23.7693 1.17634Z"
                  fill="#FFC83E"
                />
                <path
                  d="M31.2128 38.0099L29.5629 39.6555V32.5461C29.5629 31.8436 28.9926 31.2734 28.2869 31.2734C27.5813 31.2734 27.0109 31.8436 27.0109 32.5461V39.6555L25.3611 38.0099C24.8622 37.5123 24.0557 37.5123 23.5568 38.0099C23.0579 38.5075 23.0579 39.3119 23.5568 39.8095L27.3836 43.6264C27.501 43.7448 27.6426 43.8377 27.7996 43.9026C27.9553 43.9662 28.1211 44.0006 28.287 44.0006C28.4529 44.0006 28.6188 43.9662 28.7744 43.9026C28.9314 43.8377 29.073 43.7448 29.1904 43.6264L33.0172 39.8095C33.5161 39.3119 33.5161 38.5075 33.0172 38.0099C32.5182 37.5122 31.7117 37.5122 31.2128 38.0099Z"
                  fill="#FFC83E"
                />
                <path
                  d="M39.6982 25.1941C39.1151 20.8159 35.0956 16 30.2621 16C27.6705 16 25.0355 17.2702 23.2759 19.3078C22.7132 19.1028 22.1172 18.9972 21.5099 18.9972C18.7601 18.9972 16.5066 21.1583 16.3688 23.868C14.3374 25.1738 12.9746 27.5856 12.9746 29.9999C12.9746 31.5119 13.4773 33.1893 14.354 34.6008C15.5151 36.4729 17.6448 37.6362 19.911 37.6362H20.863C21.0505 37.1067 21.3427 36.618 21.7523 36.2095C22.4746 35.4878 23.4367 35.0908 24.4587 35.0908V32.5453C24.4587 30.4402 26.175 28.7271 28.2868 28.7271C30.3973 28.7271 32.1148 30.4402 32.1148 32.5453V35.0908C33.1357 35.0908 34.0978 35.4878 34.8213 36.2095C35.2309 36.618 35.5218 37.1067 35.7106 37.6362H37.0466C40.3579 37.6362 43.2174 35.1773 43.5569 32.0375C43.5849 31.7868 43.599 31.531 43.599 31.2727C43.599 28.3505 42.0984 26.0634 39.6982 25.1941Z"
                  fill="#FFC83E"
                />
              </svg>
              <div className="details">
                <h2>13K</h2>
                <p>Download</p>
              </div>
            </div>
            <div className="part">
              <svg
                width="56"
                height="60"
                viewBox="0 0 56 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M23.7127 1.17634C26.4363 -0.392113 29.792 -0.392114 32.5157 1.17634L50.9401 11.7862C53.6638 13.3546 55.3417 16.2533 55.3417 19.3902V40.6098C55.3417 43.7467 53.6638 46.6454 50.9401 48.2138L32.5157 58.8237C29.792 60.3921 26.4363 60.3921 23.7127 58.8237L5.28826 48.2138C2.56458 46.6454 0.886719 43.7467 0.886719 40.6098V19.3902C0.886719 16.2533 2.56458 13.3546 5.28826 11.7862L23.7127 1.17634Z"
                  fill="#2B59FF"
                />
                <path
                  d="M18.5749 26.2852H14.8509C14.3368 26.2852 13.9199 26.7009 13.9199 27.2138V42.0708C13.9199 42.5836 14.3367 42.9994 14.8509 42.9994H18.5748C19.0889 42.9994 19.5058 42.5837 19.5058 42.0708V27.2137C19.5058 26.7009 19.0891 26.2852 18.5749 26.2852Z"
                  fill="#2B59FF"
                />
                <path
                  d="M41.8291 28.7471C41.6649 27.3067 40.3158 26.2857 38.8624 26.2857H31.6042C32.221 25.1841 32.5521 22.0682 32.5374 20.7953C32.5131 18.6884 30.7638 17 28.6513 17H27.8831C27.3685 17 26.9521 17.4153 26.9521 17.9286C26.9521 20.0759 26.1138 23.9516 24.5329 25.5286C23.4687 26.5899 22.559 26.9745 21.3662 27.5691V41.5023C23.1925 42.1094 25.5112 43 29.0455 43H35.1355C37.1421 43 38.705 41.1463 37.9274 39.1878C39.1121 38.8659 39.9857 37.7823 39.9857 36.5C39.9857 36.1382 39.9157 35.7918 39.7893 35.4735C41.7857 34.931 42.5205 32.4723 41.1349 30.9286C41.644 30.3613 41.9247 29.5855 41.8291 28.7471Z"
                  fill="#2B59FF"
                />
              </svg>
              <div className="details">
                <h2>68K</h2>
                <p>Likes</p>
              </div>
            </div>
            <div className="part">
              <svg
                width="56"
                height="60"
                viewBox="0 0 56 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M23.656 1.17634C26.3797 -0.392113 29.7354 -0.392114 32.4591 1.17634L50.8835 11.7862C53.6072 13.3546 55.285 16.2533 55.285 19.3902V40.6098C55.285 43.7467 53.6072 46.6454 50.8835 48.2138L32.4591 58.8237C29.7354 60.3921 26.3797 60.3921 23.656 58.8237L5.23162 48.2138C2.50794 46.6454 0.830078 43.7467 0.830078 40.6098V19.3902C0.830078 16.2533 2.50794 13.3546 5.23162 11.7862L23.656 1.17634Z"
                  fill="#222D61"
                />
                <path
                  d="M41.0844 26.8942L34.8285 32.9763L36.3069 41.561C36.3181 41.6302 36.3099 41.701 36.2834 41.7659C36.2568 41.8307 36.2129 41.8871 36.1565 41.9287C36.0915 41.9745 36.014 41.9994 35.9345 42C35.8739 42.0002 35.8143 41.9847 35.7615 41.955L28.031 37.9028L20.3006 41.955C20.2388 41.9876 20.1691 42.0025 20.0993 41.9979C20.0295 41.9932 19.9624 41.9693 19.9056 41.9287C19.8491 41.8871 19.8052 41.8307 19.7786 41.7659C19.7521 41.701 19.744 41.6302 19.7551 41.561L21.2335 32.9763L14.9776 26.8942C14.928 26.8451 14.893 26.7832 14.8766 26.7154C14.8603 26.6476 14.8632 26.5765 14.8851 26.5103C14.907 26.444 14.9469 26.3852 15.0005 26.3403C15.0541 26.2955 15.1191 26.2664 15.1883 26.2564L23.8291 25.0032L27.6924 17.1914C27.7275 17.133 27.7771 17.0847 27.8364 17.0512C27.8958 17.0176 27.9628 17 28.031 17C28.0992 17 28.1663 17.0176 28.2256 17.0512C28.2849 17.0847 28.3345 17.133 28.3696 17.1914L32.2329 25.0032L40.8737 26.2564C40.9429 26.2664 41.008 26.2955 41.0615 26.3403C41.1151 26.3852 41.155 26.444 41.1769 26.5103C41.1988 26.5765 41.2017 26.6476 41.1854 26.7154C41.169 26.7832 41.1341 26.8451 41.0844 26.8942Z"
                  fill="#222D61"
                />
              </svg>
              <div className="details">
                <h2>10K</h2>
                <p>5 Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="saying">
        <div className="container">
          <div className="content">
            <div className="part1">
              <h2>What clients are saying</h2>
              <div className="boxClientSay">
                <SayingSlider />
              </div>
            </div>
            <div className="part2">
              <img src="/images/imagesay.webp" alt="poeple" />
            </div>
          </div>
        </div>
      </section>
      <section className="message">
        <div className="contant">
          <h2>Rehla is available for all devices</h2>
          <p>
            A Private Limited is the most popular type of partnership Malta. The
            limited liabilityis, in fact, the only type of the company allowed
            by Companies.
          </p>
          <ul>
            <li>
              <a href="#">
                <img src="/images/appstore.webp" alt="appstore" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/playstore.webp" alt="playstore" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
