<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar";

export default {
  name: 'DefaultLayout',

  components: {
    Navbar,
  },
}
</script>
