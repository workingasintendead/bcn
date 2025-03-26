import Link from 'next/link';
import Image from 'next/image';

interface SectionProps {
  imageSrc: string;
  bgColor: string;
  textColor: string;
  text: string;
  link: string;
}

const ArchiveScroll: React.FC<SectionProps> = ({
  imageSrc,
  bgColor,
  textColor,
  text,
  link,
}) => {
  const shadowStyle =
    bgColor === 'bg-white'
      ? 'shadow-[7px_10px_20px_0px_rgba(0,0,0,0.7)]'
      : 'shadow-[5px_8px_20px_0px_rgba(255,255,255,0.4)]';

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] snap-start flex justify-center items-center ${bgColor}`}
    >
      <div
        className={`relative w-[80vw] h-auto overflow-hidden rounded-sm group ${shadowStyle}`}
      >
        <div className="w-full h-full transition-all duration-2000 ease-in-out group-hover:brightness-45">
          <Image
            src={imageSrc}
            alt={text}
            width={1270}
            height={720}
            className="object-cover w-full h-full grayscale transition-all duration-2000 ease-in-out group-hover:grayscale-0 rounded-sm"
          />
        </div>
        <Link href={link} target="_blank">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-sm">
            <p
              className={`text-${textColor} text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-2000 text-shadow`}
            >
              {text}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArchiveScroll;
