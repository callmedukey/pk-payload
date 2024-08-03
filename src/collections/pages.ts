import { CollectionConfig } from "payload/types";

export const Page: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "text",
          type: "textarea",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
