<template>
  <div class="column justify-center items-center">
    <url-hasher></url-hasher>
    <br>
    <q-transition
      appear
      group
      enter="fadeIn"
      leave="fadeOut"
    >
      <short-url-viewer
        key="url-viewer"
        v-if="hash"
      ></short-url-viewer>
    </q-transition>
  </div>
</template>

<script>
  import UrlHasher from './UrlHasher.vue';
  import ShortUrlViewer from './ShortUrlViewer.vue';
  import {QTransition} from 'quasar-framework';

  export default {
    name: 'UrlShortener',
    components: {
      UrlHasher,
      ShortUrlViewer,
      QTransition
    },
    computed: {
      hash() {
        return this.$store.state.hash;
      }
    }
  }
</script>

<style lang="stylus">
</style>
