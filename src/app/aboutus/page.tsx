import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import salat from "../../../public/cate3.png";
import third from "../../../public/whyus4.png";
import whyus3 from "../../../public/whyus3.png";
import spoon from "../../../public/spoon.png";
import food from "../../../public/food.png";
import pro from "../../../public/proffcheff.png";
import img from "../../../public/idk.png";
import { PiQuotesLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { MdStar } from "react-icons/md";
import client from "../../../public/client.png";
import Header from "@/components/layout/Header";

const ourdata = [
  {
    id: 0,
    title: "Lettuce Leaf",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu1.png",
  },
  {
    id: 1,
    title: "Fresh Breakfast",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 14.5,
    img: "/ourmenu2.png",
  },
  {
    id: 2,
    title: "Mild Butter",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu3.png",
  },
  {
    id: 3,
    title: "Fresh bread",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu4.png",
  },
  {
    id: 4,
    title: "Glow Cheese",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu5.png",
  },
  {
    id: 5,
    title: "Italian pizza",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu6.png",
  },
  {
    id: 6,
    title: "Sllixe Beef",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu7.png",
  },
  {
    id: 7,
    title: "Mushaom Pizza",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu8.png",
  },
];

export default function About() {
  return (
    <div>
      <Header />

      <div className="px-6 md:px-12 lg:px-[100px] py-12 w-full">
        <div className=" lg:flex justify-center gap-5">
          <div className="lg:block hidden">
            <div className="flex gap-2 mt-24">
              <div>
                <Image
                  src={whyus3}
                  alt="Food 1"
                  className=" w-[300px] h-[400px] "
                />
              </div>
              <div className="gap-y-1 h-[484px]">
                <Image
                  src={third}
                  alt="Food 2"
                  className=" w-[200px] h-[200px] "
                />
                <Image
                  src={salat}
                  alt="Food 3"
                  className=" w-[200px] h-[200px] "
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center lg:w-[466px] lg:h-[366px]  lg:text-left">
            <h1 className="text-[#ff9f0d] font-greatVibes text-xl md:text-2xl lg:text-3xl">
              About us ______
            </h1>
            <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mt-4">
              Food is an important part Of a balanced Diet
            </h2>
            <div className=" lg:hidden">
              <div className="flex lg:w-[660px] lg:h-[734px] gap-2 mt-5">
                <div>
                  <Image
                    src={whyus3}
                    alt="Food 1"
                    className=" w-[300px] h-[400px] "
                  />
                </div>
                <div className="gap-2 h-[484px]">
                  <Image
                    src={third}
                    alt="Food 2"
                    className=" w-[200px] h-[200px] "
                  />
                  <Image
                    src={salat}
                    alt="Food 3"
                    className=" w-[200px] h-[200px] "
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-600 lg:w-[400px] text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-6">
              <button className="bg-[#ff9f0d]  text-white px-6 py-2 rounded-lg shadow-md ">
                Show more
              </button>
              <div className="flex items-center space-x-2 cursor-pointer">
                <IoPlayOutline className="text-white bg-[#ff9f0d]  p-2 rounded-full w-12 h-12" />
                <span className="text-bobg-[#ff9f0d]  font-bold">
                  Watch video
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-10 justify-center w-full items-center">
            <div className="flex flex-col gap-2 lg:w-[579px] h-[112px]">
              <h1 className="text-[48px] font-bold font-helvetica text-black text-center">
                Why Choose us
              </h1>
              <p className="text-[14px] font-helvetica leading-[24px]  text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                error similique ea necessitatibus tempora ipsa laudantium esse
                assumenda? Consequuntur sed obcaecati unde iusto.
              </p>
            </div>
            <Image
              src={img}
              alt="image"
              width={500}
              height={500}
              className="lg:h-[265px] lg:w-[900px]"
            />
          </div>
        </div>

        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                {/* Professional Chefs */}
                <div className="p-4 text-center">
                  <Image
                    src={pro}
                    alt="Professional Chef"
                    className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
                  />
                  <p className="leading-relaxed text-black font-bold text-sm md:text-lg lg:text-xl mt-4">
                    Best Chefs
                  </p>
                  <h1 className="text-black text-xl md:text-2xl lg:text-xs w-[200px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    animi! Eum explicabo aliquam neque
                  </h1>
                </div>
                {/* Items of Food */}
                <div className="p-4 text-center">
                  <Image
                    src={food}
                    alt="Items of Food"
                    className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
                  />
                  <p className="leading-relaxed text-black font-bold text-sm md:text-lg lg:text-xl mt-4">
                    120 Items of Food
                  </p>
                  <h1 className="text-black text-xl md:text-2xl lg:text-xs w-[200px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    animi! Eum explicabo aliquam neque
                  </h1>
                </div>
                {/* Years of Experience */}
                <div className="p-4 text-center">
                  <Image
                    src={spoon}
                    alt="Years of Experience"
                    className="w-20 h-20 mx-auto md:w-24 md:h-24 lg:w-32 lg:h-32"
                  />
                  <p className="leading-relaxed text-black font-bold text-sm md:text-lg lg:text-xl mt-4">
                    Years of Experience
                  </p>
                  <h1 className="text-black text-xl md:text-2xl lg:text-xs w-[200px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    animi! Eum explicabo aliquam neque
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="px-[10px] md:px-[50px] lg:px-[100px] flex flex-col items-center">
          <div className="mt-10 bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center w-full max-w-[600px] md:max-w-[700px] lg:max-w-[868px]">
            <div className="w-[80px] md:w-[100px] lg:w-[120px] h-[80px] md:h-[100px] lg:h-[120px] rounded-full overflow-hidden">
              <Image src={client} alt="client pic" className="object-cover" />
            </div>
            <div className="mt-6">
              <PiQuotesLight className="text-[#ff9f0d] text-[36px] md:text-[42px] lg:text-[48px]" />
            </div>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 text-center w-full max-w-[500px] md:max-w-[600px] lg:max-w-[696px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex text-lg md:text-xl lg:text-2xl mt-[10px]">
              <MdStar className="text-[#ff9f0d]" />
              <MdStar className="text-[#ff9f0d]" />
              <MdStar className="text-[#ff9f0d]" />
              <MdStar className="text-[#ff9f0d]" />
              <MdStar className="text-gray-400" />
            </div>
            <h2 className="mt-6 text-[18px] md:text-[20px] lg:text-[24px] font-bold text-gray-800">
              Alamin Hasan
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Food Specialist
            </p>
          </div>
          <div className="text-sm md:text-base lg:text-xl flex mt-[10px] md:mt-[15px] lg:mt-[20px]">
            <GoDotFill className="text-[#ff9f0d]" />
            <GoDotFill className="text-[#ff9f0d]/30" />
            <GoDotFill className="text-[#ff9f0d]/30" />
            <GoDotFill className="text-[#ff9f0d]/30" />
          </div>
        </div>

        <div>
          <ul className="flex flex-wrap justify-center text-black font-bold  gap-[10px] md:gap-[30px] lg:gap-[50px] mt-[10px] md:mt-[20px]">
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              Breakfast
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              Lunch
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              {" "}
              Dinner
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              {" "}
              Desert{" "}
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              {" "}
              Drink
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              Snack
            </li>
            <li className="text-[12px] md:text-[14px] lg:text-[15px] text-black font-bold  hover:text-[#ff9f0d] text-bold cursor-pointer leading-[28px]">
              Soups
            </li>
          </ul>

          <div className="flex flex-col lg:flex-row px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[50px] gap-[10px] md:gap-[15px] lg:gap-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px] lg:gap-[30px]">
              {ourdata.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="flex items-center space-x-4 p-4 rounded-md"
                  >
                    <div className="flex gap-1">
                      <Image
                        src={items.img}
                        alt="menu"
                        width={80}
                        height={79}
                        className="w-[60px] md:w-[70px] lg:w-[80px] h-[60px] md:h-[70px] lg:h-[79px] rounded-[6px]"
                      />
                    </div>
                    <div>
                      <h1 className="text-[14px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] font-bold text-black">
                        {items.title}
                      </h1>
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-black">
                        {items.para}
                      </p>
                      <h1 className="text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-[20px] md:leading-[26px] lg:leading-[28px] text-[#ff9f0d]">
                        {items.price}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
