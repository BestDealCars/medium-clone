export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      action_type: {
        Row: {
          action_name: string
          action_type_id: number
        }
        Insert: {
          action_name: string
          action_type_id: number
        }
        Update: {
          action_name?: string
          action_type_id?: number
        }
      }
      articles: {
        Row: {
          content: string | null
          id: number
          inserted_at: string
          title: string | null
          user_id: string
          user_mail: string | null
        }
        Insert: {
          content?: string | null
          id?: number
          inserted_at?: string
          title?: string | null
          user_id: string
          user_mail?: string | null
        }
        Update: {
          content?: string | null
          id?: number
          inserted_at?: string
          title?: string | null
          user_id?: string
          user_mail?: string | null
        }
      }
      body_type: {
        Row: {
          body_type_id: number
          name_en: string | null
          name_es: string
          name_it: string | null
          name_pl: string | null
        }
        Insert: {
          body_type_id: number
          name_en?: string | null
          name_es: string
          name_it?: string | null
          name_pl?: string | null
        }
        Update: {
          body_type_id?: number
          name_en?: string | null
          name_es?: string
          name_it?: string | null
          name_pl?: string | null
        }
      }
      coches_dealer: {
        Row: {
          address: string | null
          cars_newer: number | null
          cars_older: number | null
          city: string | null
          dealer_id: number
          dealer_name: string | null
          last_offer_date: string | null
          phone: string | null
          province: string | null
          url: string | null
          zip_code: number | null
        }
        Insert: {
          address?: string | null
          cars_newer?: number | null
          cars_older?: number | null
          city?: string | null
          dealer_id: number
          dealer_name?: string | null
          last_offer_date?: string | null
          phone?: string | null
          province?: string | null
          url?: string | null
          zip_code?: number | null
        }
        Update: {
          address?: string | null
          cars_newer?: number | null
          cars_older?: number | null
          city?: string | null
          dealer_id?: number
          dealer_name?: string | null
          last_offer_date?: string | null
          phone?: string | null
          province?: string | null
          url?: string | null
          zip_code?: number | null
        }
      }
      coches_group: {
        Row: {
          body_type_id: number
          capacity: number | null
          data_ver: number
          fuel_type_id: number
          gearbox_id: number
          group_id: number
          make: string
          model: string
          offers_num: number | null
          power: number | null
          price_max: number | null
          price_mean: number | null
          price_median: number | null
          price_min: number | null
          seats: number | null
          std_deviation: number | null
          trim_level: string | null
          version: string | null
          year: number
        }
        Insert: {
          body_type_id: number
          capacity?: number | null
          data_ver?: number
          fuel_type_id: number
          gearbox_id: number
          group_id: number
          make: string
          model: string
          offers_num?: number | null
          power?: number | null
          price_max?: number | null
          price_mean?: number | null
          price_median?: number | null
          price_min?: number | null
          seats?: number | null
          std_deviation?: number | null
          trim_level?: string | null
          version?: string | null
          year: number
        }
        Update: {
          body_type_id?: number
          capacity?: number | null
          data_ver?: number
          fuel_type_id?: number
          gearbox_id?: number
          group_id?: number
          make?: string
          model?: string
          offers_num?: number | null
          power?: number | null
          price_max?: number | null
          price_mean?: number | null
          price_median?: number | null
          price_min?: number | null
          seats?: number | null
          std_deviation?: number | null
          trim_level?: string | null
          version?: string | null
          year?: number
        }
      }
      deal_state: {
        Row: {
          deal_state_id: number
          deal_state_name: string
        }
        Insert: {
          deal_state_id: number
          deal_state_name: string
        }
        Update: {
          deal_state_id?: number
          deal_state_name?: string
        }
      }
      dealer: {
        Row: {
          coches_id: number | null
          dealer_address: string | null
          dealer_city: string | null
          dealer_country: string | null
          dealer_id: number
          dealer_name: string
          dealer_region: string | null
          dealer_zip_code: string | null
          email: string
          first_name: string
          nip_eu: string | null
          phone1: string | null
          skype: string | null
          surname: string
          url: string | null
          user_id: string
          whatsapp: string | null
        }
        Insert: {
          coches_id?: number | null
          dealer_address?: string | null
          dealer_city?: string | null
          dealer_country?: string | null
          dealer_id?: number
          dealer_name: string
          dealer_region?: string | null
          dealer_zip_code?: string | null
          email: string
          first_name: string
          nip_eu?: string | null
          phone1?: string | null
          skype?: string | null
          surname: string
          url?: string | null
          user_id: string
          whatsapp?: string | null
        }
        Update: {
          coches_id?: number | null
          dealer_address?: string | null
          dealer_city?: string | null
          dealer_country?: string | null
          dealer_id?: number
          dealer_name?: string
          dealer_region?: string | null
          dealer_zip_code?: string | null
          email?: string
          first_name?: string
          nip_eu?: string | null
          phone1?: string | null
          skype?: string | null
          surname?: string
          url?: string | null
          user_id?: string
          whatsapp?: string | null
        }
      }
      dealer_order: {
        Row: {
          add_info: string | null
          body_type_id: number
          dealer_id: number
          fuel_type_id: number
          gearbox_id: number
          is_active: boolean | null
          make: string
          model: string
          order_end_time: string | null
          order_id: number
          order_quantity: number
          order_start_time: string
          year_from: number
          year_to: number
        }
        Insert: {
          add_info?: string | null
          body_type_id: number
          dealer_id: number
          fuel_type_id: number
          gearbox_id: number
          is_active?: boolean | null
          make: string
          model: string
          order_end_time?: string | null
          order_id?: number
          order_quantity?: number
          order_start_time: string
          year_from: number
          year_to: number
        }
        Update: {
          add_info?: string | null
          body_type_id?: number
          dealer_id?: number
          fuel_type_id?: number
          gearbox_id?: number
          is_active?: boolean | null
          make?: string
          model?: string
          order_end_time?: string | null
          order_id?: number
          order_quantity?: number
          order_start_time?: string
          year_from?: number
          year_to?: number
        }
      }
      fuel_type: {
        Row: {
          fuel_type_id: number
          name_en: string | null
          name_es: string
          name_it: string | null
          name_pl: string | null
        }
        Insert: {
          fuel_type_id: number
          name_en?: string | null
          name_es: string
          name_it?: string | null
          name_pl?: string | null
        }
        Update: {
          fuel_type_id?: number
          name_en?: string | null
          name_es?: string
          name_it?: string | null
          name_pl?: string | null
        }
      }
      gearbox_type: {
        Row: {
          gearbox_id: number
          name_en: string | null
          name_es: string
          name_it: string | null
          name_pl: string | null
        }
        Insert: {
          gearbox_id: number
          name_en?: string | null
          name_es: string
          name_it?: string | null
          name_pl?: string | null
        }
        Update: {
          gearbox_id?: number
          name_en?: string | null
          name_es?: string
          name_it?: string | null
          name_pl?: string | null
        }
      }
      group_match: {
        Row: {
          body_matched: boolean
          capacity_matched: boolean
          data_ver: number
          fuel_matched: boolean
          gearbox_matched: boolean
          group_id: number
          match_rating: number
          offer_id: number
          power_matched: boolean
          seats_matched: boolean
          strong_matching: boolean
          trim_level_matched: boolean
        }
        Insert: {
          body_matched?: boolean
          capacity_matched?: boolean
          data_ver: number
          fuel_matched?: boolean
          gearbox_matched?: boolean
          group_id: number
          match_rating?: number
          offer_id: number
          power_matched?: boolean
          seats_matched?: boolean
          strong_matching?: boolean
          trim_level_matched?: boolean
        }
        Update: {
          body_matched?: boolean
          capacity_matched?: boolean
          data_ver?: number
          fuel_matched?: boolean
          gearbox_matched?: boolean
          group_id?: number
          match_rating?: number
          offer_id?: number
          power_matched?: boolean
          seats_matched?: boolean
          strong_matching?: boolean
          trim_level_matched?: boolean
        }
      }
      order_deal_step: {
        Row: {
          action_time: string
          action_type_id: number
          message: string | null
          offer_id: number
          order_id: number
          support_user_id: number | null
        }
        Insert: {
          action_time: string
          action_type_id: number
          message?: string | null
          offer_id: number
          order_id: number
          support_user_id?: number | null
        }
        Update: {
          action_time?: string
          action_type_id?: number
          message?: string | null
          offer_id?: number
          order_id?: number
          support_user_id?: number | null
        }
      }
      oto_moto_offer: {
        Row: {
          accident_free: boolean | null
          ad_title: string | null
          body_type_id: number
          capacity: number
          city: string | null
          color: string | null
          color_type: string | null
          country_origin: string | null
          created_at: string
          currency: string | null
          doors: number | null
          equipment: Json | null
          financial_type: Json | null
          first_owner: boolean | null
          first_register_date: string | null
          fuel_type_id: number
          gearbox_id: number
          generation: string | null
          is_active: boolean
          is_business: boolean | null
          is_vat_offer: boolean
          make: string
          mileage: number
          mileage_per_year: number | null
          model: string
          offer_id: number
          offer_title: string
          offer_url: string
          photos: Json | null
          power: number
          price: number
          price_eval: string
          price_eval_max: number
          price_eval_min: number
          published_at: string
          rate_legal: number | null
          rate_mileage: number | null
          rate_overall: number | null
          rate_price: number | null
          rate_quality: number | null
          region: string | null
          registered_in_pl: boolean | null
          registration: string | null
          seats: number | null
          seller_id: number
          serviced_aso: boolean | null
          subregion: string | null
          transmission: string | null
          version: string | null
          video: string | null
          vin: string | null
          year: number
        }
        Insert: {
          accident_free?: boolean | null
          ad_title?: string | null
          body_type_id: number
          capacity: number
          city?: string | null
          color?: string | null
          color_type?: string | null
          country_origin?: string | null
          created_at: string
          currency?: string | null
          doors?: number | null
          equipment?: Json | null
          financial_type?: Json | null
          first_owner?: boolean | null
          first_register_date?: string | null
          fuel_type_id: number
          gearbox_id: number
          generation?: string | null
          is_active?: boolean
          is_business?: boolean | null
          is_vat_offer: boolean
          make: string
          mileage: number
          mileage_per_year?: number | null
          model: string
          offer_id: number
          offer_title: string
          offer_url: string
          photos?: Json | null
          power: number
          price: number
          price_eval: string
          price_eval_max?: number
          price_eval_min?: number
          published_at: string
          rate_legal?: number | null
          rate_mileage?: number | null
          rate_overall?: number | null
          rate_price?: number | null
          rate_quality?: number | null
          region?: string | null
          registered_in_pl?: boolean | null
          registration?: string | null
          seats?: number | null
          seller_id: number
          serviced_aso?: boolean | null
          subregion?: string | null
          transmission?: string | null
          version?: string | null
          video?: string | null
          vin?: string | null
          year: number
        }
        Update: {
          accident_free?: boolean | null
          ad_title?: string | null
          body_type_id?: number
          capacity?: number
          city?: string | null
          color?: string | null
          color_type?: string | null
          country_origin?: string | null
          created_at?: string
          currency?: string | null
          doors?: number | null
          equipment?: Json | null
          financial_type?: Json | null
          first_owner?: boolean | null
          first_register_date?: string | null
          fuel_type_id?: number
          gearbox_id?: number
          generation?: string | null
          is_active?: boolean
          is_business?: boolean | null
          is_vat_offer?: boolean
          make?: string
          mileage?: number
          mileage_per_year?: number | null
          model?: string
          offer_id?: number
          offer_title?: string
          offer_url?: string
          photos?: Json | null
          power?: number
          price?: number
          price_eval?: string
          price_eval_max?: number
          price_eval_min?: number
          published_at?: string
          rate_legal?: number | null
          rate_mileage?: number | null
          rate_overall?: number | null
          rate_price?: number | null
          rate_quality?: number | null
          region?: string | null
          registered_in_pl?: boolean | null
          registration?: string | null
          seats?: number | null
          seller_id?: number
          serviced_aso?: boolean | null
          subregion?: string | null
          transmission?: string | null
          version?: string | null
          video?: string | null
          vin?: string | null
          year?: number
        }
      }
      oto_moto_offer_change: {
        Row: {
          change_counter: number
          currency: string | null
          offer_id: number
          price: number | null
          price_start_time: string
        }
        Insert: {
          change_counter: number
          currency?: string | null
          offer_id: number
          price?: number | null
          price_start_time: string
        }
        Update: {
          change_counter?: number
          currency?: string | null
          offer_id?: number
          price?: number | null
          price_start_time?: string
        }
      }
      oto_moto_order_car: {
        Row: {
          deal_state_id: number | null
          documents: Json | null
          offer_id: number
          order_id: number
          photos: Json | null
          publish_end_time: string | null
          publish_start_time: string | null
          publish_status_id: number | null
          purchase_price_eur: number | null
          sell_price_eur: number
          sell_revenue: number | null
        }
        Insert: {
          deal_state_id?: number | null
          documents?: Json | null
          offer_id: number
          order_id: number
          photos?: Json | null
          publish_end_time?: string | null
          publish_start_time?: string | null
          publish_status_id?: number | null
          purchase_price_eur?: number | null
          sell_price_eur: number
          sell_revenue?: number | null
        }
        Update: {
          deal_state_id?: number | null
          documents?: Json | null
          offer_id?: number
          order_id?: number
          photos?: Json | null
          publish_end_time?: string | null
          publish_start_time?: string | null
          publish_status_id?: number | null
          purchase_price_eur?: number | null
          sell_price_eur?: number
          sell_revenue?: number | null
        }
      }
      oto_moto_seller: {
        Row: {
          seller_id: number
          seller_name: string | null
          seller_url: string | null
        }
        Insert: {
          seller_id: number
          seller_name?: string | null
          seller_url?: string | null
        }
        Update: {
          seller_id?: number
          seller_name?: string | null
          seller_url?: string | null
        }
      }
      oto_moto_super_offer: {
        Row: {
          coches_cars: number | null
          coches_median: number | null
          coches_popularity: number | null
          early_rate: number
          early_rate_time: string | null
          matching_cars: number | null
          matching_strength: number | null
          offer_id: number
          offer_price_pln: number | null
          photos: Json | null
          publish_candidate: boolean
          publish_end_time: string | null
          publish_start_time: string | null
          publish_status_id: number | null
          purchase_eur_rate: number | null
          purchase_price_eur: number | null
          purchase_price_pln: number | null
          sell_price_eur: number | null
          sell_revenue: number | null
          sell_revenue_percent: number | null
          source_data_changed: boolean
        }
        Insert: {
          coches_cars?: number | null
          coches_median?: number | null
          coches_popularity?: number | null
          early_rate?: number
          early_rate_time?: string | null
          matching_cars?: number | null
          matching_strength?: number | null
          offer_id: number
          offer_price_pln?: number | null
          photos?: Json | null
          publish_candidate?: boolean
          publish_end_time?: string | null
          publish_start_time?: string | null
          publish_status_id?: number | null
          purchase_eur_rate?: number | null
          purchase_price_eur?: number | null
          purchase_price_pln?: number | null
          sell_price_eur?: number | null
          sell_revenue?: number | null
          sell_revenue_percent?: number | null
          source_data_changed?: boolean
        }
        Update: {
          coches_cars?: number | null
          coches_median?: number | null
          coches_popularity?: number | null
          early_rate?: number
          early_rate_time?: string | null
          matching_cars?: number | null
          matching_strength?: number | null
          offer_id?: number
          offer_price_pln?: number | null
          photos?: Json | null
          publish_candidate?: boolean
          publish_end_time?: string | null
          publish_start_time?: string | null
          publish_status_id?: number | null
          purchase_eur_rate?: number | null
          purchase_price_eur?: number | null
          purchase_price_pln?: number | null
          sell_price_eur?: number | null
          sell_revenue?: number | null
          sell_revenue_percent?: number | null
          source_data_changed?: boolean
        }
      }
      publish_status: {
        Row: {
          image_link_en: string | null
          image_link_es: string | null
          publish_status_en: string | null
          publish_status_es: string
          publish_status_id: number
        }
        Insert: {
          image_link_en?: string | null
          image_link_es?: string | null
          publish_status_en?: string | null
          publish_status_es: string
          publish_status_id: number
        }
        Update: {
          image_link_en?: string | null
          image_link_es?: string | null
          publish_status_en?: string | null
          publish_status_es?: string
          publish_status_id?: number
        }
      }
      settings: {
        Row: {
          curr_groups_set: number
          euro_rate: number
          min_revenue: number
          purchase_discount: number
          sales_margin: number
        }
        Insert: {
          curr_groups_set?: number
          euro_rate?: number
          min_revenue: number
          purchase_discount: number
          sales_margin: number
        }
        Update: {
          curr_groups_set?: number
          euro_rate?: number
          min_revenue?: number
          purchase_discount?: number
          sales_margin?: number
        }
      }
      success_deal: {
        Row: {
          comment: string | null
          dealer_id: number
          offer_id: number
          sell_price: number
        }
        Insert: {
          comment?: string | null
          dealer_id: number
          offer_id: number
          sell_price: number
        }
        Update: {
          comment?: string | null
          dealer_id?: number
          offer_id?: number
          sell_price?: number
        }
      }
      super_offer_deal: {
        Row: {
          deal_state_id: number
          dealer_id: number
          documents: Json | null
          offer_id: number
        }
        Insert: {
          deal_state_id: number
          dealer_id: number
          documents?: Json | null
          offer_id: number
        }
        Update: {
          deal_state_id?: number
          dealer_id?: number
          documents?: Json | null
          offer_id?: number
        }
      }
      super_offer_deal_step: {
        Row: {
          action_time: string
          action_type_id: number
          dealer_id: number
          message: string | null
          offer_id: number
          support_user_id: number | null
        }
        Insert: {
          action_time: string
          action_type_id: number
          dealer_id: number
          message?: string | null
          offer_id: number
          support_user_id?: number | null
        }
        Update: {
          action_time?: string
          action_type_id?: number
          dealer_id?: number
          message?: string | null
          offer_id?: number
          support_user_id?: number | null
        }
      }
      user_details: {
        Row: {
          name: string | null
          surname: string | null
          user_id: string
          user_type: number | null
        }
        Insert: {
          name?: string | null
          surname?: string | null
          user_id: string
          user_type?: number | null
        }
        Update: {
          name?: string | null
          surname?: string | null
          user_id?: string
          user_type?: number | null
        }
      }
      user_type: {
        Row: {
          user_type_id: number
          user_type_name: string
        }
        Insert: {
          user_type_id?: number
          user_type_name: string
        }
        Update: {
          user_type_id?: number
          user_type_name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
