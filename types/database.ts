export type PurchaseStatus = 'active' | 'returned' | 'expired' | 'dismissed';

export type NotificationType = '7_day' | '2_day' | 'day_of';

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  gmail_access_token: string | null;
  gmail_refresh_token: string | null;
  token_expires_at: string | null;
  created_at: string;
  last_sync_at: string | null;
};

export type Purchase = {
  id: string;
  user_id: string;
  retailer_name: string;
  item_description: string | null;
  order_number: string | null;
  purchase_date: string;
  return_deadline: string;
  return_window_days: number | null;
  order_email_subject: string | null;
  order_email_id: string | null;
  status: PurchaseStatus;
  created_at: string;
};

export type NotificationSent = {
  id: string;
  purchase_id: string | null;
  user_id: string | null;
  notification_type: NotificationType | null;
  sent_at: string;
};

export type WaitlistEntry = {
  id: string;
  email: string;
  created_at: string;
  source: string | null;
};

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: '12';
  };
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          gmail_access_token?: string | null;
          gmail_refresh_token?: string | null;
          token_expires_at?: string | null;
          created_at?: string;
          last_sync_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          gmail_access_token?: string | null;
          gmail_refresh_token?: string | null;
          token_expires_at?: string | null;
          created_at?: string;
          last_sync_at?: string | null;
        };
        Relationships: [];
      };
      purchases: {
        Row: Purchase;
        Insert: {
          id?: string;
          user_id: string;
          retailer_name: string;
          item_description?: string | null;
          order_number?: string | null;
          purchase_date: string;
          return_deadline: string;
          return_window_days?: number | null;
          order_email_subject?: string | null;
          order_email_id?: string | null;
          status?: PurchaseStatus;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          retailer_name?: string;
          item_description?: string | null;
          order_number?: string | null;
          purchase_date?: string;
          return_deadline?: string;
          return_window_days?: number | null;
          order_email_subject?: string | null;
          order_email_id?: string | null;
          status?: PurchaseStatus;
          created_at?: string;
        };
        Relationships: [];
      };
      notifications_sent: {
        Row: NotificationSent;
        Insert: {
          id?: string;
          purchase_id?: string | null;
          user_id?: string | null;
          notification_type?: NotificationType | null;
          sent_at?: string;
        };
        Update: {
          id?: string;
          purchase_id?: string | null;
          user_id?: string | null;
          notification_type?: NotificationType | null;
          sent_at?: string;
        };
        Relationships: [];
      };
      waitlist: {
        Row: WaitlistEntry;
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          source?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          source?: string | null;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
}
