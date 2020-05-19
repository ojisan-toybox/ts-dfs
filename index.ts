type NodeType = {
  node: any;
  leafs: NodeType[];
};

const tree: NodeType = {
  node: "test",
  leafs: [
    {
      node: "1",
      leafs: [
        { node: "1a", leafs: [{ node: "1aa", leafs: [] }] },
        {
          node: "1b",
          leafs: [
            { node: "1ba", leafs: [] },
            { node: "1ba", leafs: [] },
          ],
        },
      ],
    },
    {
      node: "2",
      leafs: [
        { node: "2a", leafs: [{ node: "2aa", leafs: [] }] },
        {
          node: "2b",
          leafs: [
            { node: "2ba", leafs: [{ node: "2baa", leafs: [] }] },
            { node: "2ba", leafs: [] },
          ],
        },
      ],
    },
  ],
};

const stack: NodeType[] = [];
stack.push(tree);
while (stack.length > 0) {
  const node = stack.shift();
  console.log("node", node);
  if (node) {
    node.leafs.forEach((leaf) => stack.push(leaf));
  }
}
