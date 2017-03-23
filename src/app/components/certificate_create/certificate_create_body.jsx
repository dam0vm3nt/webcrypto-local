import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { Button } from '../basic';
import Details from './parts/details';
import SubjectInfo from './parts/subject_info';
import KeyInfo from './parts/key_info';
import enLang from '../../langs/en.json';

const BtnsContainer = styled.div`
  text-align: center;
  font-size: 0;
  margin-top: 55px;
  @media ${props => props.theme.media.mobile} {
    margin-top: 26px;
  }
`;

const ButtonStyled = styled(Button)`
  margin-left: 10px;
  @media ${props => props.theme.media.mobile} {
    margin-left: 8px;
  }
`;

const Container = styled.div`
  max-width: 890px;
  padding: 0 10px;
  margin: 0 auto;
  @media ${props => props.theme.media.mobile} {
    padding: 0 20px;
  }
`;

const CertificateCreateBodyStyled = styled.div`
  height: calc(100% - 84px);
  overflow: auto;
  padding: 75px 0 80px;
  @media ${props => props.theme.media.mobile} {
    height: calc(100% - 56px);
    padding: 36px 0;
  }
`;

export default class CertificateCreateBody extends Component {

  static propTypes = {
    algorithms: PropTypes.oneOfType([
      PropTypes.array,
    ]),
    keySizes: PropTypes.oneOfType([
      PropTypes.array,
    ]),
    countries: PropTypes.oneOfType([
      PropTypes.array,
    ]),
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
  };

  onCreateHandler = () => {
    const { onCreate } = this.props;
    const detailsData = this.detailsNode.getData();
    const subjectData = this.subjectNode.getData();
    const keyData = this.keyNode.getData();
    const data = Object.assign(detailsData, subjectData, keyData);

    if (onCreate) onCreate(data);
  };

  onCancelHandler = () => {
    const { onCancel } = this.props;
    if (onCancel) onCancel();
  };

  render() {
    const { countries, algorithms, keySizes } = this.props;

    return (
      <CertificateCreateBodyStyled>
        <Container>
          <Details
            ref={node => (this.detailsNode = node)}
          />
          <SubjectInfo
            countries={countries}
            ref={node => (this.subjectNode = node)}
          />
          <KeyInfo
            algorithms={algorithms}
            keySizes={keySizes}
            ref={node => (this.keyNode = node)}
          />
          <BtnsContainer>
            <Button
              onClick={this.onCancelHandler}
            >
              { enLang['CertificateCreate.Body.Btn.Cancel'] }
            </Button>
            <ButtonStyled
              primary
              onClick={this.onCreateHandler}
            >
              { enLang['CertificateCreate.Body.Btn.Create'] }
            </ButtonStyled>
          </BtnsContainer>
        </Container>
      </CertificateCreateBodyStyled>
    );
  }
}
