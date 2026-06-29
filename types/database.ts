export type PurchaseStatus = 'active' | 'returned' | 'expired' | 'dismissed';

export type NotificationType = '7_day' | '2_day' | 'day_of';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  gmail_access_token: string | null;
  gmail_refresh_token: string | null;
  token_expires_at: string | null;
  created_at: string;
  last_sync_at: string | null;
}

export interface Purchase {
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
}

export interface NotificationSent {
  id: string;
  purchase_id: string | null;
  user_id: string | null;
  notification_type: NotificationType | null;
  sent_at: string;
}

export interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
  source: string | null;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Partial<Profile> & Pick<Profile, 'id' | 'email'>;
        Update: Partial<Profile>;
      };
      purchases: {
        Row: Purchase;
        Insert: Partial<Purchase> &
          Pick<Purchase, 'user_id' | 'retailer_name' | 'purchase_date' | 'return_deadline'>;
        Update: Partial<Purchase>;
      };
      notifications_sent: {
        Row: NotificationSent;
        Insert: Partial<NotificationSent>;
        Update: Partial<NotificationSent>;
      };
      waitlist: {
        Row: WaitlistEntry;
        Insert: Partial<WaitlistEntry> & Pick<WaitlistEntry, 'email'>;
        Update: Partial<WaitlistEntry>;
      };
    };
  };
}
