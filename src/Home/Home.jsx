
import { Menu, X, MapPin, Clock, Heart, Star } from 'lucide-react';
import Banner from './Banner/Banner';
import SearchSection from './SearchSection';



const MobileDrawer = ({ isOpen, onClose }) => (
  <>
    {/* Overlay */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
    )}
    
    {/* Drawer */}
    <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 md:hidden ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Wedding Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <a href="#couple" className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          The Happy Couple
        </a>
        <a href="#ceremony" className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Wedding Ceremony
        </a>
        <a href="#reception" className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Reception
        </a>
        <a href="#gallery" className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          Gallery
        </a>
        <a href="#rsvp" className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          RSVP
        </a>
      </div>
    </div>
  </>
);

const Home = () => {

  return (
    <div className="min-h-screen bg-white">
   
        <Banner />
      <SearchSection></SearchSection>

      {/* Happy Couple Section */}
      <section id="couple" className="py-16 lg:py-24 bg-[#F2F2F2] text-center">
        {/* Title */}
        <div className="mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            THE HAPPY COUPLE
          </h2>
          <p className="text-lg md:text-xl italic text-gray-600 mt-2 max-w-2xl mx-auto">
            A happy marriage is the union of two good forgivers.
          </p>
          <div className="flex justify-center items-center mt-6">
            <span className="w-12 h-px bg-gray-400"></span>
            <Heart className="w-8 h-8 text-pink-400 mx-4" />
            <span className="w-12 h-px bg-gray-400"></span>
          </div>
        </div>

        {/* Couple Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Bride */}
          <div 
            style={{ boxShadow: "0px 0px 15px 0.15px #B6B09F" }}
            className="flex flex-col sm:flex-row bg-[#EAE4D5] rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative flex-shrink-0">
              <img
                src="https://weddingbyte.com/storage/upload/vendor/featured/IMG_20210505_154619.jpg"
                alt="Jane Milea"
                className="w-full sm:w-64 h-56 sm:h-64 object-cover rounded-lg"
              />
              <span className="absolute bottom-3 left-3 backdrop-blur-md bg-white/20 text-white font-semibold text-sm px-4 py-2 rounded-full border border-white/20">
                The Bride
              </span>
            </div>
            <div className="text-left sm:ml-6 mt-4 sm:mt-0 flex-1">
              <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-2">JANE MILEA</h3>
              <p className="italic text-sm text-gray-500 mb-3">I kind of have a thing for Him</p>
              <div className="w-12 h-[2px] bg-pink-400 mb-4"></div>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                I am just crazy about Dilan. He has a truly amazing heart. I am so
                incredibly blessed and excited to spend everyday for the rest of
                my life with my best friend.
              </p>
            </div>
          </div>

          {/* Groom */}
          <div 
            style={{ boxShadow: "0px 0px 15px 0.15px #B6B09F" }}
            className="flex flex-col sm:flex-row bg-[#EAE4D5] rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative flex-shrink-0">
              <img
                src="https://jkforeignbrands.com/wp-content/uploads/2021/11/Groom-03.jpg"
                alt="John Dilan"
                className="w-full sm:w-64 h-56 sm:h-64 object-cover rounded-lg"
              />
              <span className="absolute bottom-3 left-3 backdrop-blur-md bg-white/20 text-white font-semibold text-sm px-4 py-2 rounded-full border border-white/20">
                The Groom
              </span>
            </div>
            <div className="text-left sm:ml-6 mt-4 sm:mt-0 flex-1">
              <h3 className="font-bold text-xl lg:text-2xl text-gray-800 mb-2">JOHN DILAN</h3>
              <p className="italic text-sm text-gray-500 mb-3">I kind of have a thing for Her</p>
              <div className="w-12 h-[2px] bg-blue-400 mb-4"></div>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Milea means so much to me and I can't believe she is actually
                going to marry me. I'm so excited to spend the rest of my life
                with her. Milea is perfect for me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Event Section */}
      <section
        id="ceremony"
        className="bg-cover bg-center bg-no-repeat relative min-h-screen"
        style={{ backgroundImage: "url('https://images.bridestory.com/image/upload/assets/ASw-251_zegkbv.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center py-16 lg:py-24 px-4 sm:px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">THE WEDDING EVENT</h2>
          <p className="italic mt-2 text-lg md:text-xl max-w-2xl mx-auto">
            If you have only one smile in you give it to the people you love.
          </p>

          {/* Decorative Icon */}
          <div className="flex justify-center items-center mt-6 mb-12">
            <span className="w-12 h-px bg-yellow-400"></span>
            <Star className="w-10 h-10 text-yellow-400 mx-4" />
            <span className="w-12 h-px bg-yellow-400"></span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto text-gray-800">
            {/* Ceremony Card */}
            <div className="bg-[#EAE4D5] rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">THE CEREMONY</h3>
              <div className="w-12 h-[2px] bg-pink-400 mb-4"></div>
              <p className="text-sm lg:text-base mb-6 leading-relaxed">
                Lorem Ipsum is simply dummy text. The church where the wedding
                ceremony will take place on April 6th is St. Patrick's Church,
                where you'll find us most Sunday mornings.
              </p>

              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm lg:text-base font-semibold mb-2">
                  <Clock size={16} />
                  <span>Sunday - September 13th, 2021</span>
                </div>
                <div className="text-center text-sm lg:text-base font-medium">
                  09:00am - 10:00am
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm lg:text-base font-semibold mb-2">
                  <MapPin size={16} />
                  <span>St. Patrick's Catholic Church</span>
                </div>
                <div className="text-center text-sm lg:text-base">
                  619 10th Street NW, Washington, DC
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="border-2 border-gray-800 rounded-full px-6 py-3 text-[#EAE4D5] text-xs lg:text-sm font-semibold bg-black/70 hover:bg-black/90 transition-all duration-200 transform hover:scale-105">
                  HOW TO GET THERE
                </button>
                <button className="underline text-xs lg:text-sm font-semibold hover:text-pink-600 transition-colors">
                  VIEW MAP
                </button>
              </div>
            </div>

            {/* Reception Card */}
            <div className="bg-[#EAE4D5] rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">THE RECEPTION</h3>
              <div className="w-12 h-[2px] bg-blue-400 mb-4"></div>
              <p className="text-sm lg:text-base mb-6 leading-relaxed">
                We fell in love with the ballroom inside this historic hotel for
                its grandeur and timeless elegance. We can't wait to party the
                night away with you!
              </p>

              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm lg:text-base font-semibold mb-2">
                  <Clock size={16} />
                  <span>Sunday - September 13th, 2021</span>
                </div>
                <div className="text-center text-sm lg:text-base font-medium">
                  06:00pm - 10:00pm
                </div>
              </div>

              <div className="bg-white/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm lg:text-base font-semibold mb-2">
                  <MapPin size={16} />
                  <span>The Mayflower Hotel</span>
                </div>
                <div className="text-center text-sm lg:text-base">
                  620 11th Street NW, Washington, DC
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="border-2 border-gray-800 rounded-full px-6 py-3 text-[#EAE4D5] text-xs lg:text-sm font-semibold bg-black/70 hover:bg-black/90 transition-all duration-200 transform hover:scale-105">
                  HOW TO GET THERE
                </button>
                <button className="underline text-xs lg:text-sm font-semibold hover:text-blue-600 transition-colors">
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