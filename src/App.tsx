import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import routes from "./routes";
import AuthMiddleware from "./components/AuthMiddleware";

function App() {
  return (
    <div>
      <Routes>
        {routes.map(({ path, element: Element, layout: Layout, isPrivate }, index) => {
          const Middleware = isPrivate ? AuthMiddleware : Fragment;
          return (
            <Route
              key={index}
              path={path}
              element={
                <Middleware>
                  <Layout>
                    <Element />
                  </Layout>
                </Middleware>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;