<template>
  <ul class="rich-carousel">
    <slot />
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.rich-carousel {
  padding: 0px 40px 30px 10px;
  scroll-snap-type: x mandatory;
  @apply m-0 flex flex-nowrap overflow-x-scroll;
  @apply overflow-y-hidden whitespace-nowrap;
  * {
    flex: 0 0 auto;
    scroll-snap-align: center;
    @apply inline-block mr-3 w-full;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    @apply grid content-between gap-3 whitespace-normal;
    * {
      @apply block mr-0 w-full;
    }
  }
}
</style>
