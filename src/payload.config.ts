import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import { Page } from "./collections/pages";
import { Media } from "./collections/media";
import { Faq } from "./collections/faq";
import { Tag } from "./collections/tags";
import { slateEditor } from "@payloadcms/richtext-slate";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Page, Media, Faq, Tag],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  i18n: {
    fallbackLng: "ko",
  },
});
