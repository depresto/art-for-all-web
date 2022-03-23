const { loadEnvConfig } = require("@next/env");
const projectDir = process.cwd();
loadEnvConfig(projectDir);

module.exports = {
  client: {
    service: {
      name: "artforall",
      url: "https://hasura.art-for-all.tw/v1/graphql",
      headers: {
        "X-Hasura-Admin-Secret": process.env.GRAPHQL_ADMIN_SECRET,
      },
    },
  },
};
