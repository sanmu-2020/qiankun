export default [{
  path: '/index',
  meta: {
    title: '班级'
  },
  component: () => import('@/components/HelloWorld.vue')
},
{
  path: '/index/classlist',
  name: 'classlist',
  meta: {
    title: '班级列表'
  },
  component: () => import('@/components/list.vue')
}]
