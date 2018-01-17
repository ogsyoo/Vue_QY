<template>
    <div>
        <!-- 面包屑导航 -->
        <v-breadcrumbs divider="/">
            <v-breadcrumbs-item v-for="item in Breadcrumb" :key="item.text"  :href="item.href">{{ item.text }}</v-breadcrumbs-item>
        </v-breadcrumbs>
        <Tree :data="data2" show-checkbox></Tree>
    </div>
</template>
<script>
export default {
  data() {
    return {
      Breadcrumb: [
        { href: "#/test", text: "测试" },
        { href: "#/hl", text: "HelloWorld" },
        { href: "", text: "" }
      ],
      data2: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
