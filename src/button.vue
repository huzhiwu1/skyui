<template>
  <button
    v-wave="wave"
    :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')"
    class="g-button"
  >
    <g-icon :name="icon" class="icon" v-if="icon&&!isLoading"></g-icon>
    <g-icon class="icon loading" name="loading" v-if="isLoading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Wave from "./wave.js";
import Icon from "./icon";
export default {
  components: {
    "g-icon": Icon
  },
  directives: {
    wave: Wave
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    wave: {
      type: String,
      default: "#000"
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleObj: {
        top: 0,
        left: 0
      }
    };
  }
};
</script>
<style lang="scss">
$button-height: 32px;
$font-size: 14px;
$button-bg: #eaffff;
$button-active-bg: #dbffff;
$border-radius: 4px;
$color: #333;
$border-color: #b4f2ff;
$border-hover-color: #adebff;

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.g-button {
  font-size: $font-size;
  padding: 0.5em 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background-color: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  .loading {
    animation: spin 1s infinite;
  }
  /*position: relative;*/
  /*overflow: hidden;*/
  //   .rippling {
  //     position: absolute;
  //     width: 100%;
  //     height: 100%;
  //     background: $border-hover-color;
  //     transform: scale(0);
  //     animation: ripples 1s linear;
  //   }
  &:hover {
    border-color: $border-hover-color;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  .icon {
    margin: 0 0.3em;
  }

  &.icon-left {
    .icon {
      margin-left: 0;
      order: 1;
    }

    .content {
      order: 2;
    }
  }

  &.icon-right {
    .icon {
      margin-right: 0;
      order: 2;
    }

    .content {
      order: 1;
    }
  }
}
</style>
