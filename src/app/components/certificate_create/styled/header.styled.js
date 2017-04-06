import styled from 'styled-components';
import { ArrowBackIcon } from '../../svg';
import { Button } from '../../basic';

export const Title = styled.div`
  line-height: 36px;
  color: ${props => props.theme.certificateCreate.colorHeader};
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.008em;
  width: 100%;
  max-width: 870px;
  margin: 0 auto;
  @media ${props => props.theme.media.mobile} {
    font-size: 18px;
    line-height: 56px;
    text-align: center;
  }
`;

export const IconStyled = styled(ArrowBackIcon)`
  width: 12px;
`;

export const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.certificateCreate.borderColorHeader};
  padding: 24px 0;
  position: relative;
  z-index: 1;
  @media ${props => props.theme.media.mobile} {
    padding: 0;
  }
`;

export const Btn = styled(Button)`
  position: absolute;
  top: 24px;
  left: 0;
  @media ${props => props.theme.media.mobile} {
    display: none !important;
  }
`;

export const Header = styled.div`
  height: 85px;
  padding: 0 30px;
  font-size: 0;
  @media ${props => props.theme.media.mobile} {
    height: 56px;
    padding: 0 10px;
  }
`;
