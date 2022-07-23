import { Color } from '../index';
import * as Style from './index.style';
import { FontType } from './index.d';

export default function Font({
  children,
  fontWeight = 500,
  fontSize = 14,
  color = Color.black100,
  lineHeight = 1.5,
}: FontType) {
  return (
    <Style.FontArea
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </Style.FontArea>
  );
}
