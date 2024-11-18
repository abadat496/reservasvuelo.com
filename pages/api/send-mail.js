import sendMailHandler from "@/mailer/mailer";

export default async function handler(req, res) {
  try {
    await sendMailHandler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
