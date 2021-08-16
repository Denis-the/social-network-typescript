import { DropdownMenuItem } from "../UI/interface/DropdownMenu";
import routes from "../../routes/config";

export const headerNavigation = [
  { name: "Profile", href: routes.profile },
  { name: "Users", href: routes.users },
];

export const headerDropdownMenuItems: DropdownMenuItem[] = [
  { to: routes.profile, title: "Your Profile" },
  { to: routes.settings, title: "Settings" },
  { to: routes.login, title: "Sign Out" },
];
