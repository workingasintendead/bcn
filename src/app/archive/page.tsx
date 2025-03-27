'use client';

import { observer } from 'mobx-react-lite';
import Navbar from '../../../components/Navbar';
import ArchiveScroll from '../../../components/Archive';
import { edgeConfigStore, Section } from '../../stores/edge-config-store';

const Archive: React.FC = observer(() => {
  const { configData, isLoading, error } = edgeConfigStore;

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-screen text-xl font-bold">
          &gt;&gt; LOADING &lt;&lt;
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-screen text-xl font-bold">
          &gt;&gt; Error loading configuration. Please try again later. &lt;&lt;
        </div>
      </>
    );
  }

  const sections = configData?.sections;

  if (!sections || sections.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-screen text-xl font-bold">
          &gt;&gt; No sections available. &lt;&lt;
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="scroll-container h-[calc(100vh-4rem)] snap-y snap-mandatory py-4 pt-20">
        {sections.map((section: Section, index: number) => (
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
});

export default Archive;
