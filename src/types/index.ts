export type ImageResponse = {
  CONTENT_TYPE: string;
  DESCRIPTION: string;
  HEIGHT: string;
  URL: string;
  WIDTH: string;
};

export interface ResponseError {
  ERROR?: {
    BACKTRACE: {
      file: string;
      line: number;
    };
    ID: string;
    MESSAGE: string;
  };
  error?: string;
}

export interface ObjForRequest {
  action: string;
  page: number;
  page_size: number;
  filter?: {
    PROPERTY_CATEGORIES_VALUE?: string;
    SECTION_CODE?: string;
    PROPERTY_HUE_VALUE?: string;
    PROPERTY_FORM_VALUE?: string;
  };
}

export interface PropsDetailPictures {
  HEIGHT: string;
  WIDTH: string;
  CONTENT_TYPE: string;
  DESCRIPTION: string;
  URL: string;
}

export interface ItemTexturesObjects {
  HEIGHT: string;
  IBLOCK_ID: string;
  IBLOCK_SECTION_ID: string;
  ID: string;
  LENGTH: string;
  NAME: string;
  PARENTS: any;
  PREVIEW_PICTURE: PropsDetailPictures;
  PREVIEW_TEXT: string;
  PROPERTIES: {
    SCALE: string;
    STYLE: string;
    HUE: Array<string>;
    FORM: string;
    CATEGORIES: Array<string>;
  };
  PRICE: string;
}

export type InfoBlock = {
  title: string;
  description: string;
  id: string | number;
};

export type DataResponse = Record<string, string | ImageResponse>;

export const defaultContextValue = {
  allData: {} as DataResponse,
  explanationData: [] as InfoBlock[],
  questionsData: [] as InfoBlock[],
};

export type ContextData = typeof defaultContextValue;
