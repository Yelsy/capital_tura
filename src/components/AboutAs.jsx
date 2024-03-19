import React from "react";

const AboutAs = () => {
  return(
    <section id="aboutAs" className="bg-black py-12 lg:py-16">
      {/* Misión */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center mb-12 lg:mb-0">
        {/* Contenido de la misión */}
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl text-primary text-center lg:text-4xl font-bold mb-4">MISION</h2>
          <p className="text-gray-600 text-xl leading-[2.5rem]">
          ser un equipo humano dedicado a ganar el máximo beneficio económico del proceso cuarta revolución industrial trabajando como un centro neurálgico de información, educación e intercambio de valor en cuatro estrategias financieras al servicio de la propuesta redi que es el despertar, la abundancia y la iluminación de una humanidad unida en la frecuencia del amor incondicional y la dicha infinita
          </p>
        </div>

        {/* Imagen de la misión */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            className="w-full h-auto rounded-lg"
            src="mision.png"
            alt="Misión Imagen"
          />
        </div>
      </div>

      {/* Visión */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Imagen de la visión */}
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto rounded-lg"
            src="estrategy.png"
            alt="Visión Imagen"
          />
        </div>

        {/* Contenido de la visión */}
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl lg:text-4xl text-primary text-center font-bold m-8 mb-4">ESTRATEGIAS:</h2>
          <ul className="text-gray-500 text-xl leading-[2.5rem]">
            <li>1. educación descentralizada en economía, finanzas, activos financieros y minería de criptomonedas.</li>
            <li>2. comunicación actualizada de momentos adecuados para acumular o distribuir activos financieros deflacionarios.</li>
            <li>3. facilitar favores de intercambio de oro, plata y trece criptomonedas a través de medios descentralizados, prácticos y libres del egoísmo centralizado sith.</li>
            <li>4. unir contactos conscientes que replican el modelo de servicio descentralizado para servir como nodos de la red que fortalece el modelo de economías deflacionarias en uniones territoriales descentralizadas.</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center mb-12 lg:mb-0">
        {/* Contenido de la misión */}
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl text-primary text-center lg:text-4xl font-bold mb-4">VISION</h2>
          <h4 className="text-primary text-center"> economías deflacionarias en uniones territoriales descentralizadas</h4>
          <p className="text-gray-500 text-xl leading-[2.5rem]">
          ser un nodo sostenible de valor para la red de individuos conscientes que viven en uniones territoriales descentralizadas de economías deflacionarias cooperando entre sí al servicio del propósito redi.
          </p>
        </div>

        {/* Imagen de la misión */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            className="w-full h-auto rounded-lg"
            src="vision.png"
            alt="Misión Imagen"
          />
        </div>
      </div>

      <div className="container mx-auto items-center p-12">
        {/* Contenido del tercer bloque */}
        <div className="lg:pr-8">
          <h2 className="text-3xl lg:text-4xl text-primary text-center font-bold mb-4">ECONOMIAS DEFLACIONARIAS</h2>
          <ul className="text-gray-400 list-none pl-4 lg:pl-0">
            <li className="mb-4">relacionar el precio de monero y bitcoin (entre otras criptos) en base al precio del oro y la plata nos permitiría crear economías deflacionarias si los precios de nuestros bienes y servicios se establecen en oro y monero y bitcoin. actualmente el precio de un monero oscila entre $140 y $160.</li>
            <li className="mb-2">a 2023, existirían 208 mil toneladas de oro y 18,3 millones de monero. por lo tanto, la relación entre oro y monero podría girar en torno al orden de 1:10 aproximadamente.</li>
            <li className="mb-2">así, si un kilo de oro costase 10 moneros, dado que un kilo de oro cuesta $60 000, el precio de un monero sería de $6000. mucho crecimiento por delante.</li>
          </ul>
        </div>

        {/* Imagen del tercer bloque */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <img
            className="w-full h-auto rounded-lg"
            src="deflacionaria.png"
            alt="Imagen"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
    
};

export default AboutAs;