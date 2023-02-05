import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Thomas BORTOLATO<br></br>
                21 ans
              </p>
            </div>
            <div>
              <p>
              Titulaire d'un BAC en MELEC (Métier de l'électricité et de ses environnements connectés), j'ai toujours été attiré par l'univers informatique. 
              C'est pourquoi, après 4 ans de développement, j'ai décidé de me perfectionner en suivant une formation à distance avec la 3wa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;