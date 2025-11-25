import { line, menubg } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <section
      id="menu"
      className="relative w-full min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
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

      {/* Menu Content */}
      <div className="relative z-10 w-full max-w-contentContainer mx-auto px-6 py-8 bg-black bg-opacity-70">
        {/* Navigation Key */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 pb-6 border-b border-darkYellow border-opacity-30">
          <a
            href="#family-specials"
            className="text-lg md:text-xl font-bodyFont text-darkYellow hover:text-offWhite transition-colors duration-200 cursor-pointer"
          >
            Family Specials
          </a>
          <span className="text-darkYellow">|</span>
          <a
            href="#entradas"
            className="text-lg md:text-xl font-bodyFont text-darkYellow hover:text-offWhite transition-colors duration-200 cursor-pointer"
          >
            Entradas
          </a>
          <span className="text-darkYellow">|</span>
          <a
            href="#arroz"
            className="text-lg md:text-xl font-bodyFont text-darkYellow hover:text-offWhite transition-colors duration-200 cursor-pointer"
          >
            Arroz
          </a>
          <span className="text-darkYellow">|</span>
          <a
            href="#acompanantes"
            className="text-lg md:text-xl font-bodyFont text-darkYellow hover:text-offWhite transition-colors duration-200 cursor-pointer"
          >
            Acompañantes
          </a>
          <span className="text-darkYellow">|</span>
          <a
            href="#pastelitos"
            className="text-lg md:text-xl font-bodyFont text-darkYellow hover:text-offWhite transition-colors duration-200 cursor-pointer"
          >
            Pastelitos
          </a>
          <span className="text-darkYellow">|</span>
          <a
            href="#antojitos"
            className="text-lg md:text-xl font-bodyFont text-darkYellow hover:text-offWhite transition-colors duration-200 cursor-pointer"
          >
            Antojitos
          </a>
        </div>

        <h2
          id="family-specials"
          className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-6 mb-2 scroll-mt-24"
        >
          Family Specials
        </h2>
        {/* Line Seperator */}
        <Image
          src={line}
          alt="line seperator"
          width={350}
          className="mx-auto -mb-8 -mt-12 items-center"
        />

        {/* Specials Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              Especiale de la Casa
            </h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #1</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$159</p>
            <ul className=" mt-2 font-titleFont text-offWhite text-sm list-disc font-semibold">
              <li>
                Arroz Imperial (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Imperial Rice (Full Pan)
                </span>
              </li>
              <li>
                Maduros (Bandeja Pequena)
                <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Plantains (Half Pan)
                </span>
              </li>
              <li>
                Ensalada (Bandeja Pequena) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Salad (Half Pan)
                </span>
              </li>
              <li>
                25 Panecitos Cubanos <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  25 Cuban Dinner Rolls
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              NOCHE CARIBEÑA
            </h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #2</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$211</p>
            <ul className="mt-2 font-titleFont text-offWhite text-sm list-disc font-semibold">
              <li>
                Lechon Asado (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Roast Pig (Full Pan){" "}
                </span>
              </li>
              <li>
                Congri (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Congri (Full Pan)
                </span>
              </li>
              <li>
                Yuca (Bandeja Pequena) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Yuca (Half Pan)
                </span>
              </li>
              <li>
                Ensalada (Bandeja Pequena) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Salad (Half Pan){" "}
                </span>
              </li>
              <li>
                25 Panecitos Cubanos <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  25 Cuban Dinner Rolls
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              El Habanero
            </h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #3</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$211</p>
            <ul className="mt-2 font-titleFont text-offWhite text-sm list-disc font-semibold">
              <li>
                Ropa Vieja (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Shredded Beef (Full Pan){" "}
                </span>
              </li>
              <li>
                Arroz Blanco (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  White Rice (Full Pan)
                </span>
              </li>
              <li>
                Maduros (Bandeja Pequena)
                <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Plantains (Half Pan)
                </span>
              </li>
              <li>
                25 Panecitos Cubanos <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  25 Cuban Dinner Rolls{" "}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="p-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              ANTOJITOS CUBANOS
            </h3>
            <h3 className="text-2xl font-bodyFont text-offWhite">SPECIAL #4</h3>
            <p className="text-2xl font-bodyFont text-offWhite mb-2">$230</p>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm list-disc font-semibold">
              <li>
                Pechuga de Pollo (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Grilled Chicken Breast (Full Pan){" "}
                </span>
              </li>
              <li>
                Congri (Bandeja Grande) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Congri (Full Pan)
                </span>
              </li>
              <li>
                Maduros (Bandeja Pequena) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Plantains (Half Pan)
                </span>
              </li>
              <li>
                Ensalada (Bandeja Pequena) <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  Salad (Half Pan)
                </span>
              </li>
              <li>
                25 Panecitos Cubanos <br />
                <span className="text-sm font-normal italic">
                  {" "}
                  25 Cuban Dinner Rolls{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <h2
          id="entradas"
          className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-6 mb-2 scroll-mt-24"
        >
          Entradas - Entrees
        </h2>
        <Image
          src={line}
          alt="line seperator"
          width={350}
          className="mx-auto -mb-8 -mt-12 items-center"
        />

        {/* A La Carte Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">
          {/* Column 1 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Picadillo</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Ground Beef</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $75</li>
              <li>Bandeja Grande / Full Pan $145</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Lechon Asado
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Roast Pork</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $65</li>
              <li>Bandeja Grande / Full Pan $125</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Fricase De Pollo
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Chicken Fricase
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $50</li>
              <li>Bandeja Grande / Full Pan $95</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              Carne con PAPA
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Beef Stew</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $75</li>
              <li>Bandeja Grande / Full Pan $145</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Vaca Frita
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Pan-Fried Shredded Beef
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $85</li>
              <li>Bandeja Grande / Full Pan $165</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Masitas De Puerco
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Pork Chunks</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $75</li>
              <li>Bandeja Grande / Full Pan $145</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              Pechuga de Pollo
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Grilled Chicken Breast
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $75</li>
              <li>Bandeja Grande / Full Pan $145</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Pollo Asado
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Baked Chicken Leg Quarters
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $50</li>
              <li>Bandeja Grande / Full Pan $95</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Ropa Vieja
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Shredded Beef
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $85</li>
              <li>Bandeja Grande / Full Pan $165</li>
            </ul>
          </div>
        </div>

        <h2
          id="arroz"
          className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-6 mb-2 scroll-mt-24"
        >
          Arroz - Rice
        </h2>
        <Image
          src={line}
          alt="line seperator"
          width={350}
          className="mx-auto -mb-8 -mt-12 items-center"
        />

        {/* Sides Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pb-4">
          {/* Column 1 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Congri</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Rice with Beans
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $30</li>
              <li>Bandeja Grande / Full Pan $55</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Arroz Blanco
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">white rice</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $20</li>
              <li>Bandeja Grande / Full Pan $35</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Arros Amarillo
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Yellow Rice</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $20</li>
              <li>Bandeja Grande / Full Pan $35</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              Arroz con Grandules
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Rice with Peas
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $30</li>
              <li>Bandeja Grande / Full Pan $55</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Arroz Imperial
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Imperial Rice
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $65</li>
              <li>Bandeja Grande / Full Pan $125</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Arroz Amarillo Con Vegetales
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Yellow Rice with vegetables
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $25</li>
              <li>Bandeja Grande / Full Pan $45</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              Arroz Frito
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Cuban Fried Rice
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $65</li>
              <li>Bandeja Grande / Full Pan $125</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Arroz Con Pollo
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Yellow Rice with Chicken
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $45</li>
              <li>Bandeja Grande / Full Pan $85</li>
              <li>**Sin Hueso / Boneless + $15 / $30</li>
            </ul>
          </div>
        </div>
        <h2
          id="acompanantes"
          className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-6 mb-2 scroll-mt-24"
        >
          Acompañantes - Sides
        </h2>
        <Image
          src={line}
          alt="line seperator"
          width={350}
          className="mx-auto -mb-8 -mt-12 items-center"
        />

        {/* Sides Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4 ">
          {/* Column 1 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Maduros</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Platains</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $22</li>
              <li>Bandeja Grande / Full Pan $39</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">Yuca</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">cassava</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $22</li>
              <li>Bandeja Grande / Full Pan $39</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Frijoles Negros
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Black Beans</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $24</li>
              <li>Bandeja Grande / Full Pan $43</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">
              Ensalda Verde
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">Green Salad</h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $20</li>
              <li>Bandeja Grande / Full Pan $35</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Ensalada Caesar
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Caesar Salad
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $20</li>
              <li>Bandeja Grande / Full Pan 35</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Ensalda De Papa
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Potato Salad
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $25</li>
              <li>Bandeja Grande / Full Pan $45</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="px-6">
            <h3 className="text-3xl font-bodyFont text-offWhite">Yuca Frita</h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Fried Cassava
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $27</li>
              <li>Bandeja Grande / Full Pan $44</li>
            </ul>

            <h3 className="mt-3 text-3xl font-bodyFont text-offWhite">
              Ensalada De Macaroni
            </h3>
            <h2 className="text-xl font-bodyFont text-offWhite">
              Macaroni Salad
            </h2>
            <ul className="mt-2 font-titleFont italic text-offWhite text-sm">
              <li>Bandeja Pequena / Half Pan $25</li>
              <li>Bandeja Grande / Full Pan $45</li>
            </ul>
          </div>
        </div>

        <h2
          id="pastelitos"
          className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-6 mb-2 scroll-mt-24"
        >
          Pastelitos – Pastries
        </h2>
        <Image
          src={line}
          alt="line seperator"
          width={350}
          className="mx-auto -mb-8 -mt-12 items-center"
        />

        {/* Pastelitos Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pb-4">
          {/* Column 1 - Sabores */}
          <div className="px-6">
            <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-3">
              Sabores / Flavors
            </h3>
            <ul className="font-titleFont text-offWhite text-sm space-y-2">
              <li>Pastelitos de Guayaba</li>
              <li>Pastelitos de Queso</li>
              <li>Pastelitos de Carne</li>
              <li>Pastelitos de Coco</li>
              <li>Cangrejitos de Jamón</li>
              <li>Cangrejitos de Chorizo</li>
            </ul>
          </div>

          {/* Column 2 - Bandeja Mixta */}
          <div className="px-6">
            <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-3">
              Bandeja Mixta / Variety Platter
            </h3>
            <ul className="font-titleFont text-offWhite text-sm space-y-2 mb-6">
              <li>36 pcs – $15.99</li>
              <li>75 pcs – $31.99</li>
            </ul>
            <p className="font-titleFont text-offWhite text-sm italic">
              Pastelitos de Guayaba, queso y carne
            </p>
          </div>

          {/* Column 3 - Call-out for Events */}
          <div className="px-6">
            <div className="border-2 border-darkYellow rounded-lg p-4 bg-black bg-opacity-50 backdrop-blur-sm">
              <h3 className="text-xl font-bodyFont text-darkYellow font-semibold mb-2 text-center">
                Party Platters & Events
              </h3>
              <p className="font-titleFont text-offWhite text-xs text-center mb-3 leading-relaxed">
                Planning a special event? We create custom party platters for
                birthdays, celebrations, corporate events, and more!
              </p>
              <a
                href="tel:3052452724"
                className="block w-full text-center bg-darkYellow text-black border-2 border-white font-bodyFont font-semibold py-2 px-4 rounded-md hover:bg-black hover:text-darkYellow hover:border-white transition text-sm"
              >
                Click Here to Call Us
              </a>
              <p className="font-titleFont text-offWhite text-xs text-center mt-2 italic">
                Custom orders available for any occasion
              </p>
            </div>
          </div>
        </div>

        {/* Especiales Title - Centered */}
        <h3 className="text-3xl font-bodyFont text-offwhite font-semibold mb-4 text-center mt-6">
          Especiales / Specials
        </h3>

        {/* Especiales Grid - 3 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="px-6">
            <h4 className="text-xl font-bodyFont text-offWhite font-semibold">
              Special #1 — 150 pcs – $57
            </h4>
            <ul className="mt-2 font-titleFont text-offWhite text-sm list-disc ml-4 space-y-1">
              <li>25 Pastelitos de Guayaba / Guava Pastries</li>
              <li>25 Pastelitos de Carne / Beef Pastries</li>
              <li>25 Pastelitos de Queso / Cheese Pastries</li>
              <li>50 Croquetas de Jamón / Ham Croquettes</li>
              <li>25 Bocaditos de Pasta / Ham Spread Sandwiches</li>
            </ul>
          </div>

          <div className="px-6">
            <h4 className="text-xl font-bodyFont text-offWhite font-semibold">
              Special #2 — 300 pcs – $112
            </h4>
            <ul className="mt-2 font-titleFont text-offWhite text-sm list-disc ml-4 space-y-1">
              <li>50 Guayaba</li>
              <li>50 Carne</li>
              <li>50 Queso</li>
              <li>100 Croquetas de Jamón</li>
              <li>50 Bocaditos de Pasta</li>
            </ul>
          </div>

          <div className="px-6">
            <h4 className="text-xl font-bodyFont text-offWhite font-semibold">
              Special #3 — 600 pcs – $216
            </h4>
            <ul className="mt-2 font-titleFont text-offWhite text-sm list-disc ml-4 space-y-1">
              <li>100 Guayaba</li>
              <li>100 Carne</li>
              <li>100 Queso</li>
              <li>200 Croquetas de Jamón</li>
              <li>100 Bocaditos de Pasta</li>
            </ul>
          </div>
        </div>

        <h2
          id="antojitos"
          className="text-3xl md:text-4xl font-bodyFont text-darkYellow font-bold text-center mt-6 mb-2 scroll-mt-24"
        >
          Antojitos – Small Bites
        </h2>
        <Image
          src={line}
          alt="line seperator"
          width={350}
          className="mx-auto -mb-8 -mt-12 items-center"
        />

        {/* Antojitos Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-4">
          {/* Column 1 */}
          <div className="px-6">
            <ul className="font-titleFont text-offWhite text-sm space-y-3">
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-3">
                Sabores / Flavors
              </h3>
              <li>Croquetas de Jamón</li>
              <li>Bocaditos de Pasta</li>
              <li>Bocaditos de Jamón y Queso</li>
              <li>Salchichas Enrolladas</li>
              <li>Bocaditos Franceses</li>
              <li>Papitas Rellenas</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-2">
                Picada Colombiana – Colombian Party Platter
              </h3>
              <p className="text-xl font-bodyFont text-offWhite mb-2">$65</p>
              <ul className="font-titleFont text-offWhite text-sm list-disc ml-4 space-y-1">
                <li>Chicharrones</li>
                <li>Tostones</li>
                <li>Papas Criollas</li>
                <li>Chorizo</li>
                <li>Yuca Frita</li>
                <li>Salsa Picante</li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="px-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-2">
                Bandeja de Empanadas
              </h3>
              <p className="text-xl font-bodyFont text-offWhite mb-2">
                25 Empanadas – $60
              </p>
              <p className="font-titleFont text-offWhite text-sm font-semibold mb-2">
                Flavors:
              </p>
              <ul className="font-titleFont text-offWhite text-sm list-disc ml-4 space-y-1">
                <li>Carne</li>
                <li>Pollo</li>
                <li>Jamón y Queso</li>
                <li>Colombianas (con salsa picante)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-2">
                Mini Cuban Sandwiches
              </h3>
              <p className="text-xl font-bodyFont text-offWhite mb-2">
                25 pcs – $45
              </p>
              <p className="font-titleFont text-offWhite text-sm">
                Ham, Cheese & Pickles on Mini Cuban Rolls
              </p>
              <p className="font-titleFont text-offWhite text-sm mt-2">
                Add Mojo Pork: +$10
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-2">
                Mini Lechón Sandwiches
              </h3>
              <p className="text-xl font-bodyFont text-offWhite mb-2">
                25 pcs – $45
              </p>
              <p className="font-titleFont text-offWhite text-sm">
                Mojo Pork on Mini Cuban Rolls
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="px-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-2">
                Bandeja de Frutas – Fruit Board
              </h3>
              <p className="text-xl font-bodyFont text-offWhite mb-2">$45</p>
              <ul className="font-titleFont text-offWhite text-sm list-disc ml-4 space-y-1">
                <li>Grapes</li>
                <li>Oranges</li>
                <li>Strawberries</li>
                <li>Kiwis</li>
                <li>Dragon Fruit</li>
                <li>Blackberries</li>
                <li>Raspberries</li>
                <li>Mangoes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bodyFont text-offwhite font-semibold mb-2">
                Dulces Surtidos – Variety Mini Desserts
              </h3>
              <ul className="font-titleFont text-offWhite text-sm space-y-2">
                <li>Small Tray — $35</li>
                <li>Large Tray — $45</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
