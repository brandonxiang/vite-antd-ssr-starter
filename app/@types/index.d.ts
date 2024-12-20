export interface MenuType {
  routePath?: string; // react-router key
  routeFile?: string; // react-router filePath
  layoutPath?: string;
  title?: string; // NavLink title
  icon?: any; // NavLink icon
  noMenu?: boolean;
  hasPermission?: boolean;
  subMenu?: {
    routePath: string; // react-router key
    routeFile: string; // react-router filePath
    path?: string;
    title?: string;
    icon?: any;
    ret?: boolean;
    redirect?: string;
    noMenu?: boolean;
    hasPermission?: boolean;
  }[];
  redirect?: string;
}
