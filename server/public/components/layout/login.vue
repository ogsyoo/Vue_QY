<template>
    <Card style="width:350px;margin:15% auto;padding:28px;text-align:center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名称">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
                <Button type="ghost" @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
             </FormItem>
        </Form>
    </Card>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          { required: true, message: "用户名称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { type: "string", min: 6, message: "密码至少为6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          var data = {
            userName:this.$refs[name].model.user,
            passWord:this.$refs[name].model.password
          }
          console.log(data);
          this.$http.post('/login',data).then(function(res){
            if(res.data==1){
              this.$Message.success("登陆成功!");
              window.location.href="#/main";
            }
          });
        } else {
          this.$Message.error("失败!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
