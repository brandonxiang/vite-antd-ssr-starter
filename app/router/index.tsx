import menus from './menus';
import { index, layout, route } from '@react-router/dev/routes';
import { NavLink } from 'react-router';
import { compact } from 'lodash-es';

export const getMenus = () => {
  return menus;
};

export const getHeaderMenus = () => {
  const res = menus.map((menu) => {
    if(menu.noMenu) {
      return null;
    }
    const path = menu.routePath === 'index' ? '/' : '/' + menu.routePath;
    return {
      key: menu.routePath || '',
      icon: menu.icon,
      label: (
        <NavLink to={path}>
          <span className="nav-text">{menu.title}</span>
        </NavLink>
      ),
    };
  });
  return compact(res);
};

export const getRoutes = () => {
  const res = menus.map((menu) => {


    if (menu.layoutPath && menu.subMenu) {
      return layout(menu.layoutPath, menu.subMenu.map((item) => {
        return route(item.routePath, item.routeFile);
      }));
    }

    if(menu.routeFile) {
      if (menu.routePath === 'index') {
        return index(menu.routeFile);
      }
      return route(menu.routePath, menu.routeFile);
    }

    return null;
  });
  return compact(res);
};