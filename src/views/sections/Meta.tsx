// api client
// import { apiClient } from "../../api/ApiClient/ApiClient";

import data from "../../data.json";

// components
import { Card } from "../../components";

export const Meta = () => {
  return (
    <section id="meta" className="responsive-container !pt-0">
      <ul className="grid gap-5 xl:grid-cols-3 md:grid-cols-2 items-stretch">
        {data.meta.map((meta) => (
          <li key={meta.name}>
            <Card {...meta} />
          </li>
        ))}
      </ul>
    </section>
  );
};
