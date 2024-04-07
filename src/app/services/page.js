import React from "react";
import HeadContent from "../../../Components/HeadContent";

function page() {
  return (
    <>
    <HeadContent title={'Services'} dec={' An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula'} path={'Services'} />
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
    </>
  );
}

export default page;
