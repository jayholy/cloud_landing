import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full my-32">
      <div className="max-w-[ 1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world{" "}
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            exercitationem laudantium omnis possimus iusto facilis, id tenetur
            eaque. Recusandae, quidem.
          </p>
        </div>
        <div className=" grid md:grid-cols-3 gap-5 px-2 text-center">
          <div className="border py-8 rounded-xl  shadow-xl ">
            <p className="text-indigo-500 text-6xl font-bold">100%</p>
            <p classname="text-gray-400 mt-2"> Completion</p>
          </div>

          <div className="border py-8 rounded-xl  shadow-xl ">
            <p className="text-indigo-500 text-6xl font-bold">24/7</p>
            <p classname="text-gray-400 mt-2"> Delivery</p>
          </div>

          <div className="border py-8 rounded-xl  shadow-xl ">
            <p className="text-indigo-500 text-6xl font-bold">100K</p>
            <p classname="text-gray-400 mt-2"> Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About