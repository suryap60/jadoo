import Image from 'next/image';
import { Button } from '../ui/Button';
import { FaPlay } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-32">
      <div className="flex lg:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 z-20 text-left lg:pr-10">
          <h3 className="text-[#DF6951] font-bold uppercase tracking-[0.2em] text-lg mb-6">
            Best Destinations around the world
          </h3>
          
          <h1 className="font-volkhov text-5xl lg:text-8xl text-[#181E4B] font-bold leading-[1.1] mb-8">
            Travel, <span className="relative inline-block">
              enjoy
              {/* This draws the red underline specifically under "enjoy" */}
              <img 
                src="/underline.svg" 
                alt="" 
                className="absolute -bottom-2 left-0 w-full h-auto -z-10" 
              />
            </span>
            <br /> 
            and live a new 
            <br /> and full life
          </h1>

          <p className="text-[#5E6282] text-lg max-w-lg mb-10 leading-loose font-medium">
            Built Wicket longer admire do barton vanity itself do in it. 
            Preferred to sportsmen it engrossed listening. Park gate 
            sell they west hard for the.
          </p>

          <div className="flex gap-8 items-center">
            {/* Direct styling to ensure the orange button shows up */}
            <button className="bg-[#F1A501] hover:bg-[#d99501] text-white font-medium px-7 py-4 rounded-xl shadow-lg shadow-yellow-200/50 transition-all">
              Find out more
            </button>
            
            <button className="flex items-center gap-4 text-[#686D77] font-medium group">
               <div className="bg-[#DF6951] p-4 rounded-full text-white shadow-xl shadow-orange-200 group-hover:scale-110 transition-transform">
                 <FaPlay className="ml-1" size={14} />
               </div>
               <span>Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Side: Image Layering */}
        <div className="flex-1 relative mt-16 lg:mt-0 w-full">
          

          {/* 2. Plane 1 (Top Left) */}
          <img 
            src="/assets/plane.png" 
            className="absolute top-10 left-0 w-32 z-20" 
            alt="plane" 
          />

          {/* 3. Main Traveler Image */}
          <div className="relative z-10 w-full">
            <Image 
              src="/assets/Traveller 1.png" 
              width={750} 
              height={750} 
              alt="Girl with backpack" 
              className="object-contain mx-auto"
              priority
            />
          </div>

          {/* 4. Plane 2 (Right Side) */}
          <img 
            src="/assets/plane.png" 
            className="absolute top-[20%] right-0 w-32 z-20" 
            alt="plane" 
          />
        </div>

      </div>
    </section>
  );
};