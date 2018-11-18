# pre-work-todolist
[![Travis CI](https://travis-ci.com/ZYSzys/pre-work-todolist.svg?token=hDbx4fFbLLvMJQybMquv&branch=master)](https://travis-ci.com/ZYSzys/pre-work-todolist)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![python](https://img.shields.io/badge/python-2.7.10-blue.svg)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-1.8.19-blue.svg)](https://www.djangoproject.com/)
[![Django REST Framework Support](https://img.shields.io/badge/DRF-3.5.4-blue.svg)](https://www.django-rest-framework.org/)
[![license](https://img.shields.io/github/license/ZYSzys/pre-work-todolist.svg)](https://github.com/ZYSzys/pre-work-todolist/blob/master/LICENSE)

> A pre-work-todolist for internship.

- [增加一个待办事项](#增加一个待办事项)
- [删除一个待办事项](#删除一个待办事项)
- [标记一个待办事项为已完成](#标记一个待办事项为已完成)
- [编辑一个待办事项的具体内容](#编辑一个待办事项的具体内容)
- [列出所有的待办事项](#列出所有的待办事项)
- [待办事项可以设置expireDate](#待办事项可以设置expiredate)


## Install
```sh
# backend
$ pip install -r requirements.txt

# frontend
$ cd frontend && yarn install
```

## Run
```sh
# backend
$ ./manage.py makemigrations backend
$ ./manage.py migrate
$ ./manage.py createsuperuser
$ ./manage.py runserver

# frontend
yarn start
```


### 增加一个待办事项
![](/screenshot/1.gif)

### 删除一个待办事项
![](/screenshot/2.gif)

### 标记一个待办事项为已完成
![](/screenshot/3.gif)

### 编辑一个待办事项的具体内容
![](/screenshot/4.gif)

### 列出所有的待办事项
![](/screenshot/5.gif)

### 待办事项可以设置expireDate
![](/screenshot/6.gif)
