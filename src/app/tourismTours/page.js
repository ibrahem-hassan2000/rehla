import React from "react";
import HeadContent from "../../../Components/HeadContent";

function page() {
  return (
    <>
      <HeadContent
        title={"Tourism Tours"}
        dec={
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula "
        }
        path={"Tourism Tours"}
      />
      <section className="tourism">
        <div className="container">
          <div className="content">
            <h2 className="headTitle"> <span>Rehla</span> Tourism Tours</h2>
            <p>Fully layered dolor sit amet, nobis id expedita dolores officiis laboriosam.</p>
            <div className="parts">
                <div className="part">
                    <img src="/images/tours1.png" alt="Makkah"/>
                    <p>Makkah</p>
                </div>
                <div className="part">
                    <img src="/images/tours2.png" alt="Al-Ula"/>
                    <p>Al-Ula</p>
                </div>
                <div className="part">
                    <img src="/images/tours3.png" alt="Al Ahsa"/>
                    <p>Al Ahsa</p>
                </div>
                <div className="part">
                    <img src="/images/tours4.png" alt="Al-Medina"/>
                    <p>Al-Medina</p>
                </div>
                <div className="part">
                    <img src="/images/tours5.png" alt="Riyadh"/>
                    <p>Riyadh</p>
                </div>
                <div className="part">
                    <img src="/images/tours6.png" alt="Jizan"/>
                    <p>Jizan</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
