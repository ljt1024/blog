<template>
  <div class="container">
    <el-row :gutter="20" class="box">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="display: inline-block;padding-top: 10px">文章管理</span>
              <el-select v-model="value" placeholder="请选择" style="margin-left: 30px">
                <el-option
                  label="默认"
                  value="1"
                />
                <el-option
                  label="推荐"
                  value="2"
                />
                <el-option
                  label="最新"
                  value="3"
                />
              </el-select>
              <el-button type="primary" style="float: right;padding: 10px" icon="el-icon-plus" size="small">添加文章</el-button>
            </div>
            <div class="text item" style="height: 100%">
              <el-table
                :data="tableData"
                border
                style="width: 100%"
                height="calc(100% - 40px)"
              >
                <el-table-column
                  prop="id"
                  label="编号"
                  width="180"
                />
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180"
                />
                <el-table-column
                  prop="title"
                  label="标题"
                  width="180"
                />
                <el-table-column
                  prop="content"
                  label="内容"
                />
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-tooltip class="item" effect="dark" content="查看" placement="top">
                      <el-button type="primary" icon="el-icon-view" size="mini" />
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="修改" placement="top">
                      <el-button type="warning" icon="el-icon-edit" size="mini" />
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="删除" placement="top">
                      <el-button type="danger" icon="el-icon-delete" size="mini" />
                    </el-tooltip>
                  </template>
                </el-table-column>
              </el-table>
              <div class="pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000"
                />
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      tableData: [{
        id: '1',
        date: '2016-05-02',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      }, {
        id: '2',
        date: '2016-05-04',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      }, {
        id: '3',
        date: '2016-05-01',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      }, {
        id: '4',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '5',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '6',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '7',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '8',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '9',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '10',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      },
      {
        id: '11',
        date: '2016-05-03',
        title: '一篇好博客文章',
        content: '一篇好博客文章的内容xxxxxxxx'
      }
      ]
    }
  }
}
</script>

<style scoped>
  .container{
    overflow: hidden;
    padding: 15px;
    height: calc(100vh - 50px);
    background-color: #f4f4f5;
  }
  .container .box{

  }
  .pagination{
    margin-top: 10px;
  }
</style>
