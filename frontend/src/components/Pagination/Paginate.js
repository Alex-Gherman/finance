import _ from "lodash";

export const paginate = (datas, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(datas).slice(startIndex).take(perPage).value();
};