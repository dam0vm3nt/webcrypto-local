import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { TextField, SelectField, SelectItem } from '../../basic';
import { Title, GroupContainer, GroupPart } from './styles';
import enLang from '../../../langs/en.json';

const TextFieldContainer = styled.div`
  display: inline-block;
  width: calc(33.3% - 16px);
  vertical-align: top;
  margin-left: 24px;
  margin-top: 28px;
  &:nth-child(3n-2) {
    margin-left: 0;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-top: 0;
  }
  @media ${props => props.theme.media.mobile} {
    margin-left: 12px;
    width: calc(50% - 6px);
    margin-top: 15px;
    &:nth-child(1),
    &:nth-child(2) {
      margin-top: 0;
    }
    &:nth-child(3) {
      margin-top: 15px;
    }
    &:nth-child(3n-2) {
      margin-left: 12px;
    }
    &:nth-child(2n-1) {
      margin-left: 0;
    }
  }
`;

export default class SubjectInfo extends Component {

  static propTypes = {
    countries: PropTypes.oneOfType([
      PropTypes.array,
    ]),
  };

  constructor() {
    super();
    this.fieldNodes = {};
  }

  getData = () => {
    const { fieldNodes } = this;
    const data = {};

    Object.keys(fieldNodes).map((field) => {
      const node = fieldNodes[field];
      if ({}.hasOwnProperty.call(node, 'getData')) {
        data[field] = node.getData().value;
      } else {
        data[field] = node.getValue();
      }
    });

    return data;
  };

  isValidFields = () => {
    this.validateFields();
    const { fieldNodes } = this;
    let valid = true;

    Object.keys(fieldNodes).map((field) => {
      const node = fieldNodes[field];
      if (!node.isValid()) {
        valid = false;
      }
    });

    return valid;
  };

  validateFields() {
    const { fieldNodes } = this;

    Object.keys(fieldNodes).map((field) => (
      fieldNodes[field].validate()
    ));
  }

  render() {
    const { countries } = this.props;

    return (
      <GroupContainer>
        <Title>
          { enLang['CertificateCreate.Subject.Title'] }
        </Title>
        <GroupPart>
          <TextFieldContainer>
            <TextField
              labelText={enLang['CertificateCreate.Subject.Field.HostName']}
              name="hostName"
              ref={node => (this.fieldNodes.hostName = node)}
              validation={['text']}
              errorText={enLang['CertificateCreate.Subject.Field.HostName.Error']}
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextField
              labelText={enLang['CertificateCreate.Subject.Field.Organization']}
              name="organization"
              ref={node => (this.fieldNodes.organization = node)}
              validation={['text']}
              errorText={enLang['CertificateCreate.Subject.Field.Organization.Error']}
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextField
              labelText={enLang['CertificateCreate.Subject.Field.OrganizationUnit']}
              name="organizationUnit"
              ref={node => (this.fieldNodes.organizationUnit = node)}
              validation={['text']}
              errorText={enLang['CertificateCreate.Subject.Field.OrganizationUnit.Error']}
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <SelectField
              labelText={enLang['CertificateCreate.Subject.Field.Country']}
              placeholder="Select country..."
              name="country"
              ref={node => (this.fieldNodes.country = node)}
              validation={['text']}
              errorText={enLang['CertificateCreate.Subject.Field.Country.Error']}
            >
              {
                countries.map((item, index) => (
                  <SelectItem
                    key={index}
                    value={item.code}
                    primaryText={item.value}
                  />
                ))
              }
            </SelectField>
          </TextFieldContainer>
          <TextFieldContainer>
            <TextField
              labelText={enLang['CertificateCreate.Subject.Field.Region']}
              name="region"
              ref={node => (this.fieldNodes.region = node)}
              validation={['text']}
              errorText={enLang['CertificateCreate.Subject.Field.Region.Error']}
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextField
              labelText={enLang['CertificateCreate.Subject.Field.City']}
              name="city"
              ref={node => (this.fieldNodes.city = node)}
              validation={['text']}
              errorText={enLang['CertificateCreate.Subject.Field.City.Error']}
            />
          </TextFieldContainer>
        </GroupPart>
      </GroupContainer>
    );
  }
}
