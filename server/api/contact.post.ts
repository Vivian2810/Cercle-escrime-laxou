// server/api/contact.post.ts
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Données invalides",
      data: parsed.error.flatten(),
    });
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(config.resendApiKey);

  try {
    await resend.emails.send({
      from: "Formulaire de contact <onboarding@resend.dev>", // à remplacer par ton domaine vérifié
      to: config.contactEmail as string,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `De : ${name} (${email})\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur envoi email :", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Échec de l'envoi de l'email",
    });
  }
});
