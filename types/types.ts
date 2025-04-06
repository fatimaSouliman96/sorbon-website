export type TSuccessResponce<T> = {
  status: number,
  statusText: string,
  data: {
    status: number,
    success: boolean,
    meta?: {
      current_page: number,
      last_page: number,
      page: number,
      per_page: number,
      total: number
    };
    data: T,
    message: string
  },
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
  id: number,
  name: string,
  description: string,
  image: string,
  rating: number,
  slug: string,
  price: string,
  parent: {
    name: string
  }
}
export type settingsData = {
  cleaning_company: {
    contact: {
      cleaning_company_contact_facebook: string,
      cleaning_company_contact_instagram: string,
      phocleaning_company_contact_phone: string,
      cleaning_company_contact_web_site: string,
      cleaning_company_contact_whatsapp: string,
    }
  }
}

export type TAPIResponce<T> = TSuccessResponce<T> | TErrorResponce


export type registerType = {
  name: string;
  phone: string;
  website: string;
  logo: null | File;
  description: string;
  location_id: string;
  location: string;
  email: string;
  city: string

};

export type errorsType = {
  name: string;
  phone: string;
  city: string,
  website: string;
  logo: string;
  description: string;
  location_id: string;
  location: string;
  email: string;
  failed: string
};

export type citiesType = {
  id: number,
  name: string,
}
export type regionType = {
  id: number,
  name: string,
}

export type ErrorResponse = {
  response: {
    data: {
      message: string
    }
  }
}