import React, { useState } from "react";
import BodyContent from "./Body";
import HeadContent from "./Header";
import SortDefault from "../../assets/icons/sort-default.svg";
import SortDesc from "../../assets/icons/sort-asc.svg";
import SortAsc from "../../assets/icons/sort-desc.svg";
import PropTypes from "prop-types";
import { Table, TBody, BodyVazio } from "./index.styled";

const CustomTable = ({ headers, data, msgEmptyBody, actionColumn }) => {
  const [items, setItems] = useState(data);
  const [headersOrder, setHeadersOrder] = useState(headers);

  const sortedColumn = (column, order) => {
    let orderedList = [...items];
    const ordenationFunctions = {
      desc: () => orderedList.sort((a, b) => (a[column] < b[column]) ? 1 : -1),
      asc: () => orderedList.sort((a, b) => (a[column] > b[column]) ? 1 : -1),
    };
    return ordenationFunctions[order] && ordenationFunctions[order]();
  };

  const onSortedColumns = (columns, column) => {
    const columnOrder = columns[column].order;
    const nextOrder = (columnOrder && columnOrder === "asc") ? "desc" : "asc";
    const orderedList = sortedColumn(column, nextOrder);

    const newHeadersOrder = { ...headersOrder };
    Object.keys(newHeadersOrder)
      .forEach(col => {
        newHeadersOrder[col] = {
          ...newHeadersOrder[col],
          order: column === col ? nextOrder : null
        };
      });

    setHeadersOrder(newHeadersOrder);
    setItems(orderedList);
  };

  const sortIcons = {
    desc: SortDesc,
    asc: SortAsc,
    default: SortDefault
  };

  const renderBody = () => {
    if (!items.length) return (<></>);
    return items.map((item, index) => (
      <BodyContent
        key={index}
        headers={headers}
        content={item}
        actionColumn={actionColumn}
      />
    ));
  };

  return (
    <>
      <Table>
        <thead>
          <HeadContent
            hasActionColumn={!!(Object.keys(actionColumn).length) && (actionColumn.render ? actionColumn.render() : true)}
            headers={headersOrder}
            headersIcons={sortIcons}
            onSortedColumn={onSortedColumns}
          />
        </thead>
        <TBody>
          {renderBody()}
        </TBody>
      </Table>
      {
        !items.length &&
        <BodyVazio>
          {msgEmptyBody}
        </BodyVazio>
      }
    </>
  );
};

CustomTable.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  msgEmptyBody: PropTypes.string.isRequired,
  actionColumn: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.func,
    action: PropTypes.func.isRequired
  })
};

CustomTable.defaultProps = {
  actionColumn: {
    color: () => {}
  }
};

export default CustomTable;
