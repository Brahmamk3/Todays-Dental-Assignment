import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <h1 style={{textAlign:"center"}}>About Our Dental Clinic</h1>

      <section className="clinicBackgroundSection">
        <div className="clinicBackgroundDiv">
          <h2>Clinic Background</h2>
          <p>
            Todays Dental Partners was founded in 2017 by Dr. Sreekanth Emani,
            who opened his first dental office in Cayce, South Carolina. He
            partnered with his brother Sunil Eamani in 2018 to improve the unit
            economics. Together they have fine-tuned the art and science of
            running a successful dental practice.
            They have partnered in the past in 2007-2013 as well, when Dr.
            Emani graduated out of dental school and was working for others and
            then realized that the typical DSO that he was working for has
            placed monetary interests above everything else. He felt stifled by
            such practices and the brothers started their own clinic in 2008 and
            added a clinic in 2012.
            Dr. Emani had to move to South Carolina in 2013 to accommodate for
            his wife's job and his brother moved to India for family reasons,
            which resulted in Dr. Emani working for the DSO's again. This again
            brought him to light all the ills of certain DSO's.
            Upon further discussion with his brother, they decided to combine
            his Clinical Expertise and his brother's management experience of
            working for a fortune 50 company in a senior managerial role and
            create a Dental Partnership Organization TodaysdentalPartners.com
            and Dental Services Organization TodaysDentalservices.com to partner
            with and help other dentists with their learnings.
            We are offering up to 50% partnership to our dentist partners in our
            partner dental offices across the country. Our entire culture is
            designed to promote WIN-WIN relationships by treating people with
            respect and pursuing business process excellence that makes it
            easier to provide great patient care.
            Todays Dental services provides comprehensive business support
            services through exclusive long term agreements in a given area, so
            dentists can spend more time caring for their patients and less time
            on the administrative, marketing, and financial aspects of operating
            a dental practice.
          </p>
        </div>
      </section>

      <section className="PractitionerDetailsSection">
        <div className="PractitionerDetailsDiv">
          <h2>Practitioner Details</h2>
          <dl>
            <dt>M.Sudhakar</dt>
            <dd>
              Senior Orthodontist. Dr. Sudhakar has over 15 years of experience
              specializing in orthodontic treatments including braces and Invisalign.
              He is committed to creating beautiful, healthy smiles with personalized care.
              Known for his patient-centric approach, he stays updated with the latest
              orthodontic technologies to ensure effective treatment.
            </dd>

            <dt>K.Rangarao</dt>
            <dd>
              General Dentist. Dr. Rangagao has been serving the community for over 10 years
              with expertise in preventive dentistry and restorative care. He emphasizes patient
              education and comfort, making sure every patient feels at ease during their visits.
              His dedication to gentle care and precision has earned him great trust among patients.
            </dd>

            <dt>G.VijaySanti</dt>
            <dd>
              Cosmetic Dentist. With 12 years of experience in cosmetic dentistry,
              Dr. Vijashanti specializes in smile makeovers and teeth whitening.
              She combines artistic skill with advanced techniques to enhance patient confidence.
              Her friendly demeanor and commitment to excellence make her a favorite
              among patients seeking aesthetic dental treatments.
            </dd>
          </dl>
        </div>
      </section>

      <section>
        <div className="PhilosophyDiv">
          <h2>Mission Statement / Philosophy</h2>
          <p>
            At Today's Dental Services, our mission is simple — to empower smiles
            through compassionate, innovative, and affordable dental care. We
            believe that every patient deserves to be treated with respect,
            transparency, and empathy. Our philosophy centers around building
            long-term relationships and promoting oral health through education,
            prevention, and personalized treatments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
