function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h4">ABOUT</h2>
            <p className="main-p">
              At Tech Assist Solutions, we are your reliable partner in
              navigating the complex world of technology. As a premier tech
              support company, we specialize in providing comprehensive
              solutions to all your digital challenges. With a passion for
              problem-solving and a commitment to excellence, we empower
              individuals and businesses to harness the full potential of their
              devices and systems.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
