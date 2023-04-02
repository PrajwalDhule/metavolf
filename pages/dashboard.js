import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { auth } from "../firebase/clientApp";
import { onAuthStateChanged } from "firebase/auth";
const Dashboard = () => {
  const [serviceData, setServiceData] = useState(null);
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
        className="bg-[#141922]  fixed z-3 w-[16vw] h-[90vh] left-[1vw] top-[5vh] shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md"
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

            <li className="mb-3">
              <Link className="link icons flex" href="/">
                <div>
                  <img src="/star.svg" className="w-5 mr-2" />
                </div>
                <p className="">Current Service</p>
              </Link>
            </li>
            <li className="mb-6">
              {/* <Link className="link icons" href="/"> */}
              <a
                className="link icons"
                // onClick={hideNavText}
              >
                <div>{/* <img src={search} /> */}</div>
                {/* <p>{serviceData.serviceName}</p> */}
              </a>
              {/* </Link> */}
            </li>
            <li className=" mb-3">
              <Link className="link icons flex" href="/">
                <div>
                  <img src="/heart.svg" className="w-5 mr-2" />
                </div>
                <p>For you</p>
              </Link>
            </li>

            <li className="mb-3">
              <Link className="link icons " href="/">
                <div>{/* <img src={plus} /> */}</div>
                <p>service 2</p>
              </Link>
            </li>

            <li className="mb-3">
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
        <section className="bg-[#141922] relative left-1/2 translate-x-[-49.5%] flex justify-between w-[60vw] px-10 py-8 mb-4 top-[5vh] overflow-x-hidden shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md">
          <div className="max-w-[60%]">
            {/* <h2 className="text-3xl">{serviceData.serviceName}</h2> */}
            <p className="font-light my-2  text-sm">
              {serviceData[0].serviceDescription}
            </p>
          </div>
          <div>
            <p className="text-green-500">active</p>
            <div className="mt-4">
              Progress: <p className="text-3xl">60%</p>
            </div>
          </div>
        </section>
        <section className="bg-[#141922] relative left-1/2 translate-x-[-49.5%] flex justify-between w-[60vw] px-10 py-8 mb-4 top-[5vh] overflow-x-hidden shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md">
          <div className="max-w-[60%]">
            <h2 className="text-3xl">Service name</h2>
            <p className="font-light my-3 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
          <div>
            <p className="text-green-500">active</p>
            <div className="mt-4">
              Progress: <p className="text-3xl">60%</p>
            </div>
          </div>
        </section>
        <section className="bg-[#141922] relative left-1/2 translate-x-[-49.5%] flex justify-between w-[60vw] px-10 py-8 mb-4 top-[5vh] overflow-x-hidden shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md">
          <div className="max-w-[60%]">
            <h2 className="text-3xl">Service name</h2>
            <p className="font-light my-3 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
          <div>
            <p className="text-green-500">active</p>
            <div className="mt-4">
              Progress: <p className="text-3xl">60%</p>
            </div>
          </div>
        </section>
      </main>
      <nav
        className="bg-[#141922]  fixed z-3 w-[16vw] h-[90vh] right-[1vw] top-[5vh] shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] rounded-md"
        id="left-bar"
      >
        <div className="container nav-container flex relative justify-left pt-[3vh] pl-[1.5vw]">
          <ul className="menu-items">
            <li className="mb-3">
              <Link className="link icons flex" href="/">
                <div>
                  <img src="/star.svg" className="w-5 mr-2" />
                </div>
                <p className="">Pending</p>
              </Link>
            </li>

            {serviceData &&
              serviceData.map((service) => {
                return (
                  <li className="mb-3" key={service.serviceID}>
                    <Link
                      className="link icons"
                      href="/notifications"
                      onClick={() => {
                        setServiceID(service.serviceID);
                      }}
                    >
                      <div>{/* <img src={bell} /> */}</div>
                      <p>{service.serviceName}</p>
                    </Link>
                  </li>
                );
              })}

            <li className="mb-3">
              <Link className="link icons " href="/createpost">
                <div>{/* <img src={plus} /> */}</div>
                <p>service 2</p>
              </Link>
            </li>

            <li className="mb-3">
              <Link className="link icons" href="/profile">
                <div className="profile-icon">
                  {/* <img src={props.image} /> */}
                </div>
                <p>service 3</p>
              </Link>
            </li>
            <li className=" mb-3">
              <Link className="link icons flex" href="/notices">
                <div>
                  <img src="/star.svg" className="w-5 mr-2" />
                </div>
                <p>Fulfilled</p>
              </Link>
            </li>

            <li className="mb-3">
              <Link className="link icons " href="/createpost">
                <div>{/* <img src={plus} /> */}</div>
                <p>service 2</p>
              </Link>
            </li>

            <li className="mb-3">
              <Link className="link icons" href="/profile">
                <div className="profile-icon">
                  {/* <img src={props.image} /> */}
                </div>
                <p>service 3</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
