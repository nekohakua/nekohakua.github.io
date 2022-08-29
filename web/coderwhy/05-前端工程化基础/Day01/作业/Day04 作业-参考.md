# Day04 作业布置

## 一. 完成课堂所有的代码



## 二.列出Bootstrap4的断点(Breakpoints)

| Breakpoint(断点)  | class infix(简写) | Dimensions(尺寸) |
| :---------------: | ----------------- | ---------------- |
|    Extra-Small    | None              | <576px           |
|       Small       | sm                | >=576px          |
|      Medium       | md                | >=768px          |
|       Large       | lg                | >=992px          |
| (额外)Extra large | xl                | >=1200px         |

## 三.什么是Containers容器？

- 响应式容器
- 是Bootstrap最基本的布局元素 支持响应式
- 用于包含 填充 也会作为内容居中使用 可以嵌套(nesting) 但大多数布局不需要嵌套容器
- .container 在每个断点处都设置不同的max-width
- .container-fluid 所有断点处都是width:100%
- .container-{breakpoint} 默认100%
- ` col时不需要使用container`

## 四.什么是网格系统（Grid System）

- 对于常见的列表布局 进行的封装
- 用于构建移动设备优先的强大布局系统 支持12列网络 5个断点 和数十个预定义类
- 底层使用flexbox来构建弹性布局 支持12列网格布局
- 使用container row col类进行布局 布局是响应式的

网格系统原理

- container
  - width: 100%;
  - padding-right:  15px;
  - padding-left: 15px;
  - margin-right: auto;
  - margin-left: auto;

- row 网格系统的每一行 存放在container中
  - display: flex;
  - -ms-flex-wrap: wrap;
  - flex-wrap: wrap;
  - margin-right: -15px;
  - margin-left: -15px;
  - margin是为了层叠掉container的padding

- col 网格系统的每一列 在row中 在嵌套时 可以不用写container 用col替代 col中直接写row
  - position: relative;
  - width: 100%;
  - padding-right: 15px;
  - padding-left: 15px;
  - flex-basis: 0;
  - flex-grow: 1; / flex: 0 0 xx%;
  - max-width: 100%;/ max-width:x%;



















