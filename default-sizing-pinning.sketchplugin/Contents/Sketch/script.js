var onRun = function (context) {
  const document = require("sketch/dom").getSelectedDocument();
  const UI = require("sketch/ui");

  const dialog = NSAlert.alloc().init();
  dialog.setMessageText(
    "Set layers to default sizing and pinning in which pages?"
  );
  const buttons = ["This Page", "All Pages", "Cancel"];
  buttons.forEach((title) => dialog.addButtonWithTitle(title));

  const response = dialog.runModal();
  if (response === 1002) return;

  const pages = response === 1000 ? [document.selectedPage] : document.pages;
  let layerCount = 0;

  pages.forEach((page) => {
    page.layers
      .filter((layer) => layer.type === "Artboard")
      .forEach((artboard) => {
        artboard.layers.forEach((child) => {
          if (child.horizontalSizing !== 1) {
            child.horizontalSizing = 0;
          }
          if (child.verticalSizing !== 1) {
            child.verticalSizing = 0;
          }
          child.horizontalPins = 1;
          child.verticalPins = 1;
          layerCount++;
        });
      });
  });

  const message =
    layerCount === 0
      ? "Couldn’t find any layers in top-level frames"
      : `Set ${layerCount} layers to default sizing and pinning`;

  console.log(message);
  UI.message(message);
};
