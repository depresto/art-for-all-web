import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'

const StyledSearchDiv = styled.div`
  width: 60%;
  margin: 10px auto;
`
const StyledSearchInput = styled(Input)`
  border: none;
  border-bottom: 2px solid #1e5285;

  .ant-input-prefix {
    color: #1e5285;
    font-size: 20px;
  }
`

const SearchInput: React.FC = () => {
  return (
    <StyledSearchDiv>
      <StyledSearchInput prefix={<SearchOutlined />} />
    </StyledSearchDiv>
  )
}

export default SearchInput
