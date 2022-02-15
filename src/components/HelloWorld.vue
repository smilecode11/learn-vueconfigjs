<template>
  <div class="hello">
    <h3 class="message-wrap">
      {{ msg }}
      <div class="desc">这里是描述...</div>
      <div :class="$style['color-red']">这里展示模块样式</div>
      <div class="g-color">这里展示全局module样式</div>
      <div class="import-scss">引入 variable.scss 样式</div>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'default message',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/common/css/variable.scss';

$primary: skyblue;

.message-wrap {
  color: $primary;
  .desc {
    font-size: 12px;
    color: rebeccapurple;
  }
}

.import-scss {
  color: $warn;
  background: $danger;
}
</style>

<style module>
.color-red {
  color: red;
}
:global(.g-color) {
  color: antiquewhite;
}
</style>
