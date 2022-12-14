export default interface Events {
  name: string;
  description: string;
  url: string;
  start: string;
  end: string;
  organization_id: string;
  created: string;
  changed: string;
  capacity: number;
  capacity_is_custom: boolean;
  status: string;
  currency: string;
  listed: boolean;
  shareable: boolean;
  invite_only: boolean;
  online_event: boolean;
  show_remaining: boolean;
  tx_time_limit: number;
  hide_start_date: boolean;
  hide_end_date: boolean;
  locale: string;
  is_locked: boolean;
  privacy_setting: string;
  is_series: boolean;
  is_series_parent: boolean;
  inventory_type: string;
  is_reserved_seating: boolean;
  show_pick_a_seat: boolean;
  show_seatmap_thumbnail: boolean;
  show_colors_in_seatmap_thumbnail: boolean;
  source: string;
  is_free: boolean;
  version: null;
  summary: null;
  facebook_event_id: null;
  logo_id: null;
  organizer_id: number;
  venue_id: null;
  category_id: null;
  subcategory_id: null;
  format_id: null;
  id: number;
  resource_uri: string;
  is_externally_ticketed: boolean;
  logo: null;
}
