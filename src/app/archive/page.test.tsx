import { render, screen } from '@testing-library/react';
import Archive from './page';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          imageSrc: '/Edgewater1.png',
          bgColor: 'bg-black',
          textColor: 'white',
          text: 'Edgewater Landscaping Project 1',
          link: 'https://projectmk.vercel.app/portfolio',
        },
        {
          imageSrc: '/Edgewater2.png',
          bgColor: 'bg-white',
          textColor: 'black',
          text: 'Edgewater Landscaping Project 2',
          link: 'https://projectmk.vercel.app/portfolio',
        },
      ]),
  })
) as jest.Mock<Promise<Response>>;

describe('Archive Page', () => {
  it('renders the Navbar component', () => {
    render(<Archive />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Connect/i);
    expect(archiveLink).toBeInTheDocument();
  });

  it('renders the Archive component without crashing', () => {
    render(<Archive />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders sections after data is fetched', async () => {
    render(<Archive />);

    const sections = await screen.findAllByText(/project/i);
    expect(sections.length).toBeGreaterThan(0);
  });
});
