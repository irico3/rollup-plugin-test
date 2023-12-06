export default function myExample() {
  return {
    name: "my-example",
    resolveId(source) {
      if (source === "virtual-module") {
        console.log(this.resolve(source));
        return source;
      }
      return null;
    },
    load(id) {
      if (id === "virtual-module") {
        return 'export default "This is virtual!"';
      }
    },
  };
}
