const FS = require("fs").promises;

const getIcons = async () => {
  const _icons = {};

  const types = await FS.readdir("./src/assets/icons-raw");

  for (const type of types) {
    const sections = await FS.readdir(`./src/assets/icons-raw/${type}`);

    for (const section of sections) {
      const icons = await FS.readdir(
        `./src/assets/icons-raw/${type}/${section}`
      );

      for (const icon of icons) {
        // thanks to copilot
        const iconPath = `./src/assets/icons-raw/${type}/${section}/${icon}`;
        const iconData = await FS.readFile(iconPath, "utf8");
        const iconDataTransformed = iconData.replace(
          /fill=".*?"/g,
          'fill="currentColor"'
        );

        const icon_key = `${type}-${section}-${icon}`
          .replace(".svg", "")
          .toLowerCase()
          .replace(/ /g, "-");

        _icons[icon_key] = iconDataTransformed;
      }
    }
  }

  return _icons;
};

const init = async () => {
  const icons = await getIcons();

  let res_str = "{";
  for (const key in icons) {
    res_str += `"${key}": ${icons[key]},`;
  }
  res_str += "}";

  await FS.writeFile(
    "./src/assets/icons.tsx",
    `export const aliases: Record<string, any> = ${res_str}`
  );
};

init();
