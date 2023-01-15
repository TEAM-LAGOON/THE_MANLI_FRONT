interface UserProfileType {
  profileImg?: string;
  nickname?: string;
  level?: number;
}

export interface NavbarPropsType {
  isOpen: boolean;
  onOpenHandler: Function;
  user: UserProfileType | undefined | null;
  logout: () => void;
}
