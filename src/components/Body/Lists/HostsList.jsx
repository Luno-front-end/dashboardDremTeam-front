import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import hostData from "../../../host.json";

export default function HostList() {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <ul>
          {hostData.map(({ nameServer, nameHost, NSHost, ipHost }) => {
            const id = uuidv4();

            console.log(NSHost);

            return (
              <li key={id} className="item-host">
                <p className="paragraph-marker"> {nameServer}</p> |{" "}
                <p className="paragraph-marker"> {nameHost} </p> |
                <ul className="subList-host">
                  {NSHost.map((data) => {
                    return <li className="subItem-host">{data}</li>;
                  })}
                </ul>
                | <p className="paragraph-marker">{ipHost}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
