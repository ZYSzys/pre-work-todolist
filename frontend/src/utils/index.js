export function formatDate(dateString) {
    const date = new Date(dateString);
    return [date.getFullYear(), date.getMonth()+1, date.getDate()].join('/');
}
