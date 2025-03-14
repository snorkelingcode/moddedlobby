// User Types
export type UserType = 'developer' | 'client';

export interface UserProfile {
  email: string;
  accountType: UserType;
  subscriptionRenewal: string;
  perks: string[];
}

// Project Types
export interface Project {
  id: number;
  name: string;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  accentColor?: string;
  font?: string;
  domain?: string;
  status?: string;
  transferEmail?: string;
}

// Module Types
export interface ModuleCategory {
  title: string;
  modules: string[];
}

// Component Props
export interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  as?: React.ElementType;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  [x: string]: any;
}

export interface HeaderProps {
  onMenuClick: () => void;
}

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NavigationProps {
  activeTab: string;
}

// Page Props
export interface DashboardProps {
  userType?: UserType;
}

export interface ProfileSettingsProps {
  userType?: UserType;
}

export interface ContactPageProps {
  onClose?: () => void;
}

export interface MenuPageProps {
  onClose?: () => void;
}