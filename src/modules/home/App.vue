<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <GlobalAside />
      
      <el-container>
        <GlobalHeader />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import GlobalHeader from '@/common/components/GlobalHeader'
import GlobalAside from '@/common/components/GlobalAside'

export default {
  components: {
    GlobalHeader,
    GlobalAside
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
