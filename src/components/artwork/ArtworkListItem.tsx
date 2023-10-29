import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import SavedOutlinedImg from '../../assets/images/SavedOutlined.svg'
import SavedSolidImg from '../../assets/images/SavedSolid.svg'
import VoiceImg from '../../assets/images/voice.svg'
import { useAuth } from '../../contexts/AuthContext'
import { ArtworkProps } from '../../hooks/artwork'
import { useMemberArtworkCollectionMutation } from '../../hooks/collection'

export type ArtworkListProps = {
  artwork: ArtworkProps
  margin?: boolean
  onRefetch?: () => void
}

const StyledLink = styled.a`
  display: block;
`

const StyledImageWrapper = styled.div`
  position: relative;
  .icon {
    position: absolute;
    bottom: 12px;
    left: 12px;
    width: 30px;
    height: 30px;
  }
  .image-wrapper {
    width: 100%;
    padding-bottom: 100%;
  }
`
const StyledImageBg = styled.div<{ bgUrl: string; margin: boolean }>`
  width: 100%;
  padding-bottom: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.bgUrl});
  transition: height 0.5s;

  ${props => props.margin && 'margin-bottom: 10px;'}
`
const StyledArtworkTitleWrapper = styled.div`
  display: flex;
  .grow {
    flex: 1;
  }
`
const StyledArtworkTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
`

const ArtworkListItem: React.FC<ArtworkListProps> = ({ artwork, margin = false, onRefetch }) => {
  const router = useRouter()
  const { currentMemberId } = useAuth()
  const { insertMemberArtworkCollection, deleteMemberArtworkCollection } = useMemberArtworkCollectionMutation()

  return (
    <div className="mb-4">
      <StyledArtworkTitleWrapper className="py-2">
        <div className="grow">
          <Link href={`/artwork/${artwork.id}`} className="d-block">
            <StyledArtworkTitle>{artwork.title}</StyledArtworkTitle>
          </Link>
        </div>
        <div className="ml-2">
          {currentMemberId ? (
            artwork.saved ? (
              <SavedSolidImg
                className="vertical-align-middle"
                onClick={async () => {
                  await deleteMemberArtworkCollection(artwork.id)
                  onRefetch?.()
                }}
              />
            ) : (
              <SavedOutlinedImg
                className="vertical-align-middle"
                onClick={async () => {
                  if (currentMemberId) {
                    await insertMemberArtworkCollection(artwork.id)
                    onRefetch?.()
                  } else {
                    router.push('/auth')
                  }
                }}
              />
            )
          ) : null}
        </div>
      </StyledArtworkTitleWrapper>

      <Link href={`/artwork/${artwork.id}`} className="d-block">
        {artwork.featureImageUrl && (
          <StyledImageWrapper>
            <div className="image-wrapper">
              <Image
                src={artwork.featureImageUrl}
                alt={`這是一張圖片，作品名稱 ${artwork.title}`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="icon">
              <VoiceImg />
            </div>
          </StyledImageWrapper>
        )}
      </Link>
    </div>
  )
}

export default ArtworkListItem
