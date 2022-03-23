import { Skeleton } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ArtworkSection from "../../components/artwork/ArtworkSection";
import MainLayout from "../../components/layouts/MainLayout";
import { useAudioPlayer } from "../../contexts/AudioPlayerContext";
import { useAuth } from "../../contexts/AuthContext";
import { useArtwork } from "../../hooks/artwork";

const ArtworkPage: React.FC = () => {
  const router = useRouter();
  const artworkId = router.query.artworkId as string;
  const { currentMemberId } = useAuth();
  const { loadingArtwork, artwork, refetchArtwork } = useArtwork(
    parseInt(artworkId),
    currentMemberId || 0
  );

  const { setIsPlayerShown, setAudio, currentAudio } = useAudioPlayer();

  useEffect(() => {
    setIsPlayerShown?.(true);
    return () => {
      setIsPlayerShown?.(false);
    };
  }, [setIsPlayerShown]);

  useEffect(() => {
    if (artwork?.audioUrl && artwork.audioUrl !== currentAudio?.audioUrl) {
      setAudio?.({
        id: artwork.id,
        title: artwork.title,
        audioUrl: artwork.audioUrl,
        audioCoverImageUrl: artwork.featureImageUrl || "",
      });
    }
  }, [artwork, currentAudio?.audioUrl, setAudio]);

  return (
    <MainLayout title="作品賞析" activeKey="home">
      <Skeleton paragraph={{ rows: 10 }} loading={loadingArtwork}>
        {artwork && (
          <ArtworkSection
            artwork={artwork}
            onRefetch={() => refetchArtwork()}
          />
        )}
      </Skeleton>
    </MainLayout>
  );
};

export default ArtworkPage;
