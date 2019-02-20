// const url = require("url");

// const getProductsFromID = require("../../helper/getProductsFromID");
// const getIdWithPathname = require("../../helper/getIdWithPathname");
// const getIdsWithQuery = require("../../helper/getIdsWithQuery");
// const getProductsWithCategories = require("../../helper/getProductsWithCategories");

// const productID = (req, res) => {
//   if (req.method !== "GET") return;

//   const parsedUrl = url.parse(req.url);

//   const categoryIds = getProductsWithCategories(parsedUrl);
//   const queryIds = getIdsWithQuery(parsedUrl);
//   const pathnameId = getIdWithPathname(parsedUrl.pathname);

//   let products = getProductsFromID(pathnameId);
//   if (queryIds) products = getProductsFromID(...queryIds);
//   if (categoryIds) products = getProductsFromID(...categoryIds);

//   res.writeHead(200, { "content-type": "aplication/json" });
//   res.write(
//     JSON.stringify({
//       status: products.length > 0 ? "success" : "no products",
//       products
//     })
//   );
//   res.end();
// };

// module.exports = productID;
