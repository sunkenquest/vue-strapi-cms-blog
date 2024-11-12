module.exports = {
    async afterCreate(event: { result: { excerpt: string, title: string } }) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'sunkenquest@gmail.com',
                from: 'jasareno.mikco@gmail.com',
                subject: `${result.title}`,
                text: `${result.excerpt}`,
            });
        } catch (err) {
            console.error(err);
        }
    },
};
