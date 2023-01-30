interface UserProfileType {
  profileImg?: string;
  nickname?: string;
  level?: string;
}

export interface NavbarPropsType {
  isOpen: boolean;
  onOpenHandler: Function;
  user: UserProfileType | undefined | null;
  logout: () => void;
}
