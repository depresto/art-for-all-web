import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ExhibitionProps } from "../../hooks/exhibition";
import TitleBlock from "../common/TitleBlock";

const StyledImage = styled.img<{ margin?: boolean }>`
  width: 100%;
  ${(props) => props.margin && "margin-bottom: 20px;"}
`;

const ExhibitionListItem: React.FC<ExhibitionProps & { margin?: boolean }> = ({
  id,
  name,
  featuredImage,
  margin,
}) => {
  return (
    <Link href={`/exhibition/${id}`}>
      <a className="d-block mb-5">
        <TitleBlock>{name}</TitleBlock>
        {featuredImage && (
          <StyledImage
            src={featuredImage}
            alt={`這是一張圖片，展覽名稱 ${name}`}
          />
        )}
      </a>
    </Link>
  );
};

export default ExhibitionListItem;
