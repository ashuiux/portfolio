import React from "react";
import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Ignacio Guillén Torres",
    work: "Social Media Strategist @ Pulsara",
    feedback: `I had the pleasure of taking a UI/UX design course with Aswini, and I can honestly say that she is one of the best instructors I have ever had. 

She has a <strong> deep knowledge and understanding of the principles and practices of user interface and user experience design,  </strong> and she is able to explain them in a clear and engaging way. 

Aswini is also very patient and supportive of her students. She always encourages us to ask questions, share our ideas, and give feedback to each other. 

On a personal note, she has also helped me develop my <span className="highlight">confidence, creativity, and critical thinking skills</span>, and I will be forever grateful for that.`,
  },
  {
    id: 2,
    name: "Wakana Sakai",
    work: "Product Designer @ TAM, Inc.",
    feedback: `I have had the pleasure of working closely with Ash as a colleague in our UI/UX instruction team, and I cannot speak highly enough of her. 

Ash embodies <strong>kindness, professionalism, and a deep commitment</strong> to helping others succeed. 

As an instructor, Ash brings not only a wealth of knowledge and expertise in UI/UX design but also a genuine passion for teaching and mentoring students. 

Her dedication to fostering a <span className="highlight">supportive learning environment</span> is evident in the way she interacts with her students—always patient, encouraging, and eager to lend a helping hand.`,
  },

  {
    id: 3,
    name: "Art Titov",
    work: " UI/UX Designer",
    feedback: `I know Ashe from Cornerstone College – we worked together at the tech campus, teaching UX/UI Design. 
      
      She’s a kind person, approachable and has a fun personality. <strong> An experienced designer and a very competent instructor, Ash is always happy to share her experience and teaching tips.</strong>  
      
      Her dedication to the materials taught in the program and to the students is reflected in her excellent time management skills as she took on extra courses to teach (and that means loads more marking and student commitments) while keeping on top of industry trends, design techniques and approaches.`,
  },
  {
    id: 4,
    name: "Paula Botega ",
    work: "Operations manager @ CICCC",
    feedback: `Aswini is a great addition to the team, she's detail-oriented, thoughtful, and always open to feedback. 
      <strong> Her knowledge and skills add a lot to the program  and to the students and I'm glad to have her as part of the team. </strong>  Any team would benefit from having Aswini on board.`,
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Collaboration & Leadership</h2>
      <div className="testimonials__subsection">
        <h3 className="testimonials__subtitle">
          Effective collaboration and clear communication are at the heart of
          meaningful teamwork—I lead by example. Here’s what my peers,
          colleagues, and students have to say about my approach to working
          together and sharing knowledge.
        </h3>
        <ul className="testimonials__list">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials__item">
              <div className="testimonials__heading">
                <div className="testimonials__name">{testimonial.name}</div>
                <div className="testimonials__work">{testimonial.work}</div>
              </div>
              {testimonial.feedback.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="testimonials__feedback"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;