import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// SVG components for different objects
const Dinosaur = ({ fill = "#fff", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M512 176v-64h-64v-32h-64V48h-64v32h-64v32h-32v32h-48l-48-32v64l32 32v128l-80 80v64h96v-48l32-32 32 32v48h64l32-96h48v-48h64v-48h64v-48h64v-64h-64z" fill={fill} />
  </svg>
);

const Pizza = ({ fill = "#fff", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 469.33c-117.82 0-213.33-95.51-213.33-213.33S138.18 42.67 256 42.67 469.33 138.18 469.33 256 373.82 469.33 256 469.33z" fill={fill} />
    <circle cx="213.33" cy="192" r="21.33" fill={fill} />
    <circle cx="128" cy="256" r="21.33" fill={fill} />
    <circle cx="213.33" cy="320" r="21.33" fill={fill} />
    <circle cx="298.67" cy="256" r="21.33" fill={fill} />
  </svg>
);

const Laptop = ({ fill = "#fff", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 640 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 96h384v224H128V96zm192 288c8.84 0 16-7.16 16-16s-7.16-16-16-16-16 7.16-16 16 7.16 16 16 16zm-192-64h384c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32H128c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32zm512 64H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h608c17.67 0 32-14.33 32-32s-14.33-32-32-32z" fill={fill} />
  </svg>
);

const Book = ({ fill = "#fff", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M448 368V48c0-26.5-21.5-48-48-48H80C35.8 0 0 35.8 0 80v352c0 44.2 35.8 80 80 80h368c-26.5 0-48-21.5-48-48V400c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V368zm-64-80V128h32c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-32zm-96 0V128h32c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-32zm-96 0V128h32c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-32z" fill={fill} />
  </svg>
);

const MusicNote = ({ fill = "#fff", size = 35 }) => (
  <svg width={size} height={size} viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M384 64v256c0 35.35-28.65 64-64 64h-64c-35.35 0-64-28.65-64-64s28.65-64 64-64h64V128h-175.1c-10.71 0-16-12.93-8.42-20.42l19.1-19.1C172.4 72.81 195.5 64 219.7 64H384z" fill={fill} />
  </svg>
);

const FlyingObjects = () => {
  const [objects, setObjects] = useState([]);
  
  const randomObjects = [
    { component: Dinosaur, label: "dinosaur" },
    { component: Pizza, label: "pizza" },
    { component: Laptop, label: "laptop" },
    { component: Book, label: "book" },
    { component: MusicNote, label: "music" }
  ];
  
  // Create a new random flying object
  const createRandomObject = () => {
    const randomObject = randomObjects[Math.floor(Math.random() * randomObjects.length)];
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const size = Math.random() * 25 + 25; // Random size between 25-50
    const startPosition = Math.random() > 0.5 ? "left" : "right";
    
    const startX = startPosition === "left" ? -50 : windowWidth + 50;
    const endX = startPosition === "left" ? windowWidth + 50 : -50;
    const y = Math.random() * (windowHeight * 0.6) + windowHeight * 0.2; // Keep within middle 60% of screen height
    
    return {
      id: Date.now() + Math.random(),
      component: randomObject.component,
      label: randomObject.label,
      size,
      startX,
      endX,
      y,
      rotation: Math.random() * 720 - 360, // Random rotation between -360 and 360 degrees
      duration: Math.random() * 15 + 10, // Random duration between 10-25 seconds
      delay: Math.random() * 2
    };
  };
  
  // Initialize and maintain flying objects
  useEffect(() => {
    // Initial batch of objects
    const initialObjects = Array(3).fill().map(createRandomObject);
    setObjects(initialObjects);
    
    // Add a new object periodically
    const interval = setInterval(() => {
      setObjects(prevObjects => {
        // Remove objects that have been on screen for too long
        const filteredObjects = prevObjects.filter(obj => 
          Date.now() - obj.id < obj.duration * 1000
        );
        
        // Add a new object
        return [...filteredObjects, createRandomObject()];
      });
    }, 4000); // New object every 4 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {objects.map(object => {
        const ObjectComponent = object.component;
        return (
          <motion.div
            key={object.id}
            className="absolute"
            initial={{ 
              x: object.startX,
              y: object.y,
              rotate: 0,
              opacity: 0
            }}
            animate={{ 
              x: object.endX,
              y: object.y,
              rotate: object.rotation,
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{ 
              duration: object.duration, 
              ease: "linear",
              opacity: { 
                times: [0, 0.1, 0.9, 1],
                duration: object.duration
              },
              delay: object.delay
            }}
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
            }}
          >
            <ObjectComponent size={object.size} fill="rgba(255, 255, 255, 0.8)" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlyingObjects;