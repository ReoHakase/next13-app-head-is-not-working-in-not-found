/** Add your relevant code here for the issue to reproduce */
import type { Metadata } from "next";
import type { FC } from "react";

const RootPage: FC = () => (
  <div>
    <article>
      <h1>Welcome!</h1>
      <section>
        <p>Visit /404 or /not-found or /whatever to see the problem</p>
        <p>head and metadata is not working in not-found.tsx</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </article>
  </div>
);

export default RootPage;
