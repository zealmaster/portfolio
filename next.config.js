/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    async headers() {
      return [
        {
          source: '/api/contact',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'X-Requested-With, Content-Type, Authorization',
            },
            {
                key: "Access-Control-Allow-Headers", 
                value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
            },
          ],
        },
      ];
    },
  };
  

