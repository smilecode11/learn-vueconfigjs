<template>
  Hello vue.config.js
  <HelloWorldVue />
  <span class="g-color">APP SPAN USE GLOBAL CLASS</span>
  <br />
  <span class="import-css">IMPORT STYLESS</span>

  <FileSaver />
</template>

<script>
import { defineComponent } from "vue";
import HelloWorldVue from "./components/HelloWorld.vue";
import FileSaver from "./components/FileSaver.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorldVue,
    FileSaver,
  },
  mounted() {
    console.log("app console");
  },
});
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
#app {
	padding: 8px;
}
.import-css {
	border: 1px solid $primary;
	background: $warn;
	color: $danger;
}
</style>
