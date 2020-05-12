<template>
  <div class="app-container">
    <!--<el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />-->

    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
export default {

  data() {
    return {
      filterText: '',
      data2: [{
        id: 1,
        label: '栏目1',
        children: [{
          id: 4,
          label: '栏目1-1',
          children: [{
            id: 9,
            label: '栏目 1-1-1'
          }, {
            id: 10,
            label: '栏目 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '栏目 2',
        children: [{
          id: 5,
          label: '栏目 2-1'
        }, {
          id: 6,
          label: '栏目 2-2'
        }]
      }, {
        id: 3,
        label: '栏目 3',
        children: [{
          id: 7,
          label: '栏目 3-1'
        }, {
          id: 8,
          label: '栏目 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

