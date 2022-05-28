import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-5">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/KwMc72b/me.jpg"
            className="w-full lg:w-96"
            alt=""
          />
        </div>
        <div>
          <div>
            <h2 className="text-accent text-xl lg:text-3xl mt-5">
              I am Minhazur Rahman Akash
            </h2>
            <small className="uppercase"> A curious learner</small>
          </div>
          <div>
            <p className="mt-10">
              I am a final year student of Dhaka polytechnic institute. My
              department is computer science and technology. i love programming
              so very much. thats why i enroll this course . s
            </p>
          </div>
          <div>
            <h2 className="text-center text-xl mb-10">My recent works are</h2>
            <div className="flex justify-between">
              <a className="btn btn-accent" href="https://bike-ghor.web.app/">
                Bike Ghor
              </a>
              <a
                className="btn btn-accent"
                href="https://deshibiker.netlify.app/"
              >
                Deshi Biker
              </a>
              <a
                className="btn btn-accent"
                href="https://wedding-events-2e625.web.app/"
              >
                Weding evet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
