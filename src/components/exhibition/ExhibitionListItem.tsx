import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { ExhibitionProps } from '../../hooks/exhibition'
import TitleBlock from '../common/TitleBlock'

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 72%;
`

const ExhibitionListItem: React.FC<ExhibitionProps & { margin?: boolean }> = ({ id, name, featuredImage, margin }) => {
  return (
    <Link href={`/exhibition/${id}`}>
      <a className="d-block mb-5">
        <TitleBlock>{name}</TitleBlock>
        <StyledImageWrapper>
          {featuredImage && (
            <Image src={featuredImage} alt={`這是一張圖片，展覽名稱 ${name}`} layout="fill" objectFit="cover" />
          )}
        </StyledImageWrapper>
      </a>
    </Link>
  )
}

export default ExhibitionListItem
