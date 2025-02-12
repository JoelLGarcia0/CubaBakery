import { line, menubg } from '@/public/assests'
import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <section id="menu" className="relative w-full min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={menubg} 
          alt="Cuban Food"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      {/* Scrollable Menu Content */}
      <div className="relative z-10 w-full max-w-contentContainer mx-auto px-6 py-12 bg-black bg-opacity-70 rounded-lg shadow-lg h-[100vh] overflow-auto">
        
        <h2 className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mb-2">Family Specials</h2>
        {/* Line Seperator */}
        <Image
        src={line}
        alt="line seperator" 
        width = {400}
        className='mx-auto -mb-8 -mt-14 items-center'
        />

        {/* Specials Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Column 1 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Especiale de la Casa</h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #1</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$159</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Arroz Imperial (Bandeja Grande) / Imperial Rice (Full Pan)</li>
              <li>Maduros (Bandeja Pequena) / Plantains (Half Pan)</li>
              <li>Ensalada (Bandeja Pequena) / Salad (Half Pan)</li>
              <li>25 Panecitos Cubanos / 25 Cuban Dinner Rolls</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">NOCHE CARIBEÑA</h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #2</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$211</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Lechon Asado (Bandeja Grande) / Roast Pig (Full Pan)</li>
              <li>Congri (Bandeja Grande) / Congri (Full Pan)</li>
              <li>Yuca (Bandeja Pequena) / Yuca (Half Pan)</li>
              <li>Ensalada Verde (Bandeja Pequena) / Green Salad (Half Pan)</li>
              <li>25 Panecitos Cubanos / 25 Cuban Dinner Rolls</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">El Habanero</h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #3</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$211</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Ropa Vieja (Bandeja Grande) / Shredded Beef (Full Pan)</li>
              <li>Arroz Blanco (Bandeja Grande) / White Rice (Full Pan)</li>
              <li>Maduros (Bandeja Pequena) / Plantains (Half Pan)</li>
              <li>25 Panecitos Cubanos / 25 Cuban Dinner Rolls</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">ANTOJITOS CUBANOS</h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #4</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$230</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Pechuga de Pollo (Bandeja Grande) / Grilled Chicken Breast (Full Pan)</li>
              <li>Congri (Bandeja Grande) / Congri (Full Pan)</li>
              <li>Maduros (Bandeja Pequena) / Plantains (Half Pan)</li>
              <li>Ensalada (Bandeja Pequena) / Salad (Half Pan)</li>
              <li>25 Panecitos Cubanos / 25 Cuban Dinner Rolls</li>
            </ul>
          </div>


        </div>
        <h2 className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mb-2">Entradas - Entrees</h2>
        <Image
        src={line}
        alt="line seperator" 
        width = {400}
        className='mx-auto -mb-8 -mt-14 items-center'
        />

        {/* A La Carte Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">

          {/* Column 1 */}
        <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Picadillo</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Ground Beef</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$75 / $145</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Lechon Asado</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Roast Pork</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$65 / $125</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Fricase De Pollo</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Chicken Fricase</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$50 / $95</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>

          {/* Column 2 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Carne con PAPA</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Beef Stew</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$75 / $145</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Vaca Frita</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Pan-Fried Shredded Beef</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$85 / $165</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Masitas De Puerco</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Pork Chunks</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$50 / $95</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>

          {/* Column 3 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Pechuga de Pollo</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Grilled Chicken Breast</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$75 / $145</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Pollo Asado</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Baked Chicken Leg Quarters</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$50 / $95</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Ropa Vieja</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Shredded Beef</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$85 / $165</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>

        </div>



        <h2 className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-2 mb-2">Arroz - Rice</h2>
        <Image
        src={line}
        alt="line seperator" 
        width = {400}
        className='mx-auto -mb-8 -mt-14 items-center'
        />

        {/* Sides Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">

            {/* Column 1 */}
        <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Congri</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Rice with Beans</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$30 / $55</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Arroz Blanco</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">white rice</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$20 / $35</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Arros Amarillo</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Yellow Rice</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$20 / $35</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>

          {/* Column 2 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Arroz con Grandules</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Rice with Peas</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$30 / $55</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Arroz Imperial</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Imperial Rice</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$65 / $125</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Arroz Amarillo Con Vegetales</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Yellow Rice with vegetables</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$25 / $45</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>

           {/* Column 3 */}
           <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Arroz Frito</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Cuban Fried Rice</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$65 / $125</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Arroz Con Pollo</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Yellow Rice with Chicken</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$65 / $125</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-2 mb-2">Acompañantes - Sides</h2>
        <Image
        src={line}
        alt="line seperator" 
        width = {400}
        className='mx-auto -mb-8 -mt-14 items-center'
        />

        {/* Sides Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">

            {/* Column 1 */}
            <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Maduros</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Platains</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$22 / $39</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Yuca</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">cassava</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$22 / $39</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Frijoles Negros</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Black Beans</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$24 / $43</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>
      
       {/* Column 2 */}
       <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Ensalda Verde</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Green Salad</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$20 / $35</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Ensalada Caesar</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Caeser Salada</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$20 / $35</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Ensalda De Papa</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Potato Salad</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$25 / $45</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>
      
      {/* Column 3 */}
      <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Yuca Frita</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Fried Cassava</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$27 / $44</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>

              <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Ensalada De Macaroni</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Macaroni Salad</h2>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$25 / $45</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan</li>
              <li>Bandeja Grande / Full Pan</li>
              </ul>
          </div>
      
        </div>  
      </div>
      
    </section>
  )
}

export default Menu
