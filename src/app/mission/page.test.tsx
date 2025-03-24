import { render, screen } from '@testing-library/react';
import Mission from './page';

describe('Mission Page', () => {
  it('renders the "MISSION" text', () => {
    render(<Mission />);

    const missionText = screen.getByText(/MISSION PAGE/i);
    expect(missionText).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<Mission />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Archive/i);
    expect(archiveLink).toBeInTheDocument();
  });
});
