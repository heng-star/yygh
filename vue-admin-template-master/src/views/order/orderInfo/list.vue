<el-table-column label="操作"width="100"align="center">
<template slot-scope="scope">
    <router-link :to="'/order/orderInfo/show/'+scope.row.id">
      <el-button type="primary" size="mini" icon="el-icon-edit">查看</el-button>
    </router-link>
</template>
</el-table-column>
