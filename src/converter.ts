interface Tree {
  value: string;
  children?: Tree[];
}

type TreeStack = Tree[];
type ChildNum = 0 | 2 | 3;

function getChildNum(character: string): ChildNum {
  const re_idc_binary = /[⿰⿱⿴⿵⿶⿷⿸⿹⿺⿻]/g;
  const re_idc3_trainary = /[⿲⿳]/g;

  if (re_idc_binary.test(character)) return 2;
  if (re_idc3_trainary.test(character)) return 3;

  // not idc
  return 0;
}

export function convert(ids: string) {
  const idsStack: string[] = [];
  const treeStack: TreeStack = [];

  const arr = Array.from(ids);
  let index = 0;
  while (index < arr.length) {
    const currentChar = arr[index];
    const currentChildLen = getChildNum(currentChar);

    if (
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
        treeStack[treeStack.length - 1].children?.push(popedTree);
      }
    }

    if (currentChildLen > 0) {
      idsStack.push(currentChar);
      treeStack.push({ value: currentChar, children: [] });
    } else {
      treeStack[treeStack.length - 1].children?.push({ value: currentChar });

      if (
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
          treeStack[treeStack.length - 1].children?.push(popedTree);
        }
      }
    }

    index++;
  }
  return treeStack[0];
}

// const tester = '⿱A⿰⿵CD⿴⿵CDE';
// const tester = '⿰⿱卯金刂';
// const tester = '⿱A⿰B⿴⿵CD⿷EF';
// const tester = '⿱⿱ABC';
// const tester = '⿱⿱AB⿲DEF';
// console.log(JSON.stringify(convert(tester), null, 2));
