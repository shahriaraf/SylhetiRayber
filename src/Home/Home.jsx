import React from 'react';
import Banner from './Banner/Banner';
import SearchSection from './SearchSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchSection></SearchSection>
            <section className="py-16 bg-[#F2F2F2] text-center">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">THE HAPPY COUPLE</h2>
        <p className="text-lg italic text-gray-600 mt-2">
          A happy marriage is the union of two good forgivers.
        </p>
        <div className="flex justify-center mt-4">
          {/* You can replace this with an actual SVG icon if needed */}
          <span className="w-12 h-px bg-gray-400 mx-2 mt-3"></span>
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="w-12 h-px bg-gray-400 mx-2 mt-3"></span>
        </div>
      </div>

      {/* Couple Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
        {/* Bride */}
        <div style={{ boxShadow: "0px 0px 10px 0.10px #B6B09F" }}
         className="flex flex-col md:flex-row bg-[#EAE4D5] rounded-md p-4 shadow-sm">
          <div className="relative">
            <img
              src="https://weddingbyte.com/storage/upload/vendor/featured/IMG_20210505_154619.jpg"
              alt="Jane Milea"
              className="w-[700px] h-56 object-cover"
            />
            <span className="absolute bottom-2 left-2 backdrop-blur-2xl text-white/80 font-semibold text-sm px-3 py-1 rounded">
              The Bride
            </span>
          </div>
          <div className="text-left md:ml-6 mt-4 md:mt-0">
            <h3 className="font-bold text-lg text-gray-800">JANE MILEA</h3>
            <p className="italic text-sm text-gray-500 mt-1">I kind of have a thing for Him</p>
            <div className="w-8 h-[2px] bg-black/50 my-2"></div>
            <p className="text-sm text-gray-700">
              I am just crazy about Dilan. He has a truly amazing heart. I am so
              incredibly blessed and excited to spend everyday for the rest of
              my life with my best friend.
            </p>
          </div>
        </div>

        {/* Groom */}
        <div style={{ boxShadow: "0px 0px 10px 0.10px #B6B09F" }}
         className="flex flex-col md:flex-row bg-[#EAE4D5] rounded-md p-4 shadow-sm">
          <div className="relative">
            <img
              src="https://jkforeignbrands.com/wp-content/uploads/2021/11/Groom-03.jpg"
              alt="John Dilan"
              className="w-[700px] h-56 object-cover"
            />
            <span className="absolute bottom-2 left-2 backdrop-blur-2xl text-white/80 font-semibold text-sm px-3 py-1 rounded">
              The Groom
            </span>
          </div>
          <div className="text-left md:ml-6 mt-4 md:mt-0">
            <h3 className="font-bold text-lg text-gray-800">JOHN DILAN</h3>
            <p className="italic text-sm text-gray-500 mt-1">I kind of have a thing for Her</p>
            <div className="w-8 h-[2px] bg-black/50 my-2"></div>
            <p className="text-sm text-gray-700">
              Milea means so much to me and I can't believe she is actually
              going to marry me. I'm so excited to spend the rest of my life
              with her. Milea is perfect for me.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('https://images.bridestory.com/image/upload/assets/ASw-251_zegkbv.jpg')" }} // replace with your own
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center py-20 px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">THE WEDDING EVENT</h2>
        <p className="italic mt-2 text-lg">
          If you have only one smile in you give it to the people you love.
        </p>

        {/* Decorative Icon */}
        <div className="flex justify-center mt-4 mb-10">
          <svg
            className="w-10 h-10 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-gray-800">
          {/* Ceremony Card */}
          <div className="bg-[#EAE4D5] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold">THE CEREMONY</h3>
            <div className="w-8 h-[2px] bg-black/50 my-2"></div>
            <p className="text-sm mb-4">
              Lorem Ipsum is simply dummy text. The church where the wedding
              ceremony will take place on April 6th is St. Patrick's Church,
              where you'll find us most Sunday mornings.
            </p>

            <div className="flex items-start justify-center gap-3 text-sm font-semibold mb-1">
              <div>
                Sunday - September 13th, 2021 <br />
                09:00am - 10:00am
              </div>
            </div>

            <div className="flex items-start justify-center font-semibold gap-3 text-sm mb-6">
              <div>
                St. Patrick's Catholic Church <br />
                619 10th Street NW, Washington, DC
              </div>
            </div><br />

            <div className="flex gap-4">
              <button className="border rounded-full px-4 py-2 text-[#EAE4D5] text-xs font-semibold bg-black/50 hover:bg-black/70">
                HOW TO GET THERE
              </button>
              <button className="underline text-xs font-semibold">
                VIEW MAP
              </button>
            </div>
          </div>

          {/* Reception Card */}
          <div className="bg-[#EAE4D5] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold">THE RECEPTION</h3>
            <div className="w-8 h-[2px] bg-black/50 my-2"></div>
            <p className="text-sm mb-4">
              We fell in love with the ballroom inside this historic hotel for
              its grandeur and timeless elegance. We can’t wait to party the
              night away with you!
            </p>

            <div className="flex items-start justify-center font-semibold gap-3 text-sm mb-1">
              <div>
                Sunday - September 13th, 2021 <br />
                06:00pm - 10:00pm
              </div>
            </div>

            <div className="flex items-start  justify-center font-semibold gap-3 text-sm mb-6">
              <div>
                The Mayflower Hotel <br />
                620 11th Street NW, Washington, DC
              </div>
            </div><br />

            <div className="flex gap-4">
              <button className="border rounded-full px-4 py-2 text-[#EAE4D5] text-xs font-semibold bg-black/50 hover:bg-black/70">
                HOW TO GET THERE
              </button>
              <button className="underline text-xs font-semibold">
                VIEW MAP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Home;
