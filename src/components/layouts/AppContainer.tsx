import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  background: #fff;
  position: relative;
  .ant-layout-has-sider {
    flex-direction: column;
  }

  @media screen and (min-device-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
    footer,
    header {
      max-width: 500px;
    }
  }
`

const AppContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default AppContainer
