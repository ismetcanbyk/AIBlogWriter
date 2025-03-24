import type { BlogContext } from '../types/blog-types';

export const htmlPrompt = async (blogContext: BlogContext) => {
  const prompt = `
  Lütfen aşağıdaki bilgilere göre SEO uyumlu bir blog içeriği oluştur ve sadece HTML formatında çıktı ver. Dil ve anahtar kelimeleri dikkate alarak içeriği oluştur. Eğer anahtar kelime yoksa sen ekleyebilirsin.
  
  Başlık: "${blogContext.title}"
  Dil: "${blogContext.language}"
  Anahtar Kelimeler: {${blogContext.keys}} 
  SEO uyumlu meta açıklaması: ${blogContext.seo ? 'Evet' : 'Hayır'}
  
  Çıktıyı şu HTML formatında ver:
  
  <!DOCTYPE html>
  <html lang="${blogContext.language}">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${blogContext.title}</title>
      ${blogContext.seo ? `<meta name="description" content="Bu makale ${blogContext.title} hakkında detaylı bilgiler içerir.">` : ''}
      ${blogContext.keys ? `<meta name="keywords" content=" ${blogContext.keys}">` : ''}
  </head>
  <body>
      <header>
          <h1>${blogContext.title}</h1>
      </header>
  
      <main>
          <section>
              <h2>Giriş</h2>
              <p>{GİRİŞ PARAGRAFI}</p>
          </section>
  
          <section>
              <h2>Ana Bölüm</h2>
              <p>{BLOG ANA METNİ}</p>
          </section>
  
          <section>
              <h2>Sonuç</h2>
              <p>{SONUÇ VE KAPANIŞ}</p>
          </section>
      </main>
  
      <footer>
          <p>© ${new Date().getFullYear()} Tüm hakları saklıdır.</p>
      </footer>
  </body>
  </html>
  `;

  return prompt;
};
