<template>
  <div class="container">
    <div 
      v-if="getHangulError" 
      class="errormessage">영화 제목은 영어로 검색해주세요!!</div>
    <div
      :class="{ 'no-result': !movies.length }"
      class="inner">
      <Loader 
        absolute 
        v-if="loading" />
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/Loader'
import MovieItem from '~/components/MovieItem'

export default {
  components: {
    Loader,
    MovieItem
  },
  computed: {
    ...mapState('movie', [
      'movies',
      'loading',
      'message'
    ]),
    getHangulError(){
      return this.$store.getters['movie/getHangulError'];
    }
    
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  position:relative;
  .errormessage{
    position:absolute;
    top: -20px;
    color:$red-500;
  }
  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    position:relative;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
