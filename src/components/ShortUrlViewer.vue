<template>
  <q-card inline id="short_url_viewer">
    <q-card-title>
      <h5>Shortened Url</h5>
    </q-card-title>
    <q-card-main>
      <h5 class="thin-paragraph">{{ shortUrl }}</h5>
    </q-card-main>
    <q-card-separator></q-card-separator>
    <q-card-actions align="around">
      <q-btn
        flat
        round
        small
        color="black"
        @click="openInNewTab">
        <q-icon name="open in new"></q-icon>
      </q-btn>
      <q-btn
        flat
        round
        small
        color="black"
        v-clipboard:copy="shortUrl"
        v-clipboard:success="onCopySuccess"
        v-clipboard:error="onCopyError">
        <q-icon name="content copy"></q-icon>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
  import {
    QInput,
    QCard,
    QCardTitle,
    QBtn,
    QCardActions,
    QCardMain,
    QCardSeparator,
    QIcon,
    Toast
  } from 'quasar-framework';

  export default {
    name: 'ShortUrlViewer',
    components: {
      QInput,
      QCard,
      QCardTitle,
      QBtn,
      QCardActions,
      QCardMain,
      QCardSeparator,
      QIcon
    },
    computed: {
      shortUrl() {
        return this.$store.getters['getShortenedUrl'];
      }
    },
    methods: {
      openInNewTab() {
        window.open(this.shortUrl, '_blank');
      },
      onCopySuccess() {
        Toast.create.positive({
          html: 'Link copied to clipboard !'
        });
      },
      onCopyError() {
        Toast.create.negative({
          html: 'Unable to copy to clipboard. Please copy the link manually.'
        });
      }
    }
  }
</script>
