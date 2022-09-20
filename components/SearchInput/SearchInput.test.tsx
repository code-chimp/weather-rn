import { render, screen } from '@testing-library/react-native';
import SearchInput from './SearchInput';

describe('components/SearchInput', () => {
  it('should match the snapshot', () => {
    render(<SearchInput placeholder="" onSubmit={() => {}} />);

    expect(screen.toJSON).toMatchSnapshot();
  });

  it('should display the supplied placeholder text', async () => {
    const placeholder = 'test placeholder';

    render(<SearchInput placeholder={placeholder} onSubmit={() => {}} />);

    const instances = await screen.findAllByPlaceholderText(placeholder);

    expect(instances).not.toBeNull();
    expect(instances.length).toBeGreaterThan(0);
  });
});
