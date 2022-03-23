import { Empty } from "antd";
import React from "react";
import ArtworkListItem from "../../components/artwork/ArtworkListItem";
import { StyledSolidButton } from "../../components/common";
import FullLoadingBlock from "../../components/common/FullLoadingBlock";
import MainLayout from "../../components/layouts/MainLayout";
import { useAuth } from "../../contexts/AuthContext";
import { useMemberArtworkCollection } from "../../hooks/collection";

const CollectionDetailPage: React.FC = () => {
  const { currentMemberId } = useAuth();
  const { loadingMemberArtworkCollections, memberArtworkCollections } =
    useMemberArtworkCollection(currentMemberId || 0);

  return (
    <MainLayout title="我的收藏" activeKey="collection">
      {loadingMemberArtworkCollections ? (
        <FullLoadingBlock />
      ) : memberArtworkCollections.length === 0 ? (
        <Empty
          className="pt-5"
          description={<span>空空如也，趕快收藏更多作品吧</span>}
        >
          <StyledSolidButton href="/">開始逛展</StyledSolidButton>
        </Empty>
      ) : (
        memberArtworkCollections.map((artwork) => (
          <ArtworkListItem key={artwork.id} artwork={artwork} />
        ))
      )}
    </MainLayout>
  );
};

export default CollectionDetailPage;
