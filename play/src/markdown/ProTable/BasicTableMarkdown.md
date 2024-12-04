```typescript
<script setup lang="ts">
import { ref } from 'vue';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';
const page = ref({ pageNum: 1, pageSize: 10 });

const options: ProTableOption[] = [
    {
        key: 'id',
        title: '编号',
        hideInSearch: true,
    },
    {
        key: 'title',
        title: '标题',

    },
    {
        key: 'author',
        title: '作者'
    }
];

function request(data: ProTableRequest<any>) {
    console.log('request', data);
    return Promise.resolve({
        total: 10,
        list: [{ id: 1, title: '标题1', author: 'Tom Hardy' }, { id: 2, title: '标题2', author: 'Tom Hardy' }, { id: 3, title: '标题3', author: 'Tom Hardy' }, { id: 4, title: '标题4', author: 'Tom Hardy' }, { id: 5, title: '标题', author: 'Tom Hardy' }]
    })
}

</script>

<template>
    <div>
        <div style="width: 75vw;">
            <ProTable rowKey="id" v-model:page="page" :request :options>
            </ProTable>
        </div>
    </div>
</template>

<style scoped></style>

```