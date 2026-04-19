import React from 'react'

function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-[#E9EAE4] overflow-hidden flex justify-center">
      
      <div className="relative w-full flex flex-col items-center mt-20">
        
        {/* BACKGROUND TEXT */}
        <h1 className="absolute top-32 w-full text-center text-[15vw] font-black uppercase tracking-tighter text-black z-10 leading-none select-none pointer-events-none">
          WoodCraft
        </h1>

        {/* THE "FUNNY" P TAG 
            - Added 'rotate-3' for a jaunty, non-serious angle
            - Used a handwritten font stack
            - Added a playful color
        */}
<div className="absolute left-10  ml-3 bottom-24 z-30 max-w-[250px] 
                origin-bottom-left transition-transform hover:rotate-0">
  <p className="text-xl text-gray-700 leading-tight" 
     style={{ fontFamily: '"Comic Sans MS", "Comic Sans", "Chalkboard SE", "cursive"' }}>
            "Wait... did I leave the oven on? Also, this sofa is incredibly comfortable. Like, suspiciously comfortable."
          </p>
       
<button className=' bg-black p-5 rounded-4xl m-4  text-white '>explore more</button>
        {/* SOFA IMAGE */} </div>
        <img
          src="/sofa5.png" 
          alt="Sofa"
          className="absolute top-20 z-20 w-[90%] max-w-[900px] h-auto object-contain drop-shadow-2xl"
        />
        
      </div>
    </section>
  )
}

export default HeroSection