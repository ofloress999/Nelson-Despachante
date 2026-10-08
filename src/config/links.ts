export const WHATSAPP_NUMBER = "553588639037";
export const SIMULATION_URL = "";
export const INSTAGRAM_URL = "https://www.instagram.com/despachantenelson/";
export const EMAIL = "";
export const ADDRESS = "Rua Coronel Jacinto, 316, Centro, Machado - MG, 37750-000";

export const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const whatsappLinks = {
  general: createWhatsAppUrl(
    "Olá! Conheci a Nelson Despachante pelo site e gostaria de um atendimento.",
  ),
  vehicle: createWhatsAppUrl(
    "Olá! Gostaria de informações sobre serviços veiculares.",
  ),
  license: createWhatsAppUrl(
    "Olá! Gostaria de informações sobre serviços de CNH.",
  ),
};
