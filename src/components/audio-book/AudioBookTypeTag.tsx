import React from 'react'
import styled from 'styled-components'

const colorSet = ['#FFB53C', '#B0D8AF', '#F29EA6']
const StyledAudioBookTypeTag = styled.div<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding: 4px 0;
  border-radius: 10px 10px 0 0;
  background-color: ${props => colorSet[props.index % colorSet.length]};
  color: #1e5285;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &.active {
    filter: brightness(85%);
  }
`
type AudioBookTypeTagProps = {
  className?: string
  active?: boolean
  index?: number
  onClick?: () => void
}
const AudioBookTypeTag: React.FC<AudioBookTypeTagProps> = ({ className, active, index = 0, onClick, children }) => {
  return (
    <StyledAudioBookTypeTag className={`${className} ${active ? 'active' : ''}`} index={index} onClick={onClick}>
      {children}
    </StyledAudioBookTypeTag>
  )
}

export default AudioBookTypeTag
