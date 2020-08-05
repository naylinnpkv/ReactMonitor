const sendContentScript = require("./sendContentScript");
const makeTreeCreator = require("./makeTreeCreator");

//this function will be invoked in containerWrapper.js

module.exports = function (container) {
  const fiberRoot = container._reactRootContainer._internalRoot;
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