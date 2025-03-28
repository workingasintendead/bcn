import { render, screen } from '@testing-library/react';
import Archive from './page';
import { edgeConfigStore } from '../../stores/edge-config-store';

jest.mock('../../stores/edge-config-store', () => ({
  edgeConfigStore: {
    configData: {
      sections: [
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
      ],
    },
    isLoading: false,
    error: null,
    fetchConfigData: jest.fn(),
  },
}));

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

  it('shows loading state when the store is loading', async () => {
    edgeConfigStore.isLoading = true;
    render(<Archive />);

    expect(screen.getByText(/LOADING/i)).toBeInTheDocument();
  });
});
