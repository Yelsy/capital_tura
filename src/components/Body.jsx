import React from "react";



const Body = () => {
  return (
    <section  id="home" className="min-h-[90vh] bg-black grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl text-white font-bold xl:leading-[7.5rem]">
          CAPITAL TURA {" "}
            <span className="text-primary py-2 px-6 inline-block">
            Inversiones conscientes
            </span>
          </h1>
        
         
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="logo.jpg"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
          />
          
        </div>
     

       
      </div>
    </section>
  );
};

export default Body;
