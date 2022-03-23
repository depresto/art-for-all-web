import { Breadcrumb, Skeleton } from "antd";
import Link from "next/link";
import React from "react";
import ExhibitionListItem from "../../components/exhibition/ExhibitionListItem";
import MainLayout from "../../components/layouts/MainLayout";
import { useExhibitions } from "../../hooks/exhibition";

const ExhibitionCollectionPage: React.FC = () => {
  const { loadingExhibitions, exhibitions } = useExhibitions();

  return (
    <MainLayout title="展覽" activeKey="collection">
      <Breadcrumb className="px-4 py-4" separator=">">
        <Link href="/" passHref>
          <Breadcrumb.Item>首頁</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>展覽</Breadcrumb.Item>
      </Breadcrumb>

      <Skeleton paragraph={{ rows: 10 }} loading={loadingExhibitions}>
        {exhibitions.map((exhibition) => (
          <ExhibitionListItem key={exhibition.id} {...exhibition} margin />
        ))}
      </Skeleton>
    </MainLayout>
  );
};

export default ExhibitionCollectionPage;
