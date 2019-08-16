<template>
  <div class="vessels-home">
    <h3 v-if="loading">Loading...</h3>
    <List v-else :vessels="vessels" :active-vessel="activeVessel"/>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import { getVessels } from '@seaspan/mock-package'

export default {
  name: 'home',
  components: {
    List
  },
  data() {
    return {
      loading: false,
      vessels: null,
      activeVessel: null
    }
  },
  created() {
    this.getVessels()
  },
  methods: {
    getVessels() {
      this.loading = true
      getVessels().then(vessels => {
        this.vessels = vessels
        this.loading = false
      })
    },
    setActiveVessel(id) {
      this.activeVessel = id
    }
  }
}
</script>
<style scoped>
.home {
  width: 200px;
  border: 1px solid #989fa9;
  border-radius: 5px;
}
</style>
