import { Button, Divider, Form, Input, Slider, Tabs } from 'antd'
import styled from 'styled-components'

export const AuthFormStyledDiv = styled.div`
  min-height: 350px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
`

export const StyledOutlinedButton = styled(Button)`
  width: 152.39px;
  height: 54px;
  border: 2px solid #ffb53c;
  font-size: 16px;
  letter-spacing: 0.16em;
  border-radius: 0;

  &:hover,
  &:focus {
    border: 2px solid #ffb53c;
    background: #ffb53c;
    color: #fff;
  }
`
export const StyledSolidButton = styled(Button)`
  width: 152.39px;
  height: 54px;
  border: 2px solid #ffb53c;
  background: #ffb53c;
  font-size: 16px;
  letter-spacing: 0.16em;
  border-radius: 0;

  &.ant-btn {
    line-height: 45px !important;
  }

  &:hover,
  &:focus {
    border: 2px solid #ffb53c;
    background: #fff;
    color: #000;
  }
`

export const StyledFrom = styled(Form)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 90%;
`

export const StyleFormItem = styled(Form.Item)`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  label {
    margin-left: 20px !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.16em;
  }
  .ant-form-item-explain {
    text-align: center;
  }
`

export const StyledInput = styled(Input)`
  height: 50px;
  border-radius: 25px;
  border: 2px solid #ffb53c;

  &:hover {
    border: 2px solid #ffb53c;
  }
`

export const StyledBtnsDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  max-width: 100%;
  flex-grow: 2;
  align-items: center;
`

export const StyledSlider = styled(Slider)`
  .ant-slider-rail {
    background-color: #1e5285;
  }

  .ant-slider-track {
    background-color: #1e5285;
  }
`

export const StyledTab = styled(Tabs)`
  margin-top: 30px;

  .ant-tabs-nav {
    width: 80%;
    margin: 0 auto;
  }
  .ant-tabs-nav::before {
    border-bottom: 4px solid rgba(255, 181, 60, 0.5);
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    width: 100%;
    margin: 0;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab-btn {
    width: 100%;

    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.16em;

    color: #000000;
  }
  .ant-tabs-ink-bar {
    height: 4px !important;
    background: #ffb53c;
    border-radius: 2px;
  }
`
export const StyledDivider = styled(Divider)`
  border-width: 4px;
  border-color: #ffb53c;
`

export const StyledLinkButton = styled(Button)`
  color: #1e5285;
`

export const StyledTitle = styled.h2`
  color: #1e5285;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`

export const StyledTextDiv = styled.div`
  color: black;
`
