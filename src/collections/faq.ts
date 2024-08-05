import { CollectionConfig } from "payload/types";
import formatSlug from "../utils/formatSlug";

export const Faq: CollectionConfig = {
  slug: "faq",
  labels: {
    singular: "Q&A",
    plural: "Q&A",
  },
  fields: [
    {
      name: "question",
      type: "text",
      label: "질문",
      required: true,
    },
    {
      name: "answer",
      type: "textarea",
      label: "답변",
      required: true,
    },
]
};
