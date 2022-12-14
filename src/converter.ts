interface Tree {
  value: string;
  children?: Tree[];
}

type TreeStack = Tree[];
type ChildNum = 0 | 2 | 3;

function getChildNum(character: string): ChildNum {
  const re_idc_binary = /[⿰⿱⿴⿵⿶⿷⿸⿹⿺⿻]/g;
  const re_idc_trainary = /[⿲⿳]/g;

  if (re_idc_binary.test(character)) return 2;
  if (re_idc_trainary.test(character)) return 3;

  // not idc
  return 0;
}

export function convert(ids: string) {
  const idsStack: string[] = [];
  let treeStack: TreeStack = [];

  const arr = Array.from(ids);
  let index = 0;
  while (index < arr.length + 1) {
    const currentChar = arr[index];
    const currentChildLen = getChildNum(currentChar);

    while (
      treeStack.length > 0 &&
      idsStack.length > 0 &&
      treeStack[treeStack.length - 1].children &&
      treeStack[treeStack.length - 1].children?.length ===
        getChildNum(idsStack[idsStack.length - 1])
    ) {
      const popedTree = treeStack.pop();
      const popedIds = idsStack.pop();
      if (popedTree && popedIds) {
        popedTree.value = popedIds;
        if (treeStack.length === 0) {
          treeStack = [popedTree];
        } else {
          treeStack[treeStack.length - 1].children?.push(popedTree);
        }
      }
    }

    if (currentChildLen > 0) {
      idsStack.push(currentChar);
      treeStack.push({ value: currentChar, children: [] });
    } else {
      if (currentChar)
        treeStack[treeStack.length - 1].children?.push({ value: currentChar });
    }

    index++;
  }
  return treeStack[0];
}
