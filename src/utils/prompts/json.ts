import type { BlogContext } from '../types/blog-types';

export const jsonPrompt = async (blogContext: BlogContext) => {
  const prompt = `
  Lütfen aşağıdaki bilgilere göre SEO uyumlu bir blog içeriği oluştur ve sadece JSON formatında çıktı ver. Dil ve anahtar kelimeleri dikkate alarak içeriği oluştur. Eğer anahtar kelime yoksa sen ekleyebilirsin.

  Başlık: "${blogContext.title}"
  Dil: "${blogContext.language}"
  Anahtar Kelimeler: {${blogContext.keys}} 
  SEO uyumlu meta açıklaması: ${blogContext.seo ? 'Evet' : 'Hayır'}
  
  Çıktıyı şu JSON formatında ver:
  
  {
    "title": "{KULLANICI BAŞLIĞI}",
    "meta_description": "{SEO İÇİN META AÇIKLAMASI}",
    "keywords": ["{ANAHTAR_KELİME_1}", "{ANAHTAR_KELİME_2}"],
    "introduction": "{GİRİŞ PARAGRAFI}",
    "content": "{BLOG ANA METNİ}",
  }
  `;

  return prompt;
};
