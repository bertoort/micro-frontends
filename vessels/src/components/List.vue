<template>
  <main class="vessels">
    <ul>
      <li v-bind:class="{ active: activeVessel === vessel.id }" v-bind:key="vessel.name" v-for="vessel in vessels">
        <a v-on:click="updateRoute(vessel.id)">{{ vessel.name }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'List',
  props: {
    vessels: Array,
    vesselId: Number
  },
  data() {
    return {
      activeVessel: this.vesselId
    }
  },
  mounted() {
    window.addEventListener('highlight-vessel', event => {
      this.setActiveVessel(event.detail.id)
    })
  },
  methods: {
    updateRoute(id) {
      const event = new CustomEvent('react-route', {
        detail: {
          pathname: '/vessels',
          search: `?id=${id}`
        }
      })
      window.dispatchEvent(event)
      if (process.env.NODE_ENV === 'development') {
        this.$router.push(`/vessels?id=${id}`)
      }
    },
    setActiveVessel(id) {
      this.activeVessel = id
    }
  },
  watch: {
    $route (){
      const id = Number(this.$route.query.id)
      this.setActiveVessel(id)
    }
  } 
}
</script>

<style scoped>
.vessels {
  position: absolute;
  top: 100px;
  width: 100vw;
  margin: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}
li {
  display: inline-block;
  position: relative;
  width: 200px;
  margin: auto;
}
li:hover a {
  color: white;
}
li.active:before {
  content: '';
  position: absolute;
  top: 7px;
  left: 0px;
  height: 7px;
  width: 7px;
  background: red;
  display: inline-block;
  border-radius: 5px;
}
a {
  color: #42b983;
}
a:hover {
  cursor: pointer;
}
</style>
