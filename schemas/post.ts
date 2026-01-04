export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "url",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.positive(),
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Etsy Products", value: "etsy-products" },
          { title: "Deviant Vectors", value: "deviant-vectors" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
  ],
}
