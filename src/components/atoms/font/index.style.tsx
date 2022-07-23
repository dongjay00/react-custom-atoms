import styled from '@emotion/styled';
import { FontType } from './index.d';

export const FontArea = styled.span<FontType>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
`;
