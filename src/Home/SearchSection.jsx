import React, { useState } from "react";

const SearchSection = () => {
  const [formData, setFormData] = useState({
    lookingFor: "Bride",
    ageFrom: 18,
    ageTo: 30,
    motherTongue: "",
    caste: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    console.log("Search triggered with:", formData);
    // Implement actual search logic or form submission here
  };

  return (
    <section className="bg-[#EAE4D5] py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Begin Your Search for an Ideal Match
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Looking For */}
          <div className="text-left">
            <label className="block text-sm font-semibold mb-1">I'm looking for a</label>
            <select
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm"
            >
              <option>Bride</option>
              <option>Groom</option>
            </select>
          </div>

          {/* Age From */}
          <div className="text-left col-span-1">
            <label className="block text-sm font-semibold mb-1">Age</label>
            <div className="flex gap-2">
              <select
                name="ageFrom"
                value={formData.ageFrom}
                onChange={handleChange}
                className="w-1/2 border border-gray-400 rounded px-2 py-2 text-sm"
              >
                {Array.from({ length: 83 }, (_, i) => (
                  <option key={i + 18}>{i + 18}</option>
                ))}
              </select>
              <select
                name="ageTo"
                value={formData.ageTo}
                onChange={handleChange}
                className="w-1/2 border border-gray-400 rounded px-2 py-2 text-sm"
              >
                {Array.from({ length: 83 }, (_, i) => (
                  <option key={i + 18}>{i + 18}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mother Tongue */}
          <div className="text-left">
            <label className="block text-sm font-semibold mb-1">Mother Tongue</label>
            <select
              name="motherTongue"
              value={formData.motherTongue}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm"
            >
              <option value="">Mother tongue</option>
              <option>Bengali</option>
              <option>Hindi</option>
              <option>English</option>
              <option>Urdu</option>
              <option>Other</option>
            </select>
          </div>

          {/* Caste */}
          <div className="text-left">
            <label className="block text-sm font-semibold mb-1">Caste</label>
            <select
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm"
            >
              <option value="">Sect</option>
              <option>Sunni</option>
              <option>Shia</option>
              <option>General</option>
              <option>Other</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="text-left md:text-center">
            <button
              onClick={handleSearch}
              className="mt-5 md:mt-0 px-7 py-2 bg-black/50 text-[#EAE4D5] rounded-full text-md hover:bg-black/70 hover:text-white transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
