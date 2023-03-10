export type MapData = {
  place_id: number
  licence: string
  osm_type: string
  osm_id: number
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
  address: {
    house_number: string
    road: string
    suburb: string
    town: string
    county: string
    'ISO3166-2-lvl6': string
    state: string
    'ISO3166-2-lvl4': string
    postcode: string
    country: string
    country_code: string
  }
}
