<template>
  <div class="about">
    <div class="photo">
      <Loader 
        v-if="imageLoading"
        absolute/>
      <img :src="image" alt="">
    </div>
    <div class="name">{{ name }}</div>
    <div>{{ email }}</div>
    <div>{{ github }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
  // import { mapState } from 'vuex'
  import Loader from '~/components/Loader'
  export default {
    components: {
      Loader
    },
    data() {
      return {
        imageLoading: true
      }
    },
    computed: {
      // ...mapState('about', [
      //   'image',
      //   'name', 
      //   'email',
      //   'github',
      //   'phone'
      // ])
      image() {
        return this.$store.state.about.image
      },
      name() {
        return this.$store.state.about.name
      },
      email() {
        return this.$store.state.about.email
      },
      github() {
        return this.$store.state.about.github
      },
      phone() {
        return this.$store.state.about.phone
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        await this.$loadImage(this.image)
        this.imageLoading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 14vh auto 40px;
    border: 10px solid $gray-300;
    overflow: hidden;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
  & > div {
    color: #fff;
  }
}
</style>