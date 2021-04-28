<template>
  <div>
    <!-- Pass the HTML Serializer to your rich text component. -->
    <prismic-rich-text
      :field="document.data.description"
      :htmlSerializer="htmlSerializer"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ $prismic, params, error }) {
    const document = await $prismic.api.getSingle('homepage')
    return { document }
  },
  methods: {
    htmlSerializer (type, element, content, children) {
      // If element is a list item,
      if (type === 'list-item') {
        // return some customized HTML.
        return `<li class="example-class">${children.join('')}</li>`
      }
      /// Otherwise, return null.
      return null
    }
  }
}
</script>
