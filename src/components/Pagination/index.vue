<template>
    <div class="pagination">
        <button :disabled="pageNo == 1" @click="$emit('currentPage', pageNo - 1)">
            上一页
        </button>
        <button v-if="startAndEnd.start > 1" @click="$emit('currentPage', 1)" :class="{ active: pageNo == 1 }">
            1
        </button>
        <button v-if="startAndEnd.start > 2">.....</button>

        <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
        <button v-for="page in startAndEnd.end" :key="page" v-if="page >= startAndEnd.start"
            @click="$emit('currentPage', page)" :class="{ active: pageNo == page }">
            {{ page }}
        </button>

        <button v-if="startAndEnd.end < (totalPage - 1)">......</button>
        <button v-if="startAndEnd.end < totalPage" @click="$emit('currentPage', totalPage)">{{ totalPage }}</button>

        <button :disabled="pageNo == totalPage" @click="$emit('currentPage', pageNo + 1)">下一页</button>
        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pageNo', 'pageSize', 'total', 'pageCount'],
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.pageSize)
        },
        startAndEnd() {
            let start = 0, end = 0;
            const { totalPage, pageNo, pageCount } = this;
            // 如果总页数小于连续的页数
            if (totalPage < pageCount) {
                start = 1;
                end = totalPage;
            } else {
                start = pageNo - parseInt(pageCount / 2);
                end = pageNo + parseInt(pageCount / 2);
                if (start < 1) {
                    start = 1;
                    end = pageCount;
                }
                if (end > totalPage) {
                    start = totalPage - pageCount + 1;
                    end = totalPage;
                }
            }
            return { start, end }
        }
    }
}
</script>

<style lang="less" scoped>
.pagination {
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }


    }
}

.active {
    cursor: not-allowed !important;
    background-color: #409eff !important;
    color: #fff !important;
}
</style>