export default ({ env }: { env: (key: string) => string }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'jasareno.mikco@gmail.com',
        defaultReplyTo: 'jasareno.mikco@gmail.com',
      },
    },
  },
});
