"use client"

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import Table from '@/components/table/Table'
import CourseCard from '@/components/courseCard/CourseCard'
import ShowTableContent from '@/components/showTableContent/ShowTableContent'
import { showColumns } from '@/components/table/dataTable'
import postData from '@/utilts/postData'
import getData from '@/utilts/getData'
import { SearchResponse, SessionCource } from '@/types/types'
import Image from 'next/image'

export default function ShowResults() {
  const searchParams = useSearchParams()

  const searchParamsValues = useMemo(() => {
    return {
      keyword: searchParams.get('keyword'),
      category: searchParams.get('category') ? parseInt(searchParams.get('category')!) : null,
      categoryText: searchParams.get('categoryText'),
      city: searchParams.get('city') ? parseInt(searchParams.get('city')!) : null,
      cityText: searchParams.get('cityText'),
      date: searchParams.get('date'),
      duration: searchParams.get('duration') ? parseInt(searchParams.get('duration')!) : null,
      durationText: searchParams.get('durationText'),
      results: searchParams.get("results") || null
    };
  }, [searchParams]);

  const [results, setResults] = useState<SearchResponse[]>([])
  const [dataCourses, setDataCourses] = useState<SessionCource[]>()
  const [searchData, setSearchData] = useState({
    keyword: "",
    durationText: "",
    categoryText: "",
    cityText: ""
  })

  const fetchCourses = async () => {
    const courses = await getData<SessionCource[]>("get-upcoming-courses?lang=en");
    setDataCourses(courses);
  };

  const fetchResult = useCallback(async () => {
    try {
      const data = await postData<SearchResponse[]>(`search`, {
        keyword: searchParamsValues.keyword,
        date: searchParamsValues.date,
        duration: searchParamsValues.duration,
        category: searchParamsValues.category,
        city: searchParamsValues.city,
      });
      setResults(data ?? []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setSearchData({
        keyword: searchParamsValues.keyword || "",
        durationText: searchParamsValues.durationText || "",
        categoryText: searchParamsValues.categoryText || "",
        cityText: searchParamsValues.cityText || "",
      });
    }
  }, [searchParamsValues]);

  useEffect(() => {
    setSearchData({
      keyword: searchParamsValues.keyword || "",
      durationText: searchParamsValues.durationText || "",
      categoryText: searchParamsValues.categoryText || "",
      cityText: searchParamsValues.cityText || "",
    });

    if (
      searchParamsValues.category ||
      searchParamsValues.city ||
      searchParamsValues.date ||
      searchParamsValues.duration ||
      searchParamsValues.keyword
    ) {
      fetchResult();
    }

    fetchCourses();
  }, [searchParamsValues, fetchResult]);

  return (
    <div className='w-full'>
      <HeroCategories setNewResults={setResults} setSearchData={setSearchData} background='bg-hero-categories-bg' />
      <div className='px-16 py-8 w-full bg-[#f0effa]'>
        <div className='flex items-center gap-10'>
          <p className='text-secondary text-2xl font-semibold'>Results For:</p>
          <h1 className='flex items-center gap-3 border border-secondary rounded-[15px] p-2 text-sm font-medium text-secondary '>
            {searchData.keyword}
            {searchData.categoryText}
            {searchData.cityText}
            {searchData.durationText}
            <Image alt='cancel' width={18} height={18} src="/cancel-x.svg" />
          </h1>
        </div>

        {results.length === 0 ? (
          <h1 className='flex items-center p-2 text-sm font-medium text-secondary '>
            There is no results
          </h1>
        ) : (
          <Table columns={showColumns} content={<ShowTableContent row={results} />} />
        )}

        <h1 className='text-secondary text-2xl font-semibold uppercase pt-8'>recommended for you</h1>
        <p className='text-secondary text-lg font-normal'>Handpicked courses just for you</p>
        <div className='433max:grid-cols-1 grid-cols-1 lg:grid-cols-3 grid gap-4 w-full pt-4'>
          {
            dataCourses?.map((ele) => (
              <CourseCard
                cite={ele.city_title}
                date={ele.date_from}
                image={ele.course_image}
                title={ele.course_title}
                key={ele.id}
                link={`/course/${ele.course_slug}`}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}