# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
-useEffect(callback,dependency)-> to apply side effects on loading to functional components
    ->can be given various side effects based on dependency
    ->if dependency not provided- side effects applied to all items
    ->if dependency is empty array- side effects applied at the time component creation
-useParams():used to redirect from one location to another
