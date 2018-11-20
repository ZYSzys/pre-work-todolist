import request from './request';
import { stringify } from 'qs';

export function getTD() {
    return request({
        url: '/todo/',
        method: 'get',
    });
};

export function addTD({todo, completed, expireDate, importance}) {
    return request({
        url: '/todo/add',
        method: 'post',
        data: stringify({todo, completed, expireDate, importance})
    });
};

export function deleteTD({ todo }) {
    return request({
        url: '/todo/delete',
        method: 'post',
        data: stringify({todo})
    });
};

export function toggleTD({ todo }) {
    return request({
        url: '/todo/toggle',
        method: 'post',
        data: stringify({todo})
    });
};

export function changeTD({todo, newTodo}) {
    return request({
        url: '/todo/change',
        method: 'post',
        data: stringify({todo, newTodo})
    })
};
