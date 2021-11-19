import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
// import Profile from "../components/Profile.js";
// import Orders from "../components/Orders.js";
import { NavLink } from "react-router-dom";
// import AddProduct from "../components/AddProduct.js";
// import MakeAdmin from "../components/MakeAdmin.js";
// import ManageProducts from "../components/ManageProducts.js";
// import "../assets/css/admin.css";
// import MyOrders from "../components/MyOrders.js";
// import UpdateProduct from "../components/UpdateProduct.js";
// import AddReview from "../components/AddReview.js";
// import Payment from "../components/Payment.js";
// import AdminRoute from "../protectedRoute/AdminRoute.js";
import useContexts from "../hooks/useContexts.js";
// import useContexts from "../hooks/useContexts.js";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { email } = useContexts();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http:/localhost:5000/admin/email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [email]);
//   if (loading) {
//     return (
//       <div className="text-center my-5 private-spinner py-5">
//         <Spinner variant="danger" animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//         <h6>Loading...</h6>
//       </div>
//     );
//   }
  return (
    <div>
      <div className="mx-2 dashboard">
        <Row>
          <Col className="admin-side-bar">
            <div>
              <ul>
                {user?.role === "admin" ? (
                  <h6 className="fw-bold text-uppercase">Admin Dashboard</h6>
                ) : (
                  <h6 className="fw-bold text-uppercase">User Dashboard</h6>
                )}

                {user?.role !== "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}`}>
                       Profile
                    </NavLink>
                  </li>
                )}

                {user?.role === "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/`}>
                      Order List
                    </NavLink>
                  </li>
                )}

                {user?.role !== "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/`}>
                      My order
                    </NavLink>
                  </li>
                )}

                {user?.role === "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/`}>
                      Add Product
                    </NavLink>
                  </li>
                )}
                {user?.role === "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/`}>
                      Make admin
                    </NavLink>
                  </li>
                )}
                {user?.role !== "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/`}>
                     Payment
                    </NavLink>
                  </li>
                )}
                {user?.role === "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/`}>
                       Manage Products
                    </NavLink>
                  </li>
                )}
                {user?.role !== "admin" && (
                  <li className="sideBarLink">
                    <NavLink to={`${url}/review`}>
                       Review
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </Col>
          <Col md={8} lg="9" className="admin-container">
            <Switch>
              {/* <Route exact path={path}>
                <Profile></Profile>
              </Route>
              <Route exact path={`${path}/profile`}>
                <Profile></Profile>
              </Route>
              <AdminRoute exact path={`${path}/orders`}>
                <Orders></Orders>
              </AdminRoute> */}
              {/* <Route exact path={`${path}/myorder`}>
                <MyOrders></MyOrders>
              </Route> */}
              {/* <AdminRoute exact path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute exact path={`${path}/addProduct/:id`}>
                <UpdateProduct></UpdateProduct>
              </AdminRoute>
              <Route exact path={`${path}/review`}>
                <AddReview></AddReview>
              </Route>
              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </AdminRoute>
              <Route exact path={`${path}/payment`}>
                <Payment />
              </Route>
              <AdminRoute exact path={`${path}/manageProduct`}>
                <ManageProducts />
              </AdminRoute> */}
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;







































// import React, { useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// // import ManageOrder from '../Component/ManageOrder/ManageOrder';
// import MyOrder from '../Component/MyOrder/MyOrder';
// // import AddPlan from '../components/Admin/AddPlan'
// // import AllManagePlan from '../components/Admin/AllManagePlan'

// const Dashboard = () => {
//     const [active,setActive] = useState('All Products Managers')
//     console.log(active);

//     return (
//         <div>
//             <Container>
//                 <Row className="my-5">
//                     <Col sm={5} md={4} lg={3}>
//                     <div className="" >
//                         <ul className="list-unstyled bg-secondary rounded  p-5">
//                             <li className="  mb-2 ">
//                                 <input
//                                  onClick={()=>setActive("All Plans Managers")}
//                                 className={active === "All Plans Managers"?'d-block w-100 p-2 btn btn-primary text-white': 'd-block w-100 p-2'}
//                                 type="button"
//                                 value="All Plans Managers" />
//                                 </li>
//                             <li className="w-100 mb-2 ">
//                                 <input
//                                  onClick={()=>setActive("Add New Plan")}
//                                   className={active === "Add New Plan"?'d-block w-100 p-2 btn btn-primary text-white': 'd-block w-100 p-2'}
//                                 type="button"
//                                 value="Add New Plan" />
//                                 </li>
//                             {/* <li className="w-100 mb-2 ">
//                                 <input
//                                  onClick={()=>setActive("MY ORDER")}
//                                   className={active === "MY ORDER"?'d-block w-100 p-2 btn btn-primary text-white': 'd-block w-100 p-2'}
//                                 type="button"
//                                 value="MY ORDER" />
//                                 </li> */}
//                         </ul>
//                     </div>
//                     </Col>
//                     <Col sm={7} md={8} lg={9}>
//                         {
//                        ( active === "my Products" )
//                     //    ( active === "MY ORDER" && <MyOrder></MyOrder> )
//                        ( active === "Add New Plan")
//                         }
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default Dashboard
