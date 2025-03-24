import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Expose the UploadThing API endpoint
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
