import { CourseDetailsResponse } from "@/types/types";

// courses coulmns
export const courseCoulmns = 
    ["City",
    "Start Date",
    "End Date",
    "Fees",
    "",
    "",
    ""
]
// courser row static data
export const courses: CourseDetailsResponse = 
    {
      course: {
        id: 1,
        title: "Introduction to Web Development",
        slug: "web-dev-intro",
        h1: "Start Your Web Dev Journey",
        lang: "en",
        overview: "Learn the basics of modern web development using HTML, CSS, and JavaScript.",
        description: "This course is designed for complete beginners who want to get into web development.",
        image: "images/courses/web-dev.jpg",
        image_alt: "Laptop showing code editor",
        image_title: "Web Development Intro",
        code: "WD101",
        meta_title: "Web Dev Course",
        meta_description: "Kickstart your coding career with our beginner-friendly course.",
        meta_keywords: "web, html, css, javascript, frontend",
        meta_robots: "index, follow",
        meta_image: "https://example.com/images/meta/web-dev.jpg",
        meta_image_size: "640x480",
        meta_type: "course",
        meta_site_name: "CodeAcademy",
        meta_site: "https://codeacademy.com",
        meta_local: "en_US",
        meta_card: "summary_large_image",
        category_id: 2,
        created_at: "2025-03-01T09:00:00Z",
        updated_at: "2025-03-15T12:30:00Z"
      },
      timings: [
        {
          id: 1,
          date_from: "2025-06-01",
          date_to: "2025-06-15",
          duration: 14,
          price: "299.99",
          city_title: "Berlin"
        },
        {
          id: 2,
          date_from: "2025-07-01",
          date_to: "2025-07-15",
          duration: 14,
          price: "299.99",
          city_title: "Madrid"
        }
      ]
    }
  
  
// show result categories columns
export const showColumns = [
    "course name",
    "Venues & Dates"
]
//  show result categories rows static data
export const showRows = [
    {
        name: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        
    },
    {
        name: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        
    },
    {
        name: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        
    },
    {
        name: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        
    },
    {
        name: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        
    },
    {
        name: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        
    },
]

// show result venue columns
export const showResultVenueCoulmn = [
    "course title",
    "city",
    "start date",
    "end date",
    ""
]
export const showResultVenueRows = [
    {
        title: "Organizing and Behavioral Skills for Administrative Professionals and Executive Secretaries Course",
        city: "Madrid",
        start: "23-01-2025",
        end: "26-02-2025"
    }
]