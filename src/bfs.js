// in the case of reactMonitor tree analyzer, cb would be check that node.hasOwnProperty(._currentReact._...)

// bfs( node, cb)
// {

// }

// root.children
// root.children[0].children ...
// root.children[2].children[1].children = null

/*
              node

 node0        node1          node2
node node    node node node    null

*/

/*root=document.body.children=[{{{}}}];






*/

// let root_test1 = [{tag:"body"},
//     children: [
//         {tag:'h1', id :'main_header'},
//         {tag: 'div',
//         [
//             {tag: 'p', id: 'description'},
//             {tag: 'ul', children: [
//                 {tag: 'li'},
//                 {tag: 'li'}
//             ]}
//         ]},
//         {tag: 'div', id:'main', children: [
//             {tag: 'button'},
//             {aaa: "found it!!",
//                 children: [{tag: 'div'}]}
//         ]}

//         ]
//  }
// console.log(root_test1);

// const document.body.children = [{tag:"div"},{tag:{__reactRootContainerContainer:fiberTree}}];

// let root_test2 = {
//     children: [
//         {tag: 'h1', id :'main_header',
//             children: [{tag: 'img'}]},
//         {tag: 'div',
//         [
//             {tag: 'p', id: 'description'},
//             {tag: 'ul', children: [
//                 {tag: 'li'},
//                 {tag: 'li'}
//             ]}
//         ]},
//         {tag: 'div', id:'main', children: [
//             {tag: 'button'},
//         ]
//     }
//     ]
// }

// in test, cb will see if node.hasOwnProperty(aaa)
//bfs( root, (node) => node.hasOwnProperty("aaa"));
// expected: root1 -> {aaa: "found it!!",
//                children: [{tag: 'div'}]}
//***expected root2 -> false */

// function get_fiber_root(arr) {
//   for (let ele of arr) {
//     if (ele.hasOwnProperty("__reactRootContainerContainer")) return ele;
//   }
// }

// const obj = function (object1) {
// console.log(object1);
// if (Array.isArray(object1)) {
//   for (let ele of object1) {
//     if (ele.hasOwnProperty("_reactRootContainer")) return ele;
//     obj(ele);
//   }
// }

// const children = [
//   {
//     tag1: "div",
//     _reactRootContainer1: {
//       _reactRootContainer: {
//         _reactRootContainer: "found it",
//       },
//     },
//   },
//   {
//     tag3: "div",
//     tag4: {
//       notyet: {
//         _reactRootContainer2: "found it",
//       },
//     },
//   },
// ];
// console.log(children[0].tag2.notyet);

// const test = { a: "3" };
// console.log(typeof test === "");
const obj = function (object1) {
  if (Array.isArray(object1)) {
    for (let ele of object1) {
      for (let props in ele) {
        // console.log(ele[props]);
        // console.log(ele[props]);
        if (props === "_reactRootContainer") return ele;

        if (typeof ele[props] === "object" && ele[props] !== null)
          return obj(ele[props]);
      }
    }
  }
  for (let keys in object1) {
    // console.log(object1);
    // console.log(props);
    if (keys === "_reactRootContainer") return object1;
    if (typeof object1[keys] === "object" && object1[keys] !== null)
      return obj(object1[keys]);
  }
};
//document.body===rooot;

const children2 = [
  { tag: "found it" },
  { foundit: "div" },
  {
    deep: "another val2",
    children: [
      {
        tag1: "abc",
        children: [
          {
            tag2: "div",
            children: [{}, { _reactRootContainer: "Finnaaaleeee" }],
          },
        ],
      },
    ],
  },
];

console.log(obj(children2));
// console.log(typeof null === "object");
