import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledLoading = styled.div`
  background: rgba(white, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-spin-dot-item {
    background-color: #1e5285;
  }
`

const FullLoadingBlock: React.FC = () => {
  return (
    <StyledLoading>
      <Spin size="large" />
    </StyledLoading>
  )
}

export default FullLoadingBlock
