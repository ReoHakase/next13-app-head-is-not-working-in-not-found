/** Add your relevant code here for the issue to reproduce */
import type { Metadata } from "next";
import type { FC } from "react";

const NotFoundPage: FC = () => (
  <div>
    <article>
      <h1>404 Not Found</h1>
      <section>
        <p>
          Here head and metadata is not working.
          <br />
          You cannot see the title, description, viewport, openGraph settings.
          <br />
          If you visit this page on your phone, the texts is very small since
          the viewport is not set.
        </p>
      </section>
    </article>
  </div>
);

export default NotFoundPage;

export const metadata: Metadata = {
  title: "Not Found",
};
