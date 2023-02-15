interface BannerType {
    depth?: string;
    description: string;
    hotel_id: number;
    images: string;
    link: string;
    mobile_images: string;
    name: string;
    promotion: string;
    route: string;
    tab?: string;
    tags?: string;
    view?: string;
}

interface EarlyBirdType {
  id: number;
  title: string;
  hotel_id?: number;
  explanation?: string;
  event?: string;
  url: string;
  custom: {
    button: {
      name: string;
    },
    typeform: {
      id: string;
    }
  };
  layout: {
    background: {
      color: string;
    }
  };
  time_limit: {
    start_dt?: Date;
    end_dt?: Date;
  };
  image: string;
  image_mobile?: string;
}

export { type BannerType, type EarlyBirdType }