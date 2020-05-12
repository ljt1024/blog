<template>
  <div class="container">
    <el-row :gutter="20" class="box">
      <el-col :span="6" style="height: 100%" >
        <div class="grid-content bg-purple" style="height: 100%">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="padding: 8px 0;display: inline-block">栏目管理</span>
            </div>
            <div class="text item">
              <Tree />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="18" style="height: 100%">
        <div class="grid-content bg-purple" style="height: 100%">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="display: inline-block;padding-top: 10px">栏目编辑</span>
              <el-button type="primary" style="float: right;padding: 10px" icon="el-icon-plus" size="small">添加栏目</el-button>
            </div>
            <div class="text item" style="width: 50%">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="栏目名称">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="栏目ID">
                  <el-input v-model="form.id" />
                </el-form-item>
                <el-form-item label="栏目描述">
                  <el-input v-model="form.meno" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">确定</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Tree from '../tree/index.vue'
export default {
  name: 'Index',
  components: {
    Tree
  },
  data() {
    return {
      form: {
        name: '',
        id: '',
        meno: ''
      }
    }
  }
}
</script>

<style scoped>
.container{
  padding: 15px;
  height: calc(100vh - 50px);
  background-color: #f4f4f5;
}
.container .box{
  height: calc(100vh - 350px);
}
  .box-card{
    height: 100%;
  }
</style>
