const sendContentScript = require("./sendContentScript");
const makeTreeCreator = require("./makeTreeCreator");

function get_fiber_root(document_children) {
  for (let ele of document_children) {
    if (ele.hasOwnProperty("_reactRootContainer")) return ele;
  }
}
 function () {
  const fiberRoot = container._reactRoot.container.
  const hostRoot = fiberRoot.current;
  const treeCreator = makeTreeCreator();

  // on first load use initial render.
  window.addEventListener("load", () =>
    sendContentScript(treeCreator, hostRoot)
  );

  window.addEventListener("click", () => {
    setTimeout(() => {
      sendContentScript(treeCreator, hostRoot, fiberRoot.current);
    }, 200);
  });

  window.addEventListener("keyup", () => {
    setTimeout(() => {
      sendContentScript(treeCreator, hostRoot, fiberRoot.current);
    }, 200);
  });
};

export module createTree.js;