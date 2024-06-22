export const seo = {
  title: 'Zigao Wang | 开发者、学生、前端程序员、创始人',
  description:
    '我叫 Zigao Wang，是开发者、学生、前端程序员，同时也是 Pacer Club 创始人。我热爱马拉松，致力于在前端开发领域不断学习和成长，同时带领着 Pacer Club 鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog.zigao.cc'
      : 'http://localhost:3000'
  ),
} as const
