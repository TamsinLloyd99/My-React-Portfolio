import React from "react";

function HomeContent() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="jumbotron container" id="Jumbotron">
            <div className="row">
              <h1 className="display-5">About Me</h1>
              <div className="profile"></div>
              <p>
                {" "}
                Hi, my name is Tamsin. I am an ex-primary school teacher based
                in London. I've recently made a big career change and am now
                training to become a front-end web-developer. I hope to improve
                my skills and build up this portfolio.
              </p>

              <p>
                My hobbies include cooking and baking , crocheting, pottery and
                looking after all of my 20+ indoor plants 🪴. My family are from
                the Orkney Isles and I have been spending my summers there since
                I can remember. It is for this reason that I have grown to love
                all things related to nature and hope to reflect that in my
                work. If you are interested, please check out some of my work
                below!{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="skills">
        <h1 className="display-5">Skills</h1>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card-body">
            <p className="card-text">
              So far I have learnt how to use HTML, CSS and Bootstrap. I hope to
              continue to increase my knowledge and be able to put it to use
              whilst training to become a front-end web developer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContent;
