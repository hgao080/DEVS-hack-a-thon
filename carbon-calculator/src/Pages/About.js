import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./About.css";

const About = () => {
  return ( 
    <div className="">
      <Header />
      <Nav />
      <div className="header">
        <h1 className="">About Us</h1>
      </div>

      <section className="about">
        <div className="main">
          <img src='tree.jpg' />
          <div className="discription">
            <p>Welcome to GreenPrintLife, where we are dedicated to fostering a sustainable future for all.
            Founded on the principles of environmental stewardship and community empowerment, GreenPrintLife strives to
            make a meaningful impact through innovative solutions and collaborative efforts.</p>
           <p>At GreenPrintLife, we believe that every individual has the power to contribute to a greener, more
            sustainable world. Through education, advocacy, and hands-on initiatives, we empower communities to adopt 
            eco-friendly practices and embrace sustainable living.</p>
           <p> Our mission is not just to reduce carbon footprints but to inspire a global movement towards a healthier
            planet. By promoting renewable energy, conservation efforts, and sustainable development, GreenPrintLife 
            is committed to creating a legacy of environmental responsibility for generations to come.</p>
           <p> Join us on our journey towards a cleaner, greener future. Together, we can make a difference—one green 
            step at a time.</p>
          </div>
        </div>
      </section>
    </div>
   );
}
 
export default About;