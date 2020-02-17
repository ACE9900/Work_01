<template>
    <h3>Forget password</h3>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted: function () {
    this.$store.dispatch('currentPage/setCurrentPage', true)
    console.log(this.$store.state.currentPage.currentpage)
  },
  methods: {

  }
}
</script>
