import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Make sustainability a strength in your business with NetNada</h3>
          <p>
            NetNada was built on the mission that companies, no matter their
            size, have a vital role to play in the future of our planet. By
            giving organizations like Dexus, Merivale, URM and M.J. Bale the
            tools to measure, report, and reduce their greenhouse gas emissions,
            we can change the trajectory of climate change.
          </p>
          <p>
            Our digital platform allows businesses to accurately measure,
            request and share carbon data with their clients and supply chain,
            empowering everyone to make informed, auditable, and sustainable
            decisions.
          </p>
          <a
            href="https://www.linkedin.com/company/netnada/about/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
