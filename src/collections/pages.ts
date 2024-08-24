import { CollectionConfig } from "payload/types";
import formatSlug from "../utils/formatSlug";

export const Page: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "페이지",
    plural: "페이지",
  }, 
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "제목",
      required: true,
    },
    {
      name: "subTitle",
      type: "text",
      label: "줄거리",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      label: "슬러그",
      unique: true,
      admin:{
        position: "sidebar",
      },
     
      hooks: {
        beforeValidate: [
          formatSlug("title"),
        ],
      },
    },
    {
      name: "keywords",
      type: "text",
      label: "키워드",
      required: true,
      admin:{
        position: "sidebar",
      },
    },
    {
      name: "thumbnail",
      relationTo: "media",
      type: "upload",
      label: "썸네일",
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tag",
      label: "태그",
      hasMany: true,
      maxDepth: 1,
      
    },
    {
      name: "content",
      type: "richText",
      label: "내용",
      required: true
    },
  ],
};
