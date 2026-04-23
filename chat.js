export default async () => ({
  props: ["chatId"],
  template: /* html */ `
    <h2>This is Chat #{{ chatId }}</h2>
  `,
});
