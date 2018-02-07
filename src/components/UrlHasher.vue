<template>
  <div class="column justify-center">
    <h4>Paste the original url here</h4>
    <q-field
      error-label="Invalid url"
      :error="errors.has('original_url')"
    >
      <q-input
        id="original_url_field"
        type="textarea"
        clearable
        name="original_url"
        float-label="Url"
        v-model="original_url"
        v-validate="'required|url:true'"
        :max-height="100"
        :min-rows="1"
      ></q-input>
    </q-field>
    <q-btn
      id="shorten_url_button"
      big
      loader
      color="primary"
      v-model="loading"
      @click="shortenUrl"
      :disable="errors.has('original_url') || !original_url">
      Generate short url
    </q-btn>
  </div>
</template>

<script>
  import {QInput, QField, QBtn, Toast} from 'quasar-framework';

  export default {
    name: 'UrlInputField',
    components: {
      QInput,
      QField,
      QBtn
    },
    data() {
      return {
        original_url: null,
        loading: false
      }
    },
    methods: {
      async shortenUrl() {
        try {
          this.loading = true;
          await this.$store.dispatch('shortenUrl', this.original_url);
        }
        catch (err) {
          console.error(err);
          Toast.create.negative({
            html: 'Error connecting to the API'
          });
        }
        finally {
          this.loading = false;
        }
      }
    }
  }
</script>
