import { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { NoAccessPage } from "../../pages/noAccessPage";
import { UserPage } from "../../pages/UserPage";
import { getAuthorizedUser } from "../../redux/actions/user.js";
import "./style.scss";
const authorizedRoutes = [
  { path: "/", element: <MainPage />, exact: true },
  { path: "/:id", element: <UserPage />, exact: true },
];

const PageRoutes = () => {
  const authorizedUser = useSelector((state) => state.users.authorizedUser);
  const isLoading = useSelector((state) => state.users.isUserLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthorizedUser());
  }, []);

  if (isLoading) {
    return (
      <div className='cnPageRoutesLoader'>
        <Bars color='#000BFf' width={80} height={80} />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {authorizedUser ? (
          authorizedRoutes.map((route) => <Route {...route} />)
        ) : (
          <Route path='/' element={<NoAccessPage />} exact />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
