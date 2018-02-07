import axios from 'axios';

export default {
  async shortenUrl({commit}, originalUrl) {
    const resp = await axios.post(process.env.API_BASE_PATH + '/links', {
      url: originalUrl
    });
    commit('setHash', resp.data.hash);
  }
};
