export function formatDate(dateString) {
    const date = new Date(dateString);
    return [date.getFullYear(), date.getMonth()+1, date.getDate()].join('/');
}

export const validateTodo = (todo, list) => {
    todo = todo.trim();
    if (todo === '') {
        alert('输入的 Todo 不能为空');
        return false;
    } else {
        for(const item of list) {
            if (item.todo === todo) {
                alert('此 Todo 已存在, 请输入其他 Todo');
                return false;
            }
        }
        return true;
    }
}
