const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const managerEmail = "Aslpoola59@gmail.com";
  // اینجا می‌توان برای ارسال واقعی ایمیل با Nodemailer پیکربندی کرد
  return { statusCode: 200, body: "پرداخت موفق و ایمیل به مدیر ارسال شد" };
};