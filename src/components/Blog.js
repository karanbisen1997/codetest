import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import { API_URL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setData, setCurrentPage } from "../utils/BlogSlice";
import Pagination from "./Pagination";

const Blog = () => {
  const dispatch = useDispatch();
  const { items, currentPage, itemPerPage } = useSelector(
    (state) => state.blogData
  );
  const {colToggle}=useSelector((state)=>state.toggle);

  const pages = Array.from(
    { length: Math.ceil(items.length / itemPerPage) },
    (_, index) => index + 1
  );

  const getBlogData = async (dispatch) => {
    const data = await fetch(API_URL);
    const jsondata = await data.json();
    dispatch(setData(jsondata));
  };
  const updateCurrentPage = (page) => {
    dispatch(setCurrentPage(page));
  };
  useEffect(() => {
    getBlogData(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="grid gap-2">
        {items
          .slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage)
          .map((item) => (
            <div className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
                <BlogCard item={item} />
              </div>
            </div>
          ))}
        <div className={`${colToggle!=='rows'?'col-span-3':''}`}>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
