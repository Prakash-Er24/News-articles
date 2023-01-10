import {useState} from 'react'

function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);

    function currentData() {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return data.slice(begin, end);
    }
  
    function jump(page) {
      setCurrentPage(page);
    }
    return { jump, currentData };
  }

export default usePagination