const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isProduction ? process.env.NEXT_PUBLIC_BASE_PATH : "",
};