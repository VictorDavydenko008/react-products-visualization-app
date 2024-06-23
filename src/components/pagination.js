import React from 'react';
import Pagination from 'rc-pagination';

function PaginationPanel({ items, page, setPage }) {
  const PaginationChange = (page, pageSize) => {
    setPage((prev) => ({
      ...prev,
      current: page
    }));
  }

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button>prev</button>;
    }
    if (type === 'next') {
      return <button>next</button>;
    }
    return originalElement;
  }

  return (
    <>
      <Pagination
        className="pagination-data"
        onChange={PaginationChange}
        total={items.length}
        current={page.current}
        pageSize={page.limit}
        showSizeChanger={true}
        itemRender={PrevNextArrow}
      />
    </>
  );
}

export default PaginationPanel;
