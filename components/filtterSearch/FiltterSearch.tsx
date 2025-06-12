"use client";

import { comboBoxData } from "@/constant/comboBoxData";
import React, { useState, useEffect } from "react";
import ComboBox from "../comboBox/ComboBox";
import Image from "next/image";
import "./search.css";
import CustomDatepicker from "../date/Date";
import toast from "react-hot-toast";
import { CategoriesData, citiesType, SearchResponse } from "@/types/types";
import getData from "@/utilts/getData";
import { useRouter } from "next/navigation";
import postData from "@/utilts/postData";

interface FiltterSearchProps {
  searchFun?: (keyword: string | null,
    date: string | null,
    duration: number | null,
    category: number | null,
    city: number | null,) => void,
  setSearchData?: ({
    keyword,
    durationText,
    categoryText,
    cityText,
    date
  }: {
    keyword: string;
    durationText: string;
    categoryText: string;
    cityText: string;
    date: string
  }) => void;
  setNewResults?: (results: SearchResponse[]) => void,

}

const FiltterSearch: React.FC<FiltterSearchProps> = ({ searchFun, setSearchData, setNewResults }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cities, setCities] = useState<{
    options: string,
    value: number,
  }[]>([{
    options: "",
    value: 0,
  }])
  const [categories, setCategories] = useState<{
    options: string,
    value: number,
  }[]>([{
    options: "",
    value: 0,
  }])

  const [formData, setFormData] = useState<{
    keyword: string,
    date: string,
    duration: number | null,
    durationText: string | null,
    category: number | null,
    categoryText: string | null,
    city: number | null,
    cityText: string | null,
  }>({
    keyword: "",
    date: "",
    duration: null,
    durationText: "",
    category: null,
    categoryText: "",
    city: null,
    cityText: ""
  });



  const getCities = async () => {
    const data = await getData<citiesType[]>("get-all-cities")
    const citiesData = data || [];

    const formattedCities = citiesData.map((ele) => ({
      options: ele.title,
      value: ele.id,
    }));

    setCities(formattedCities);
    const categoriesData = await getData<CategoriesData[]>("get-all-categories");
    const items = categoriesData || [];
    const formattedCategories = items.map((ele) => ({
      options: ele.title,
      value: ele.id,
    }));
    setCategories(formattedCategories)
  }
  useEffect(() => {
    getCities()
  }, [])

  const handleClear = () => {
    setFormData({
      keyword: "",
      date: "",
      duration: null,
      durationText: "",
      category: null,
      categoryText: "",
      city: null,
      cityText: ""
    })
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(formData)
    e.preventDefault();
    if (allFieldsEmpty()) {
      toast.error("Please fill at least one field before searching.");
    } else {
      if (searchFun) {
        searchFun(formData.keyword,
          formData.date,
          formData.duration,
          formData.category,
          formData.city,);
      } else {
        setIsLoading(true);
        try {
          const requestData: Record<string, string | number> = {};

          if (formData.keyword.trim() !== "") requestData.keyword = formData.keyword.trim();
          if (formData.date.trim() !== "") requestData.date_form = formData.date.trim();
          if (formData.duration !== null) requestData.duration = formData.duration;
          if (formData.category !== null) requestData.category = formData.category;
          if (formData.city !== null) requestData.city = formData.city;


          const data = await postData<SearchResponse[]>(`search`, requestData);
          setNewResults?.(data ?? [])
          setSearchData?.({
            keyword: formData.keyword,
            durationText: formData.durationText || "",
            categoryText: formData.categoryText || "",
            cityText: formData.cityText || "",
            date: formData.date || ""
          });

        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setIsLoading(false);
        }
        const queryData: Record<string, string> = {
          keyword: formData.keyword || "",
          date: formData.date || "",
          duration: formData.duration?.toString() || "",
          durationText: formData.durationText || "",
          category: formData.category?.toString() || "",
          categoryText: formData.categoryText || "",
          city: formData.city?.toString() || "",
          cityText: formData.cityText || "",
        };

        const queryString = new URLSearchParams(queryData).toString();
        router.push(`/show-result?${queryString}`);

      }
    }
  };


  const allFieldsEmpty = () => {
    return (
      formData.keyword.trim() === "" &&
      formData.date.trim() === "" &&
      formData.duration === null &&
      formData.category === null &&
      formData.city === null
    );
  };



  return (
    <form onSubmit={handleSubmit} className="sm:gap-4 lg:gap-1 justify-center w-[90%] flex flex-col items-center mx-auto bg-[#F0EFFA66] backdrop-blur-[20px] p-4 rounded-[10px]">
      {/* Search Input */}
      <div className="relative w-full">
        <Image
          alt="search"
          width={24}
          height={24}
          src="/search-filtter.svg"
          className={ `cursor-pointer right-0 absolute bottom-1` }
        />
        <Image
          alt="search"
          width={24}
          height={24}
          src="/search.svg"
          className={"left-0 absolute bottom-1"}
        />
        <input
          type="search"
          value={formData.keyword}
          onChange={(e) => setFormData({ ...formData, keyword: e.target.value })}
          placeholder={"Search ..." }
          className="w-full  text-white px-8 outline-none border-b-[1px] border-white bg-transparent"
        />
      </div>

      {/* ComboBoxes */}
      <div className="flex transition-all gap-4 flex-col items-center w-full">
        <div className="sm:gap-x-4 lg:gap-x-8 gap-y-5 md:gap-x-8 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 w-full gap-x-4">
          {comboBoxData.map((ele) => (
            <ComboBox
              key={ele.lable}
              label={ele.lable}
              options={ele.options}
              value={formData.duration}
              onChange={(value, text) => {
                setFormData((prev) => ({
                  ...prev,
                  duration: value as number | null,
                  durationText: text,
                }))
              }}
            />
          ))
        }

          <ComboBox
            label={"Category"}
            options={categories}
            value={formData.category}
            onChange={(value, text) => {
              setFormData((prev) => ({
                ...prev,
                category: value as number | null,
                categoryText: text,
              }))
            }}
          />
          {/* Date Picker */}
          <CustomDatepicker
 
            value={formData.date}
            onChange={(value: string) => setFormData({ ...formData, date: value })}
          />
          <ComboBox
            label={"Venue" }
            options={cities}
            value={formData.city}
            onChange={(value, text) => {
              setFormData((prev) => ({
                ...prev,
                city: value as number | null,
                cityText: text,
              }))
            }}
          />


          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className={`relative bg-white transform flex items-center justify-center transition-transform duration-200 text-secondary w-1/2 rounded h-[40px]
                }`}
            >
              {!isLoading &&  "Search"}
              {isLoading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded">
                  <div className="w-6 h-6 border-4 border-t-transparent border-secondary rounded-full animate-spin" />
                </div>
              )}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-transparent transform transition-transform duration-200 text-white border border-white rounded w-1/2 h-[40px]"
            >
              {
                 "Clear"
              }
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FiltterSearch
