<template>
    <v-app>
        <div class="layout">
            <Layout>
                <Sider ref="side1" collapsible :collapsed-width="0">
                    <Left></Left>
                </Sider>
                <Layout >
                    <Header :style="{padding: 0}" class="layout-header-bar">
                        <Head></Head>
                    </Header>
                    <Content :style="{margin: '-17px 20px 5px', minHeight: '800px'}">
                        <!-- 主要内容 -->
                        <div style="margin:20px;">
                            <router-view></router-view>
                        </div>
                    </Content>
                    <hr/>
                    <Foot></Foot>
                </Layout>
            </Layout>
        </div>
    </v-app>
</template>
<script>
import Left from "@/components/layout/left";
import Head from "@/components/layout/header";
import Footer from "@/components/layout/footer";
export default {
  data() {
    return {
       
    };
  },
  components: {
    Left: Left,
    Head: Head,
    Foot: Footer
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.layout {
  border: 0px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  height: 55px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>