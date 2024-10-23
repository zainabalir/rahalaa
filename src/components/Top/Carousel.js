import React, { useEffect, useRef, useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { PlaneGeometry } from 'three'; // Correct import
import 'materialize-css/dist/css/materialize.min.css';
import image1 from "./abbasid-palace (1).jpg";
import image2 from "./citadel-of-erbi.jpg";
import image3 from "./hanging-gardens-of-babylon.jpg";
import image4 from "./hatra-ruins.jpg";
import image5 from "./imam-ali-shrine.jpg";
import image6 from "./korek-mountains.jpg";
import image7 from "./riverfronts-along-the-tigris-river.jpg";
import image8 from "./ziggurat-of-ur.jpg";
import image9 from "./hanging-gardens-of-babylon.jpg";
import helvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json';

// Extend geometries into react-three-fiber
extend({ TextGeometry, PlaneGeometry });

const Frame = ({ position, rotation, image, title, description }) => {
  const texture = useTexture(image);
  const fontRef = useRef();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load(
      helvetiker,
      (loadedFont) => {
        fontRef.current = loadedFont;
        setFontLoaded(true);
      },
      undefined,
      (error) => {
        console.error('Font loading error:', error);
      }
    );
  }, []);

  return (
    <mesh position={position} rotation={rotation}>
      {/* Plane for image */}
      <planeGeometry args={[3, 2]} />
      <meshBasicMaterial map={texture} />

      {/* Text below the image, only render if font is loaded */}
      {fontLoaded && (
        <>
          <mesh position={[0, -1.5, 0]}>
            <textGeometry
              attach="geometry"
              args={[title, { font: fontRef.current, size: 0.15, height: 0.05 }]}
            />
            <meshBasicMaterial color="black" />
          </mesh>
          <mesh position={[0, -2, 0]}>
            <textGeometry
              attach="geometry"
              args={[description, { font: fontRef.current, size: 0.1, height: 0.05 }]}
            />
            <meshBasicMaterial color="gray" />
          </mesh>
        </>
      )}
    </mesh>
  );
};

const Carousel = () => {
  const frames = [
    { image: image1, title: 'Place 1', description: 'This is Place 1' },
    { image: image2, title: 'Place 2', description: 'This is Place 2' },
    { image: image3, title: 'Place 3', description: 'This is Place 3' },
    { image: image4, title: 'Place 4', description: 'This is Place 4' },
    { image: image5, title: 'Place 5', description: 'This is Place 5' },
    { image: image6, title: 'Place 6', description: 'This is Place 6' },
    { image: image7, title: 'Place 7', description: 'This is Place 7' },
    { image: image8, title: 'Place 8', description: 'This is Place 8' },
    { image: image9, title: 'Place 9', description: 'This is Place 9' },
  ];

  const radius = 10;
  const angleStep = (2 * Math.PI) / frames.length;

  return (
    <div className="container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        {frames.map((frame, index) => {
          const angle = index * angleStep;
          const x = radius * Math.sin(angle);
          const z = radius * Math.cos(angle);
          return (
            <Frame
              key={index}
              position={[x, 0, z]}
              rotation={[0, -angle, 0]}
              image={frame.image}
              title={frame.title}
              description={frame.description}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default Carousel;
