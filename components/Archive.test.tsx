import { render, screen } from '@testing-library/react';
import ArchiveScroll from './Archive';

const sectionProps = {
  imageSrc: '/Edgewater1.png',
  bgColor: 'bg-black',
  textColor: 'white',
  text: 'Edgewater Landscaping Project',
  link: 'https://projectmk.vercel.app/portfolio',
};

describe('ArchiveScroll Component', () => {
  it('renders the image with correct alt text', () => {
    render(<ArchiveScroll {...sectionProps} />);

    const image = screen.getByAltText(/Edgewater Landscaping Project/i);

    expect(image).toBeInTheDocument();
  });

  it('contains a link that opens in a new tab', () => {
    render(<ArchiveScroll {...sectionProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', sectionProps.link);
    expect(link).toHaveAttribute('target', '_blank');
  });
});
