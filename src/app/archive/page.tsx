import Navbar from '../../../components/Navbar';
import ArchiveScroll from '../../../components/Archive';

const Archive: React.FC = () => {
  const sections = [
    {
      imageSrc: '/Edgewater1.png',
      bgColor: 'bg-black',
      textColor: 'white',
      text: 'Edgewater Landscaping Project 1',
      link: 'https://projectmk.vercel.app/portfolio',
    },
    {
      imageSrc: '/Edgewater1.png',
      bgColor: 'bg-white',
      textColor: 'white',
      text: 'Edgewater Landscaping Project 2',
      link: 'https://projectmk.vercel.app/portfolio',
    },
    {
      imageSrc: '/Edgewater1.png',
      bgColor: 'bg-black',
      textColor: 'white',
      text: 'Edgewater Landscaping Project 3',
      link: 'https://projectmk.vercel.app/portfolio',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="scroll-container h-[calc(100vh-4rem)] snap-y snap-mandatory py-4 pt-20">
        {sections.map((section, index) => (
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
