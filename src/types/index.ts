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

interface HotelType {
  type: string;
  hotel_id: number;
  hotel_price_scheme: string;
  star: string;
  first_image_position_y: string;
  image: string;
  name: string;
  description: string;
  subway_station: string;
  tags: Array<string>;
  events: Array<string>;
  price: {
    is_price: boolean;
    is_coupon: boolean;
    price: {
      max_night: number;
      price: number;
      discount: number;
      sale_price: number;
      min_night: number;
      min_night_price: number;
      min_night_discount: number;
      min_night_sale_price: number;
    }[];
  };
  coupons ?: string;
  timesale: {
    type: string;
    format: string;
    content?: string;
    remaining: string;
    end_at: string;
  }[]
}

export { type BannerType, type EarlyBirdType, type HotelType }