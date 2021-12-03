<template lang="pug">
.hello
  h1 {{ msg }}
</template>

<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const msg = toRef(props, "msg");
    return { msg };
  },
});
</script>
