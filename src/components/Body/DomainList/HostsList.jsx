import { useState } from "react";
import { Link } from "react-router-dom";

import hostData from "../../../host.json";
import domainData from "../../../domain.json";
import { v4 as uuidv4 } from "uuid";

export default function Navigation() {
  const [arrayDomain, setArrayDomain] = useState([]);
  const [currentHost, setCurrentHost] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    // console.log(domainData);
    // console.log(e.target.textContent);
    //   let array = []
    // console.log(arrayDomain);
    // let arr = [];

    setCurrentHost(e.target.textContent);
    // setArrayDomain(
    //   domainData.filter(({ params }) => {
    //     //   console.log("ollHost", params.host);
    //     //     console.log("textBtn", e.target.textContent);
    //     //   console.log(typeof params.host);
    //     //   console.log(typeof e.target.textContent);

    //     return params.host === e.target.textContent;
    //   })
    // );
    // console.log(arrayDomain);
  };

  //   console.log(arrayDomain);

  return (
    <>
      <ul className="list-host">
        {hostData.map(({ nameServer, nameHost, NSHost, ipHost }) => {
          const id = uuidv4();
          return (
            <li key={id} className="item-host">
              <Link to={`/${currentHost}`} onClick={onClick}>
                <p className="paragraph-host">{nameServer}</p>
              </Link>
              |
              {nameHost.length === 0 ? (
                <p className="paragraph-nameHost">нету</p>
              ) : (
                <p className="paragraph-host">{nameHost}</p>
              )}
              {/* <p className="paragraph-host">
                {nameHost.length === 0 ? (
                  <p className="parNameHost">нету</p>
                ) : (
                  nameHost
                )}
              </p> */}
              |<p className="paragraph-host"> {NSHost}</p> |
              <p className="paragraph-host">{ipHost}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

//   {
//     "nameServer": "mcHost",
//     "nameHost": ["p52689", "p2444"],
//     "NSHost": ["ns1", "ns2", "ns3"],
//     "ipHost": "192.168.0.1",
//     "settingsAccess": {
//       "login": "max@gmaia.com",
//       "password": "123123",
//       "type": "ispMan",
//       "link": "https://cssreference.io/"
//     }
//   },
