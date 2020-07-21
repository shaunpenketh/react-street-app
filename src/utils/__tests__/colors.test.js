import colors from '../colors';

describe('Colors', () => {
  it('Remains Unchanged', () => {
    expect(colors).toMatchSnapshot();
  });
});
