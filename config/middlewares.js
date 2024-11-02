module.exports = ({ env }) => [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:5173'], // استبدل بالمنفذ الخاص بتطبيقك
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::query', // تأكد من إضافة هذا
  'strapi::body', // تأكد من إضافة هذا
];
