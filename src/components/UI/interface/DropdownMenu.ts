import { ColorScheme } from "../../../types/UI";

export type DropdownMenuItem = { to: string; title: string };

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  buttonName?: string;
  buttonImage?: string;
  buttonType?: ColorScheme;
}
