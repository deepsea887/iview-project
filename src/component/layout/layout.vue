<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div class="layout">
    <Sidebar></Sidebar>
    <Layout :style="{ marginLeft: '200px' }">
      <Header
        :style="{
          background: '#fff',
          boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
          position: 'fixed',
          width: '100%',
          zIndex: '999999',
        }"
      >
        <Breadcrumb></Breadcrumb>
      </Header>
      <Content :style="{ padding: '90px 16px 16px 16px' }">
        <Card>
          <div style="min-height: calc(100vh - 150px)">
            <AppMain></AppMain>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>

<script>
import { Sidebar, Breadcrumb, AppMain } from "./index.js";

export default {
  name: "layout",
  components: {
    Sidebar,
    Breadcrumb,
    AppMain,
  },
};
</script>
