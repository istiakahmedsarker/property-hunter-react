import LatestBlogHome from '../LatestBlogHome';

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('latest blog testing', () => {
  render(<LatestBlogHome />);
  const text = screen.getByText('Our latest Blogs');
  expect(text).toBeInTheDocument();
});
