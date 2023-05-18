import ReactPaginate from 'react-paginate';
import { IPagination } from '../../types/interfaces';

export default function Pagination({ total_pages, getPageNumber, currentPage }: IPagination) {
  const handlePageClick = (event: any) => {
    console.log(event.selected + 1);
    getPageNumber(event.selected + 1);
  };
  return (
    <>
      <div id='container'>
        <ReactPaginate
          breakLabel='...'
          nextLabel='>'
          previousLabel='<'
          forcePage={Number(currentPage) - 1}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={total_pages}
          renderOnZeroPageCount={null}
          containerClassName='pagination-container'
          pageLinkClassName='linumber'
          nextLinkClassName='linumber'
          previousLinkClassName='linumber'
          activeLinkClassName='liactive'
        />
      </div>
    </>
  );
}

// Add a <div id="container"> to your HTML to see the component rendered.
