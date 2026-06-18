"use server";

import { Resend } from "resend";

// Inicializa o Resend com a chave de API que estará no seu .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validação básica dos campos
  if (!name || !email || !message) {
    return { error: "Por favor, preencha todos os campos." };
  }

  try {
    await resend.emails.send({
      from: "ACRUX Portfólio <onboarding@resend.dev>",
      to: "seu-email@exemplo.com", // <--- COLOQUE O SEU EMAIL AQUI
      subject: `Novo contacto no Portfólio: ${name}`,
      replyTo: email,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    return { success: "Mensagem enviada com sucesso! Entraremos em contacto brevemente." };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { error: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde." };
  }
}