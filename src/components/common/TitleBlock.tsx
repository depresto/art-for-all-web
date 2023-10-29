import React from 'react'
import styled, { css } from 'styled-components'

export const StyledTitleDiv = styled.div<{ margin?: boolean }>`
  ${props =>
    props.margin &&
    css`
      margin-top: 30px;
    `}
  position: relative;
  margin-bottom: 20px;

  .title-text {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1px;
    vertical-align: middle;

    color: #1e5285;
    background: #f3f3f3;
    border-radius: 0 20px 20px 0;

    width: 80%;
    padding: 8px 10px;
    padding-left: 20px;
  }
`
export const StyledTitleTextDiv = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  vertical-align: middle;

  color: #1e5285;
  background: #f3f3f3;
  border-radius: 0 20px 20px 0;

  width: 80%;
  padding: 8px 10px;
  padding-left: 20px;
`

const TitleBlock: React.FC<React.PropsWithChildren<{ margin?: boolean; className?: string }>> = ({
  margin,
  className,
  children,
}) => {
  return (
    <StyledTitleDiv className={className} margin={margin}>
      <h1 className="title-text">{children}</h1>
    </StyledTitleDiv>
  )
}

export default TitleBlock
