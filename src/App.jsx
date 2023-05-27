import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import { Details } from "./pages/details/Details";
import { Home } from "./pages/home/Home";
import { SearchResult } from "./pages/searchResult/SearchResult";
import { Explore } from "./pages/explore/Explore";
import { PageNotFound } from "./pages/404/PageNotFound";
import { Layout } from "./Layout/Layout";

export default function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genreCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genreCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"];
    let allGenres = {};

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
