import React, { useState } from 'react'
import styled from 'styled-components'
import DefaultLayout from './DefaultLayout'
import Header from './Header'
import NavFooter from './NavFooter'

type LayoutProps = {
  title?: string
  activeKey?: string
  expanded?: boolean
  noBackButton?: boolean
}
const StyledContentDiv = styled.div`
  margin-top: 100px;
`

const MainLayout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  title = '',
  noBackButton,
  expanded = false,
}) => {
  const [collapse, setCollapse] = useState(true)
  return (
    <DefaultLayout collapsed={collapse}>
      <Header
        title={title}
        collapse={collapse}
        onMenuClick={() => setCollapse(!collapse)}
        expanded={expanded}
        noBackButton={noBackButton}
      />
      <StyledContentDiv>{children}</StyledContentDiv>
      <NavFooter />
    </DefaultLayout>
  )
}

export default MainLayout
