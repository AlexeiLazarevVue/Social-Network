import convertToImage from '../../src/shared/lib/convertToImage';

describe('convertToImage', () => {
  test('Корректное значение', () => {
    expect(convertToImage([79, 82, 119, 48, 75, 71, 103, 111])).toBe('ORw0KGgo');
  });
});
