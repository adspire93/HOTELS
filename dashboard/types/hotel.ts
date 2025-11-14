export interface Hotel {
  hotel_name: string;
  google_place_id: string;
  full_address: string;
  latitude: number;
  longitude: number;
  google_rating: number;
  user_ratings_total: number;
  price_level: number | null;
  primary_phone: string;
  website: string;
  star_segment: string;
  primary_email: string;
  alternate_emails: string;
  travel_desk_phone: string | null;
  travel_desk_email: string | null;
  alternate_phones: string | null;
  notes: string;
}
