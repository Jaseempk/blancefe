// import logo from "../assets/category_thumbnails/doingfreelance.png"
// const logo = import("../assets/category_thumbnails/doingfreelance.png");

function About() {
  return (
    <>

      <div className="logo-text">
        <h1>Welcome to DoingFreelance</h1>
      </div>

      <h2>The decentralized freelance marketplace</h2>
      <div id="how-it-works">
        <ul style={{ listStyle: "none" }}>
          <li>
            Welcome to our decentralized freelance marketplace, where you can
            find and hire talented freelancers from around the world.
          </li>
          <li>
            Our platform offers a fair and transparent way for freelancers and
            clients to connect and collaborate, using the latest blockchain
            technology.
          </li>
          <li>
            Whether you're looking for a freelance writer, designer,
            programmer, or marketer, our platform has a diverse range of
            skilled professionals ready to work with you.
          </li>
          <li>
            With no intermediaries, you can trust that your payments will be
            securely and instantly transferred directly to your freelancer,
            with no hidden fees or delays.
          </li>
          <li>
            Join our growing community of freelancers and clients, and
            experience the benefits of a decentralized and borderless
            marketplace for the gig economy.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;