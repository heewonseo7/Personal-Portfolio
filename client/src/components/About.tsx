import { useState, useRef } from 'react';

const aboutData = [
  {
    title: "Chess",
    year: "2015",
    description: "I've been playing chess competitively since high school. Chess has taught me strategic thinking and patience.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Hiking",
    year: "2017",
    description: "Exploring nature trails and mountains has become one of my favorite ways to disconnect and recharge.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Photography",
    year: "2018",
    description: "I developed an interest in landscape and architectural photography while traveling.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Machine Learning",
    year: "2020",
    description: "I work on personal ML projects focusing on environmental applications.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Cycling",
    year: "2016",
    description: "Road cycling is both my workout routine and my meditation.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Digital Art",
    year: "2019",
    description: "Creating digital art has sharpened my design skills.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Reading",
    year: "2012",
    description: "I'm an avid reader of science fiction and technical books.",
    imageUrl: "/api/placeholder/400/320"
  },
  {
    title: "Swimming",
    year: "2014",
    description: "Swimming is my go-to exercise for stress relief and creativity.",
    imageUrl: "/api/placeholder/400/320"
  }
];

const About = () => {
  const [activeHobby, setActiveHobby] = useState(null);
  const galleryRef = useRef(null);

  return (
    <section id="about" className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-5xl font-light mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-600/20 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-blue-600/5">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Profile Photo
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-600/30"></div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-blue-600 text-xl mb-4 font-light">Nice to meet you</h3>
            <p className="text-white text-lg leading-relaxed mb-6">
              I'm a freshman at Brown studying Applied Math and Computer Science, interested in reinforcement learning and web development.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm passionate about the intersection of environmental science and technology and using computation for real-world impact.
            </p>
            <p className="text-gray-400">
              Outside of school, I explore various interests — check them out below!
            </p>
          </div>
        </div>
        
        {/* Hobbies & Interests Gallery */}
        <div className="mb-10">
          <h3 className="text-white text-2xl font-light mb-10 text-center">Hobbies & Interests</h3>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {aboutData.map((hobby, index) => (
              <div 
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setActiveHobby(activeHobby === index ? null : index)}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gray-800">
                  <img 
                    src={hobby.imageUrl || "/api/placeholder/400/320"} 
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10">
                  <div className="text-white font-medium text-lg">{hobby.title}</div>
                  <div className="text-blue-200 text-xs">Since {hobby.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal Popup */}
      {activeHobby !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              setActiveHobby(null);
            }
          }}
        >
          <div
            className="bg-gray-900 w-full max-w-lg rounded-xl overflow-hidden shadow-xl border border-blue-600/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="h-64 bg-gray-800 relative">
              <img 
                src={aboutData[activeHobby].imageUrl || "/api/placeholder/400/320"} 
                alt={aboutData[activeHobby].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-blue-500 text-2xl font-medium">
                  {aboutData[activeHobby].title}
                </h4>
                <span className="text-white text-xs bg-blue-500/20 px-3 py-1 rounded-full">
                  Since {aboutData[activeHobby].year}
                </span>
              </div>
              <p className="text-white leading-relaxed">
                {aboutData[activeHobby].description}
              </p>
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setActiveHobby(null)}
                  className="px-4 py-2 text-sm text-white bg-blue-600/40 hover:bg-blue-600/60 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;