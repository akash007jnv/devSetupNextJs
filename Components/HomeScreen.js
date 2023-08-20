"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [selectedCatIds, setSelectedCatIds] = useState([]);

  console.log(selectedCategories);
  useEffect(() => {
    const fetchData = async () => {
      const api = axios.create({
        baseURL: "https://setupdev.onrender.com",
        headers: {
          Authorization:
            "1a0579ac6f7634e72d2472f040f8eb95f6928123fa61e4a11daffcdcd24d779e71f6e0bd8c13af06ff0b32df18f37b9422ced4b8e48b11ab508c30855a8cfd360ab952e0a29eacbfeeb7ac23cb6c9b0ca1cb37f51f444fbd9c7e5c238ba382f5b9d0a9261c3947a91e14021d72dc664333cfcfb99fa30b550d4b8af2ff302773", // Replace with your actual access token
        },
      });

      try {
        const response = await api.get("/api/categories");
        setCategories(response.data.data);
        const fetchSetups = await api.get(`/api/setups?populate=*`);
        setPosts(fetchSetups.data.data);
        const selectedCategoryIds =
          fetchSetups.data.data.categories.data[0]?.attributes?.name ||
          "Unknown Category";

        setSelectedCatIds(selectedCategoryIds);
        setLoading(false);
        console.log(fetchSetups.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Update loading state in case of error
      }
    };

    fetchData();
  }, []);

  console.log("CatIds:", selectedCatIds, "++++++++++++++");
  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // console.log(PostIdCategory);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setSelectedPosts(posts); // If no categories are selected, show all posts
    } else {
      setSelectedPosts(
        posts.filter((post) => {
          const categoryIds = post.attributes?.categories?.data.map(
            (category) => category.id
          );

          return selectedCategories.every((selectedCategory) =>
            categoryIds.includes(selectedCategory)
          );
        })
      );
    }
  }, [selectedCategories, posts]);

  console.log("selectedPosts:", selectedPosts);
  if (loading)
    return (
      <>
        <h1 className="text-white">Loading</h1>
      </>
    );

  return (
    <div>
      {/* Category Scroll Bar */}
      <div className="overflow-scroll w-full no-scrollbar flex-nowrap gap-3 px-3 flex flex-row">
        {categories.map((category) => (
          <div className="flex-none" key={category.id}>
            <button
              className={`px-10 p-3 rounded-md flex-none bg-white ${
                selectedCategories.includes(category.id)
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.attributes.name}
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row flex-wrap justify-evenly mt-4 items-center gap-2 ">
        {selectedPosts.map((h) => {
          return (
            <div className="px-10 w-[450px] flex flex-col gap-3  bg-fuchsia-600  rounded-md ">
              <img
                src={h.attributes.imageUrl.data.attributes.url}
                className=" rounded-md h-[300px] w-[350px] p-3 "
              />

              <h1 className="text-white">{h.attributes.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
