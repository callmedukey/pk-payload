import { CollectionConfig } from "payload/types";


export const Tag: CollectionConfig = {
  slug: "tag",
  access: {
    read: () => true,
  },
  labels: {
    singular: "태그",
    plural: "태그",
  },
  admin:{
    useAsTitle: "name",
    
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "태그 이름",
      required: true,  
    },
]
};
