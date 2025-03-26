'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import ArchiveScroll from '../../../components/Archive';

interface Section {
  imageSrc: string;
  bgColor: string;
  textColor: string;
  text: string;
  link: string;
}

const Archive: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await fetch('/api/edge-config');
        const data = await res.json();
        setSections(data);
      } catch {
        setSections([]);
      }
    };

    fetchSections();
  }, []);

  return (
    <>
      <Navbar />
      <div className="scroll-container h-[calc(100vh-4rem)] snap-y snap-mandatory py-4 pt-20">
        {sections.length > 0 &&
          sections.map((section, index) => (
            <ArchiveScroll
              key={index}
              imageSrc={section.imageSrc}
              bgColor={section.bgColor}
              textColor={section.textColor}
              text={section.text}
              link={section.link}
            />
          ))}
      </div>
    </>
  );
};

export default Archive;
