const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.NEXT_PUBLIC_BASE_PATH": isProduction ? "/next-deploy-npm-test" : "",
};
