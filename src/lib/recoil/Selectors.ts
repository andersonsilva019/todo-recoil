import { selector } from 'recoil'
import { todoListAtom } from './Atoms'

export const todosSelector = selector({
  key: 'todos',
  get: ({ get }) => {

    const todoList = get(todoListAtom);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      todoList,
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    }
  }
})