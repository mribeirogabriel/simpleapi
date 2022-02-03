import api from "./api/api";

const PORT = process.env.PORT || 3333;
const APP_NAME = process.env.APP_NAME || "simpleapi";

api.listen(PORT, (): void => {
  console.log(`[${APP_NAME}]: Server is running on ${PORT}`);
});
