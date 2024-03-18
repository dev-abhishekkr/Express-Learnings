import { Router } from "express";

const router = Router();

router.get("/api/products", (request, response) => {
  // response.cookie()
  console.log(request.headers.cookie);
  console.log(request.cookies);
  console.log(request.signedCookies.hello);
  if (request.signedCookies.hello && request.signedCookies.hello === "world")
    return response.send([{ id: 123, product: "yogurt", isLiquid: true }]);

  return response
    .status(403)
    .send({ msg: "sorry you need the correct cookie" });
});

export default router;
