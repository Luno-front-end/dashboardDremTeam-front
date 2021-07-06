import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import domainData from "../../../domain.json";

export default function DomainList() {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <ul>
          {domainData.map(({ nameDomain }) => {
            const id = uuidv4();
            return (
              <li key={id}>
                <button type="submit" onClick={onClick}>
                  {nameDomain}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
