<template lang="pug">
.about
  h1 home
  router-link(to="/") about
  HelloWorld(msg="测11试")
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const num: number = 12;
    return { num };
  },
});
</script>
