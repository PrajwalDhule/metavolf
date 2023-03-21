import React from "react";
import Link from "next/link";

const dashboard = () => {
  return (
    <div>
      <nav
        className="bg-[#00163b]  fixed z-3 w-[16vw] h-[90vh] left-[1vw] top-[5vh] border-[1px] border-[#c8c8c8]"
        id="left-bar"
      >
        <div className="container nav-container flex relative justify-left pt-[3vh] pl-[1.5vw]">
          <ul className="menu-items">
            <li className="mt-[.5rem] mb-[.5rem]">
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

            <li>
              <Link className="link icons" href="/">
                <div>{/* <img src={home} /> */}</div>
                <p className="w-0">Current Service</p>
              </Link>
            </li>
            <li>
              {/* <Link className="link icons" href="/"> */}
              <a
                className="link icons"
                // onClick={hideNavText}
              >
                <div>{/* <img src={search} /> */}</div>
                <p>Service name</p>
              </a>
              {/* </Link> */}
            </li>
            <li>
              <Link className="link icons" href="/notices">
                <div>{/* <img src={notice} /> */}</div>
                <p>For you</p>
              </Link>
            </li>
            <li>
              <Link className="link icons" href="/notifications">
                <div>{/* <img src={bell} /> */}</div>
                <p>service 1</p>
              </Link>
            </li>
            <li>
              <Link className="link icons" href="/createpost">
                <div>{/* <img src={plus} /> */}</div>
                <p>service 2</p>
              </Link>
            </li>

            <li>
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
      <main>
        <section className="bg-[#00163b] relative left-1/2 translate-x-[-49.5%] flex justify-between w-[64vw] px-8 py-6 mb-4 top-[5vh] overflow-x-hidden border-[1px] border-[#c8c8c8]">
          <div className="max-w-[60%]">
            <h2 className="text-3xl">Service name</h2>
            <p className="font-light my-2">
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
        <section className="bg-[#00163b] relative left-1/2 translate-x-[-49.5%] flex justify-between w-[64vw] px-8 py-6 mb-4 top-[5vh] overflow-x-hidden border-[1px] border-[#c8c8c8]">
          <div className="max-w-[60%]">
            <h2 className="text-3xl">Service name</h2>
            <p className="font-light my-2">
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
        <section className="bg-[#00163b] relative left-1/2 translate-x-[-49.5%] flex justify-between w-[64vw] px-8 py-6 mb-4 top-[5vh] overflow-x-hidden border-[1px] border-[#c8c8c8]">
          <div className="max-w-[60%]">
            <h2 className="text-3xl">Service name</h2>
            <p className="font-light my-2">
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
        className="bg-[#00163b]  fixed z-3 w-[16vw] h-[90vh] right-[1vw] top-[5vh] border-[1px] border-[#c8c8c8]"
        id="left-bar"
      >
        <div className="container nav-container flex relative justify-left pt-[3vh] pl-[1.5vw]">
          <ul className="menu-items">
            <li className="mt-[.5rem] mb-[.5rem]">
              <Link className="link logo" href="/">
                <div>{/* <img src={logo} /> */}</div>
              </Link>
            </li>

            <li>
              <Link className="link icons" href="/">
                <div>{/* <img src={home} /> */}</div>
                <p className="w-0">Feed</p>
              </Link>
            </li>
            <li>
              {/* <Link className="link icons" href="/"> */}
              <a
                className="link icons"
                // onClick={hideNavText}
              >
                <div>{/* <img src={search} /> */}</div>
                <p>Search</p>
              </a>
              {/* </Link> */}
            </li>
            <li>
              <Link className="link icons" href="/notices">
                <div>{/* <img src={notice} /> */}</div>
                <p>Notices</p>
              </Link>
            </li>
            <li>
              <Link className="link icons" href="/notifications">
                <div>{/* <img src={bell} /> */}</div>
                <p>Notifications</p>
              </Link>
            </li>
            <li>
              <Link className="link icons" href="/createpost">
                <div>{/* <img src={plus} /> */}</div>
                <p>Create</p>
              </Link>
            </li>

            <li>
              <Link className="link icons" href="/profile">
                <div className="profile-icon">
                  {/* <img src={props.image} /> */}
                </div>
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default dashboard;
