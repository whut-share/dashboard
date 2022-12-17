const FS = require("fs").promises;

const init = async () => {
  const schema = await FS.readFile("./graphql-schema.json", "utf8");

  const types = JSON.parse(schema).__schema.types;

  const scalars = types.filter((type) => type.kind === "SCALAR");

  const interfaces = types
    .filter(
      (type) =>
        type.kind === "OBJECT" &&
        type.name !== "Query" &&
        type.name !== "Mutation" &&
        type.name !== "Subscription"
    )
    .map((type) => {
      if (type.name.startsWith("__")) {
        return "";
      }

      const fields = type.fields
        .map((field) => {
          let type = field.type;

          let is_must = "?";
          if (field.type.kind === "NON_NULL") {
            type = field.type.ofType;
            is_must = "";
          }

          // if array
          let is_array = false;
          if (type.kind === "LIST") {
            is_array = true;
            type = type.ofType.ofType;
          }

          let type_name = type.name;

          if (type.name === "Int" || type.name === "Float") {
            type_name = "number";
          } else if (type.name === "Boolean") {
            type_name = "boolean";
          } else if (type.name === "String") {
            type_name = "string";
          } else if (type.name === "DateTime") {
            type_name = "string | Date";
          } else {
            if (scalars.some((scalar) => scalar.name === type.name)) {
              const scalar = scalars.find(
                (scalar) => scalar.name === type.name
              );

              const match = scalar.description.match(/\(type: (.*)\) /);

              if (match) {
                type_name = match[1];
              } else {
                type_name = "any";
              }
            } else {
              type_name = `I${type.name}`;
            }
          }

          return `\t${field.name}${is_must}: ${type_name}${
            is_array ? "[]" : ""
          };`;
        })
        .join("\n");
      return `export interface I${type.name} {\n${fields}\n}`;
    })
    .join("\n");

  await FS.writeFile(
    "./src/interfaces/autogen-object-interfaces.ts",
    interfaces
  );
};

init();
