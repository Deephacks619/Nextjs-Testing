module.exports = {
  apps: [
    {
      name: 'my-nextjs-app',
      script: 'npm',
      args: 'run dev',
      env: {
        PORT: 3000, // Replace with your desired port
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000 // Replace with your desired production port
      }
    }
  ]
};
