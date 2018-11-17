import request from './request';
import { stringify } from 'qs';

export function getTD() {
    return request({
        url: '/todo/',
        method: 'get',
    });
};

export function addTD({todo, completed}) {
    return request({
        url: '/todo/add',
        method: 'post',
        data: stringify({todo, completed})
    });
};

export function deleteTD({ todo, completed }) {

};

export function toggleTD({todo, completed}) {
    // body...
};

export function changeTD({todo, completed}) {

};
