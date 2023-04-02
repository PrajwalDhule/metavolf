import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { auth } from "../firebase/clientApp";
import { onAuthStateChanged } from "firebase/auth";
const Dashboard = () => {
  const [serviceData, setServiceData] = useState(null);
  const [singleServiceData, setSingleServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  // const [user, loadinguser, error] = useAuthState(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setUserEmail(user.email);
      }
    });

    if (auth.currentUser) {
      //setLoading(false);
      //setUserEmail(auth.currentUser.email);
      //console.log(auth.currentUser.uid);
      axios
        .post("/api/services", {
          email: auth.currentUser.email,
        })
        .then((res) => {
          console.log(res.data.data);
          setServiceData(res.data.data);

          // console.log(serviceData[0].serviceDescription);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .post("/api/services", {
          email: auth.currentUser.email,
        })
        .then((res) => {
          console.log(res.data.data);
          setServiceData(res.data.data);

          // console.log(serviceData[0].serviceDescription);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auth.currentUser]);
  if (auth.currentUser === null) {
    return <div>not logged in</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  if (!serviceData) {
    return <div>no service</div>;
  }

  return (
    <div className="bg-[#161b26] ">
      <nav
        className="bg-[#141922]  fixed z-3 w-[20vw] h-[90vh] left-[1vw] top-[5vh] shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md"
        id="left-bar"
      >
        <div className="container nav-container flex relative justify-left pt-[3vh] pl-[1.5vw]">
          <ul className="menu-items text-sm">
            <li className="mt-[.5rem] mb-6">
              <Link className="link logo" href="/">
                <div>
                  <img
                    src="/logo.png"
                    alt="hypersales logo"
                    className="w-4/5"
                  />
                </div>
              </Link>
            </li>
            <div className="h-[1px] my-4 w-[17vw] bg-[#ffffff] opacity-[20%]"></div>
            <li className="my-3">
              <p className="text-base font-semibold">Current Services</p>
            </li>
            {serviceData &&
              serviceData.map((service, index) => {
                return service.serviceID != serviceData.serviceID ? (
                  <li
                    className={`mb-3 mr-[1.5vw] cursor-pointer text-sm px-3 py-2 rounded-sm ${
                      service == singleServiceData ||
                      (index == 0 && !singleServiceData)
                        ? "bg-[#2c2c2c]"
                        : ""
                    }`}
                    key={service.serviceID}
                    onClick={() => {
                      setSingleServiceData(service);
                    }}
                  >
                    <div>{/* <img src={bell} /> */}</div>
                    <p>{service.serviceName}</p>
                  </li>
                ) : (
                  ""
                );
              })}
            <div className="h-[1px] my-4 w-[17vw] bg-[#ffffff] opacity-[20%]"></div>
            <li className="my-3">
              <p className="text-base font-semibold">For you</p>
            </li>

            <li className="mb-3 mr-[1.5vw] px-2 py-1 rounded-sm ">
              <Link className="link icons " href="/">
                <div>{/* <img src={plus} /> */}</div>
                <p>service 1</p>
              </Link>
            </li>
            <li className="mb-3 mr-[1.5vw] px-2 py-1 rounded-sm ">
              <Link className="link icons " href="/">
                <div>{/* <img src={plus} /> */}</div>
                <p>service 2</p>
              </Link>
            </li>

            <li className="mb-3 mr-[1.5vw] px-2 py-1 rounded-sm ">
              <Link className="link icons" href="/">
                <div className="profile-icon">
                  {/* <img src={props.image} /> */}
                </div>
                <p>service 3</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="overflow-y-hidden">
        <section className="bg-[#141922] relative left-1/2 translate-x-[-50%] flex justify-between w-[54vw] px-10 py-8 mb-4 top-[5vh] overflow-x-hidden shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md">
          <div className="max-w-[67%]">
            <h2 className="text-3xl font-bold">
              {singleServiceData
                ? singleServiceData.serviceName
                : serviceData[0].serviceName}
            </h2>
            <p className="font-light my-4 text-sm">
              {singleServiceData
                ? singleServiceData.serviceDescription
                : serviceData[0].serviceDescription}
            </p>
          </div>
          <div>
            <p className="text-green-500">active</p>
            <div className="mt-4">
              Progress:{" "}
              <p className="text-3xl">
                {singleServiceData
                  ? singleServiceData.serviceProgress
                  : serviceData[0].serviceProgress}{" "}
                %
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#141922] relative left-1/2 translate-x-[-50%] flex justify-between w-[54vw] px-10 py-8 mb-4 top-[5vh] overflow-x-hidden shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md">
          <div className="max-w-[60%]">
            <h2 className="text-3xl font-medium">Payment</h2>
            <p className="font-light my-3 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
          <div>
            {/* <p className="text-green-500">active</p> */}
            <div className="mt-4">
              Progress: <p className="text-3xl">60%</p>
            </div>
          </div>
        </section>
      </main>
      <nav
        className="bg-[#141922]  fixed z-3 w-[20vw] h-[90vh] right-[1vw] top-[5vh] shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md"
        id="left-bar"
      >
        <div className="container nav-container flex relative justify-left pt-[3vh] pl-[1.5vw]">
          <ul className="menu-items text-sm">
            <li className="mt-[.5rem] mb-6">
              <Link className="link logo" href="/">
                <div>
                  {/* <img
                    src="/logo.png"
                    alt="hypersales logo"
                    className="w-4/5"
                  /> */}
                  <p className="text-xl font-medium">Prajwal Dhule</p>
                </div>
              </Link>
            </li>
            <div className="h-[1px] my-4 w-[17vw] bg-[#ffffff] opacity-[20%]"></div>
            <li className="my-3">
              <p className="text-base font-semibold">Pending</p>
            </li>
            {(singleServiceData
              ? singleServiceData
              : serviceData[0]
            ).serviceTasks.map((task, index) => {
              return (
                <li
                  className="mb-3 mr-[1.5vw] cursor-pointer text-sm px-2 py-1 rounded-sm 
                    "
                  key={index}
                  // onClick={() => {
                  //   setSingleServiceData(task);
                  // }}
                >
                  <div>{/* <img src={bell} /> */}</div>
                  <p>{task}</p>
                </li>
              );
            })}
            <div className="h-[1px] my-4 w-[17vw] bg-[#ffffff] opacity-[20%]"></div>
            <li className="my-3">
              <p className="text-base font-semibold">Fulfilled</p>
            </li>

            {(singleServiceData
              ? singleServiceData
              : serviceData[0]
            ).serviceTasks.map((task, index) => {
              return (
                <li
                  className="mb-3 mr-[1.5vw] cursor-pointer text-sm px-2 py-1 rounded-sm 
                    "
                  key={index}
                  // onClick={() => {
                  //   setSingleServiceData(task);
                  // }}
                >
                  <div>{/* <img src={bell} /> */}</div>
                  <p>{task}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
