<template lang="pug">
.about
  h1 home
  router-link(to="/about") about
  input(v-model="addText")
  span(@click="saveText") 保存
  HelloWorld(msg="测aaa试")
  span(@click="getText") 读取
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
const Store = window.require("electron-store");

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const num: number = 12;
    const addText = ref<string>("");
    const store = new Store();

    const saveText = () => {
      store.set("unicorn", addText.value);
    };

    const getText = () => {
      console.log(store.get("unicorn"));
    };

    return { num, addText, saveText, getText };
  },
});
</script>
