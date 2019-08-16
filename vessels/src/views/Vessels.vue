<template>
  <div class="vessel" >
    <h3 v-if="loading">Loading...</h3>
    <List v-else :vessels="vessels" :vessel-id="activeVessel"/>
    <main  v-if="vessel" class="content">
      <section>
        <span>
          <h4>Name: </h4>
          {{vessel.name}}
        </span>
        <span>
          <h4>TEU: </h4>
          {{vessel.teu}}
        </span>
      </section>
      <img :src="source" alt="map"/>
    </main>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import { getVessels, getVesselById } from '@seaspan/mock-package'

export default {
  name: 'vessel',
  components: {
    List
  },
  data() {
    return {
      loading: false,
      vessel: null,
      vessels: null,
    }
  },
  mounted() {
    this.getVessels()
    this.getVessel()
  },
  methods: {
    getVessels() {
      this.loading = true
      getVessels().then(vessels => {
        this.vessels = vessels
        this.loading = false
      })
    },
    getVessel() {
      const id = Number(this.$route.query.id)
      if (id) {
        getVesselById(id)
          .then(vessel => {
            this.source = require(`../assets/${vessel.map}.png`)
            this.vessel = vessel
            this.setActiveVessel(id)
          })
      }
    },
    setActiveVessel(id) {
      this.activeVessel = id
    }
  },
  watch: {
    $route (){
      this.getVessel()
    }
  } 
}
</script>
<style scoped>
.content {
  position: absolute;
  top: 300px;
  width: 100vw;
  margin: auto;
}
section {
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20px;
  margin: auto;
}
img {
  width: 500px;
  border-radius: 5px;
  border: 1px solid #42b983;
}
h4 {
  display: inline;
}
</style>