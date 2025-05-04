export type TSuccessResponce<T> = {
  status: number,
  data: T,
}

export type TErrorResponce = {
  status?: number;
  message?: string;
  code?: string;
  name: string,
  response: {
    data: {
      errors?: { [key: string]: string[] };
      message?: string;
    },
    status: number,
    statusText: string
  }
};

export type CategoriesData = {
  id: number;
  title: string;
  slug: string;
  description: string;
  h1: string;
  image: string | null;
  image_alt: string;
  image_title: string;
  lang: string;
  meta_card: string;
  meta_description: string;
  meta_image: string | null;
  meta_image_size: string;
  meta_keywords: string;
  meta_local: string;
  meta_robots: string;
  meta_site: string;
  meta_site_name: string;
  meta_title: string;
  meta_type: string;
  created_at: string;
  updated_at: string;
}


export type TAPIResponce<T> = TSuccessResponce<T> | TErrorResponce


export type termsType = {
  
    id: number,
    value: string,
    created_at: string,
    updated_at: string

}
export type citiesType = {
  id: number;
  title: string;
  slug: string;
  image: string | null;
}



export type SessionCource = {
  id: number;
  course_title: string;
  course_slug: string;
  course_image: string;
  image_alt: string;
  image_title: string;
  date_from: string; 
  date_to?: string;  
  city_title: string;
}

export type BlogPost = {
  id?: number;
  link?: string;
  title?: string;
  h1?: string;
  slug?: string;
  description?: string;
  tag_name?: string;
  number_of_views?: number;
  lang?: string;
  image?: string | null;
  image_alt?: string;
  image_title?: string;
  hidden?: number;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  meta_robots?: string;
  meta_image_size?: string;
  meta_type?: string;
  meta_site_name?: string;
  meta_site?: string;
  meta_local?: string;
  meta_card?: string;
  created_at?: string;
  updated_at?: string;
};

export type SeoMetaData = {
  id: number;
  section: string;
  lang: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_robots: string;
  meta_type: string;
  meta_site_name: string;
  meta_site: string;
  meta_local: string;
  meta_card: string;
  meta_image: string;
  meta_image_size: string;
  created_at: string; // or Date if you're converting it
  updated_at: string; // or Date if you're converting it
}


export type ErrorResponse = {
  response: {
    data: {
      message: string
    }
  }
}
export type ContactFormData = {
  full_name: string;
  phone_number: string;
  email: string;
  country: string;
  company: string;
  subject: string;
  message: string;
};

export type ContactFormResponse = {
  message: string;
  data: ContactFormData
};
export const courseRow = [
    {city: "Madrid - Spain",
    start: "23-01-2025",
    end: "26-02-2025",
    fees: "$6100"},
    {city: "Madrid - Spain",
    start: "23-01-2025",
    end: "26-02-2025",
    fees: "$6100"},
    {city: "Madrid - Spain",
    start: "23-01-2025",
    end: "26-02-2025",
    fees: "$6100"},
    {city: "Madrid - Spain",
    start: "23-01-2025",
    end: "26-02-2025",
    fees: "$6100"},
    {city: "Madrid - Spain",
    start: "23-01-2025",
    end: "26-02-2025",
    fees: "$6100"},
    {city: "Madrid - Spain",
    start: "23-01-2025",
    end: "26-02-2025",
    fees: "$6100"},
]

export type Course = {
  id?: number;
  link?: string;
  title?: string;
  slug?: string;
  h1?: string;
  lang?: string;
  overview?: string;
  description?: string;
  image?: string;
  image_alt?: string;
  image_title?: string;
  code?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  meta_robots?: string;
  meta_image?: string;
  meta_image_size?: string;
  meta_type?: string;
  meta_site_name?: string;
  meta_site?: string;
  meta_local?: string;
  meta_card?: string;
  category_id?: number;
  created_at?: string; // ISO timestamp
  updated_at?: string; // ISO timestamp
};

export type Timing = {
  id: number;
  date_from: string; // ISO date
  date_to: string;   // ISO date
  duration: number;
  price: string;
  city_title: string;
};

export type CourseDetailsResponse = {
  course: Course;
  timings: Timing[] | undefined;
};
export interface RegisterResponse {
  message: string;
  data: {
    id: number;
    full_name: string;
    email: string;
    phone_number: string;
    job_title: string;
    company_name: string;
    city: string;
    country: string;
    responsible_name: string;
    responsible_email: string;
    responsible_phone_number: string;
    responsible_position: string;
    timing_id: number;
    created_at: string;
    updated_at: string;
  };
}
export type InquiryResponse = {
  message: string;
  data: InquiryData;
};

export type InquiryData = {
  id: number;
  full_name: string;
  phone_number: string;
  email: string;
  company: string;
  city: string;
  message: string;
  course_id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};
export interface DownloadFormResponse {
  message: string;
  data: DownloadFormData;
}

export interface DownloadFormData {
  id: number;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  course_id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

export type SearchResponse = {
  id: number,
  title: string,
  slug: string
}