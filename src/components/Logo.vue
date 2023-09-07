<template>
  <RouterLink to="/" class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
  .logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 20px;
    color: $white;
    text-decoration: none;
    &:hover {
      color: $white;
    }
    span {
      color: $primary;
    }
  }
</style>