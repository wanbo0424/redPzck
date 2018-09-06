<template>
     <div class="checkbox" :class="{active:toggle}">       
        <div class="toggle" @click="toggle = !toggle" :class="{active:toggle}"></div> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false
    };
  }
};
</script>

<style lang="scss">
.checkbox,
.checkbox .toggle {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox {
  width: 6rem;
  height: 3.5rem;
  background: linear-gradient(silver, whitesmoke);
  border-radius: 2.5rem;
  font-size: 40px;
  &.active {
    background: #3398ff
  }
  /* 按鈕 */
  .toggle {
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(to top, silver, whitesmoke);
    border-radius: 50%;
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);
    position: relative;
    left: -21%;
    transition: left 0.5s ease;
    &.active {
      left: 21%;
    }
  }
}
</style>
