import type { BlogContext } from '../types/blog-types';

export const mdxPrompt = (blogContext: BlogContext) => {
  const prompt = `
  Lütfen aşağıdaki bilgilere göre SEO uyumlu bir blog içeriği oluştur ve sadece MDX formatında çıktı ver. Dil ve anahtar kelimeleri dikkate alarak içeriği oluştur. Eğer anahtar kelime yoksa sen ekleyebilirsin.

  Başlık: "${blogContext.title}"  
  Dil: "${blogContext.language}"  
  Anahtar Kelimeler: {${blogContext.keys}}  
  SEO uyumlu meta açıklaması: ${blogContext.seo ? 'Evet' : 'Hayır'}  

  Çıktıyı şu MDX formatında ver:

  \`\`\`mdx
  ---
  title: "${blogContext.title}"
  language: "${blogContext.language}"
  ${blogContext.seo ? `description: "Bu makale ${blogContext.title} hakkında detaylı bilgiler içerir."` : ''}
  ${blogContext.keys ? `keywords: "${blogContext.keys}"` : ''}
  ---

  # ${blogContext.title}

  ## Giriş  
  {GİRİŞ PARAGRAFI}

  ## Ana Bölüm  
  {BLOG ANA METNİ}

  ## Sonuç  
  {SONUÇ VE KAPANIŞ}

  <footer>© ${new Date().getFullYear()} Tüm hakları saklıdır.</footer>
  \`\`\`
  `;

  return prompt;
};
