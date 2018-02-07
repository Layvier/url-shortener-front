<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout
      ref="layout"
      view="lHh Lpr fff"
    >
      <q-toolbar slot="header">
        <q-toolbar-title>
          Url shortener
        </q-toolbar-title>
      </q-toolbar>
      <div class="layout-padding">
        <url-shortener></url-shortener>
      </div>
      <q-toolbar slot="footer">
      </q-toolbar>
    </q-layout>
  </div>
</template>

<script>
  import UrlShortener from './components/UrlShortener.vue';

  import {
    QLayout,
    QToolbar,
    QToolbarTitle
  } from 'quasar';

  /*
   * Root component
   */
  export default {
    components: {
      UrlShortener,
      QLayout,
      QToolbar,
      QToolbarTitle
    }
  }
</script>

<style></style>
