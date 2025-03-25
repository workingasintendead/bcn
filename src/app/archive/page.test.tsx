import { render, screen } from '@testing-library/react';
import Archive from './page';

describe('Archive Page', () => {
  it('renders the "Archive" text', () => {
    render(<Archive />);

    const ArchiveText = screen.getByText(/ARCHIVE PAGE/i);
    expect(ArchiveText).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<Archive />);

    const logo = screen.getByAltText('BCN Logo');
    expect(logo).toBeInTheDocument();

    const archiveLink = screen.getByText(/Connect/i);
    expect(archiveLink).toBeInTheDocument();
  });
});
