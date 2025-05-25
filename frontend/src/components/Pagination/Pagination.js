/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { range } from "lodash";
import Pagination from '@material-ui/lab/Pagination';
import PaginateStyle from "./PaginationStyle";
const PaginationFunc = ({ totalPros, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(totalPros / perPage);
  if (pageCount === 1) return null;
  
  const pages = range(1, pageCount + 1,);
  
  const classes = PaginateStyle();
  return (
    
    <nav  
    aria-label="Page navigation"
    className={classes.navStyle}
    >
      <ul 
      className="pagination"
      style={{justifyContent:"center",}}
 >
        {pages.map((page) => (

          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}

          >
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
            >
              {page}
   
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationFunc;
