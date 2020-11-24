import React from "react";
import { TDBody, TRBody, ContainerActionColumn, ActionColumn } from "./index.styled";

const BodyContent = ({ headers, content, actionColumn }) => {

  const renderItem = (item) => {
    const { formatterValue, nestedProperty } = headers[item];
    const correctItem = nestedProperty ? content[item][nestedProperty] : content[item];
    const itemFormatted = formatterValue ? formatterValue(correctItem) : null;
    return itemFormatted || correctItem;
  };

  const renderMenu = () => {
    if (!Object.keys(actionColumn).length) return <></>;

    return (
      <td>
        <ContainerActionColumn>
          <ActionColumn
            color={actionColumn.color}
            onClick={() => actionColumn.action(content)}
          >
            { actionColumn.title }
          </ActionColumn>
        </ContainerActionColumn>
      </td>
    );
  };

  return (
    <TRBody>
      {
        Object.keys(headers).map((item, index) => (
          <TDBody key={index}>
            { renderItem(item) }
          </TDBody>
        ))
      }
      { renderMenu() }
    </TRBody>
  );
};

export default BodyContent;
