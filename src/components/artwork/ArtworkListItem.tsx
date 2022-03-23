import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SavedOutlinedImg } from '../../assets/images/SavedOutlined.svg'
import { ReactComponent as SavedSolidImg } from '../../assets/images/SavedSolid.svg'
import VoiceImg from '../../assets/images/voice.svg'
import { useAuth } from '../../contexts/AuthContext'
import { ArtworkProps } from '../../hooks/artwork'
import { useMemberArtworkCollectionMutation } from '../../hooks/collection'

export type ArtworkListProps = {
  artwork: ArtworkProps
  margin?: boolean
  onRefetch?: () => void
}

const StyledLink = styled(Link)`
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
  const history = useHistory()
  const { currentMemberId } = useAuth()
  const { insertMemberArtworkCollection, deleteMemberArtworkCollection } = useMemberArtworkCollectionMutation()

  return (
    <div className="mb-4">
      <StyledArtworkTitleWrapper className="py-2">
        <div className="grow">
          <StyledLink to={`/artwork/${artwork.id}`}>
            <StyledArtworkTitle>{artwork.title}</StyledArtworkTitle>
          </StyledLink>
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
                    history.push('/auth')
                  }
                }}
              />
            )
          ) : null}
        </div>
      </StyledArtworkTitleWrapper>

      <StyledLink to={`/artwork/${artwork.id}`}>
        {artwork.featureImageUrl && (
          <StyledImageWrapper>
            <StyledImageBg
              bgUrl={artwork.featureImageUrl}
              margin={margin}
              title={`這是一張圖片，作品名稱 ${artwork.title}`}
            />
            <img className="icon" src={VoiceImg} alt="" />
          </StyledImageWrapper>
        )}
      </StyledLink>
    </div>
  )
}

export default ArtworkListItem
