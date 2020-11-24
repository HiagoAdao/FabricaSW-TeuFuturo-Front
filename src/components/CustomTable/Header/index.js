import React from "react";
import { THead, ContainerHead, SortIcon, TextHead } from "./index.styled";


const HeadContent = ({ headers, headersIcons, onSortedColumn, hasActionColumn=false }) => {
  const onClickColumn = (column) => {
    if (!headers[column].orderableColumn) return;
    onSortedColumn && onSortedColumn(headers, column);
  };

  return (
    <tr>
      {
        Object.keys(headers).map((header, index) => (
          <THead key={index} id={header}>
            <ContainerHead>
              {
                (headersIcons && headers[header].orderableColumn) &&
                <SortIcon
                  onClick={() => onClickColumn(header)}
                  src={headersIcons[headers[header].order] || headersIcons.default}
                  alt={"Ordenar Coluna"}
                />
              }
              <TextHead
                cursor={headers[header].orderableColumn ? "pointer" : "default"}
                onClick={() => onClickColumn(header)}
              >
                {headers[header].title}
              </TextHead>
            </ContainerHead>
          </THead>
        ))
      }
      {
        hasActionColumn &&
        <th />
      }
    </tr>
  );
};

export default HeadContent;
