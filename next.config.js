/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.BUCKET_NAME}.s3.amazonaws.com`],
  },
};

module.exports = nextConfig;
