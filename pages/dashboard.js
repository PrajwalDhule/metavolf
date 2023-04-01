import React, { useEffect, useState } from "react";
import Link from "next/link";
import { async } from "@firebase/util";
import axios from "axios";

const Dashboard = ({ initialServiceData, allData }) => {
  const [serviceID, setServiceID] = useState("");
  const [data, setData] = useState(allData);
  const [serviceData, setServiceData] = useState(initialServiceData);

  console.log(serviceData, " function ", data);

  // let handleClick = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("/api/services", {
  //       email: email,
  //     });
  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("/api/services", {
  //       email: email,
  //     });
  //     console.log(response.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [])

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].serviceID == serviceID) {
        setServiceData(data[i]);
        break;
      }
    }
  }, [serviceID]);

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
                <p>{serviceData.serviceName}</p>
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
            {data &&
              data.map((service) => {
                return service.serviceID != serviceData.serviceID ? (
                  <li className="mb-3" key={service.serviceID}>
                    <Link
                      className="link icons"
                      href="/"
                      onClick={() => {
                        setServiceID(service.serviceID);
                      }}
                    >
                      <div>{/* <img src={bell} /> */}</div>
                      <p>{service.serviceName}</p>
                    </Link>
                  </li>
                ) : (
                  ""
                );
              })}

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
            <h2 className="text-3xl">{serviceData.serviceName}</h2>
            <p className="font-light my-2  text-sm">
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
            {data &&
              data.map((service) => {
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
                </li>;
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
            {data &&
              data.map((service) => {
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
                </li>;
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Get the base URL of your app
  const apiEndpoint = "/api/services"; // The path to your API endpoint
  const url = `${baseUrl}${apiEndpoint}`; // Concatenate the base URL and the API endpoint path

  // const [initialServiceData, setInitialServiceData] = useState([]);
  // const [allData, setAllData] = useState([]);
  console.log("hello");
  const email = "piushpaul.16@gmail.com";
  let initialServiceData = [];
  let allData = [];
  try {
    const response = await axios.post(url, {
      email: email,
    });
    console.log(response.data.data);
    // setInitialServiceData(response.data[0]);
    // setAllData(response.data);
    console.log(response.data.data[0], "hello");
    // if (response.data && response.data.length > 0) {
    // }
    initialServiceData = response.data.data[0];
    allData = response.data.data;

    return {
      props: {
        initialServiceData: initialServiceData,
        allData: allData,
      },
    };
  } catch (error) {
    console.log("error: ", error);
    return {
      props: {
        initialServiceData: [],
        allData: [],
      },
    };
  }
}
