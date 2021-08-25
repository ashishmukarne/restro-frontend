import { NextRouter } from "next/router";
import { ServerResponse, IncomingMessage } from "http";

export const redirectTo = (
  location: string,
  router: NextRouter,
  _req?: IncomingMessage | null,
  res?: ServerResponse | null
) => {
  if (res) {
    res.writeHead(302, {
      Location: location,
    });
    res.end();
  } else {
    // only client side pages have access to next/router
    router.push(location);
  }
};
