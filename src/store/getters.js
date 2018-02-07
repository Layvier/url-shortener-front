export default {
  getShortenedUrl(state) {
    return process.env.API_BASE_PATH + '/' + state.hash;
  }
};
