const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { amount, customer, items } = JSON.parse(event.body || "{}");
  return {
    statusCode: 200,
    body: JSON.stringify({ url: "https://www.zarinpal.com/pg/StartPay/authority" })
  };
};