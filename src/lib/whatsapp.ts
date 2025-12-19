const WHATSAPP_NUMBER = "5511999999999"; // Placeholder number

export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string): void {
  window.open(generateWhatsAppLink(message), '_blank');
}

export const defaultMessage = "Olá! Quero comprar no atacado. Pode me enviar o catálogo e condições?";

export function generateProductMessage(
  nome: string,
  tamanho: string,
  cor: string,
  quantidade: number
): string {
  return `Olá! Quero o produto: ${nome} | Tam: ${tamanho} | Cor: ${cor} | Qtd: ${quantidade}. Pode confirmar disponibilidade e prazo?`;
}
