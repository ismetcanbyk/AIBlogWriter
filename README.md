# AIBlogWriter

An open-source AI-powered blog content generator built with NestJS.

## Overview

AIBlogWriter is a powerful tool designed to automatically generate high-quality blog content in various formats including Markdown and JSON. It leverages AI technology to create SEO-optimized articles based on your specifications.

## Features

- Generate blog content in multiple formats (Markdown, JSON)
- SEO optimization with metadata and keyword integration
- Multi-language support
- Modular architecture for easy extension
- RESTful API for seamless integration

## Project Structure

```
AIBlogWriter/
├── src/
│   ├── controllers/
│   │   └── ai-writer/
│   ├── modules/
│   │   └── ai-writer/
│   ├── services/
│   │   ├── ai-integration/
│   │   └── ai-writer/
│   │
│   ├── utils/
│   │   ├── prompts/
│   │   └── types/
│   │
│   ├── app.module.ts
│   └── main.ts
├── test/
├── dist/
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/ismetcanbyk/AIBlogWriter
cd AIBlogWriter
```

2. Install dependencies

```bash
npm install
```

3. Copy the environment example file and configure your API keys

```bash
cp .env.example .env
```

4. Edit the `.env` file with your OpenAI API key

```
OPENAI_API_KEY=your-api-key-here
```

## Running the Application

### Development Mode

```bash
npm run start:dev
```

### Production Mode

```bash
npm run build
npm run start:prod
```

## API Usage

### Generate Blog Content

```bash
POST /api/ai-writer/generate-blog
```

### Example Requests and Responses

Request Body:

```json
{
  "type": "JSON",
  "context": {
    "title": "The Future of Artificial Intelligence",
    "language": "en",
    "keys": "AI, machine learning, future technology, automation",
    "seo": true
  }
}
```

Available blog types:

- `MARKDOWN` - Markdown formatted content
- `JSON` - Structured JSON format

  <br/>

### MARKDOWN Example

Request Body:

```json
{
  "type": "MARKDOWN",
  "context": {
    "title": "The future of artificial intelligence",
    "language": "en"
  }
}
```

Response:

```json
{
  "title": "The future of artificial intelligence",
  "meta_description": "Discover the latest trends and predictions for the future of artificial intelligence in this insightful blog post.",
  "keywords": ["artificial intelligence", "future", "AI", "technology"],
  "introduction": "Artificial intelligence (AI) has been rapidly evolving and shaping the world around us. From virtual assistants to self-driving cars, AI has become an integral part of our daily lives. In this blog post, we will explore the current state of AI and discuss the exciting possibilities and challenges that lie ahead in the future of artificial intelligence.",
  "content": "## The Evolution of AI\n\nArtificial intelligence has come a long way since its inception. Initially, AI was limited to performing specific tasks, but with advancements in machine learning and deep learning, AI systems can now learn, adapt, and improve on their own.\n\n## Current Applications of AI\n\nAI is already being used in various industries, such as healthcare, finance, and transportation. In healthcare, AI is helping doctors diagnose diseases more accurately and quickly. In finance, AI is being used for fraud detection and risk assessment. Self-driving cars are a prime example of AI revolutionizing the transportation industry.\n\n## The Future of AI\n\nThe future of artificial intelligence holds immense potential. AI is expected to continue transforming industries and revolutionizing processes. With the rise of quantum computing, AI algorithms will become even more powerful and efficient. Ethical considerations around AI, such as bias and privacy issues, will also become increasingly important.\n\nIn conclusion, the future of artificial intelligence is bright and full of possibilities. As technology continues to advance, AI will play a crucial role in shaping the future of our world."
}
```

  <br/>

### JSON Example

Request Body:

```json
{
  "type": "JSON",
  "context": {
    "title": "The future of artificial intelligence",
    "language": "en"
  }
}
```

Response:

```json
{
  "title": "The future of artificial intelligence",
  "meta_description": "Discover the latest trends and advancements shaping the future of artificial intelligence.",
  "keywords": ["artificial intelligence", "future", "technology", "innovation"],
  "introduction": "Artificial intelligence (AI) continues to revolutionize industries and change the way we interact with technology. As we look ahead, the future of AI holds immense potential for further advancements and applications.",
  "body": "One of the key areas where AI is expected to make a significant impact is in automation. From self-driving cars to smart homes, AI-powered systems are poised to streamline processes and enhance efficiency. Additionally, AI is increasingly being utilized in healthcare for tasks such as diagnostics, personalized treatment plans, and drug discovery.\n\nThe future of artificial intelligence also encompasses the ethical considerations surrounding its development and deployment. As AI becomes more integrated into society, questions of bias, privacy, and accountability come to the forefront. It is crucial for stakeholders to address these issues proactively to ensure that AI technologies are developed and used responsibly.\n\nLooking ahead, the field of AI is set to witness rapid growth and innovation. Advancements in machine learning, natural language processing, and robotics are paving the way for exciting new possibilities. As researchers and developers continue to push the boundaries of AI, we can expect to see transformative changes in various sectors, from business to education to entertainment."
}
```

Available blog types:

- `MARKDOWN` - Markdown formatted content
- `JSON` - Structured JSON format

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [NestJS](https://nestjs.com/)
- Powered by [OpenAI](https://openai.com/)

## Contact

### Feel free to contact me with any questions or suggestions.

- [LinkedIn](https://www.linkedin.com/in/ismetcanbyk)
- [Instagram](https://www.instagram.com/ismetcanbyk/)
- [Github](https://github.com/ismetcanbyk)
