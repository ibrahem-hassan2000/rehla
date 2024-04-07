import React from "react";

function HeadContent({ title, dec, path }) {

  return (
    <section className="HeadContent">
      <div className="container">
        <div className="content">
          <h2>{title}</h2>
          <h3>{dec}</h3>
          <div className="path">
            <p>Home</p>
            <span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9.10606L0.89394 10L5.89394 5L0.89394 0L0 0.893939L4.10606 5L0 9.10606Z"
                  fill="white"
                />
              </svg>
            </span>
            <p>{path}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadContent;
