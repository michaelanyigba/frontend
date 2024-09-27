import React, { useEffect, useState } from "react";

const ArticlesMainPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState();
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/articles/all?search=${searchTerm}`);
        const data = await res.json();
        setArticles(data);
        if (data.error) {
          throw new Error(data.error);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [searchTerm]);

  return (
    <>
      <div className=" bg-gray-100 w-full flex flex-col min-h-screen">
      <div className=" flex justify-center items-center mt-6 h-9 mb-4">
        <div className=" flex me-8  items-center justify-center rounded-md ms-2 h-4 ">
          <form action="">
          <input
            type="text" 
            placeholder="Search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            className=" p-4 w-[400px] outline-1 mb-3 mt-2 border-2 border-pink-100 outline-none" 
          />
          </form>
        </div>
      </div>
        {articles.map((article) => (
          <div className=" bg-white rounded-sm w-full mt-1 mb-2 lg:w-[1200px] lg:mx-auto">
            <p className=" font-bold flex justify-center text-[20px] mt-1 mb-2 md:text-[30px]">
              {article.title}
            </p>
            <p className=" ps-2 pe-1 text-[18px] pb-2 md:text-[25px]">
              {article.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlesMainPage;
