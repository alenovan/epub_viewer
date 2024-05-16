export interface NotificationParams {}

export interface Notification {
  id: number;
  id_user: number;
  title: string;
  text: string;
  link: string;
  is_read: number;
  read_at: Date | null;
  created_at: Date;
}
