# RESTful_API_CI [![Build Status](https://travis-ci.org/NCNU-OpenSource/RESTful_API_CI.svg?branch=master)](https://travis-ci.org/NCNU-OpenSource/RESTful_API_CI)

## 簡報連結
- https://docs.google.com/presentation/d/1NDp43Zd3CcCHG3ItLzVEGKLhw_2PESOhbPfhrAJ4M0Y/edit?usp=sharing

## 使用步驟
- git clone
- cd RESTful_API_CI
- docker-compose build
- docker-compose up   (啟動)
- docker-compose down (關閉)

## 功能
#### API直接查詢出會員列表
- 直接查詢出會員列表
  - /users
- 以電話搜尋會員
  - /users/{Tel}
- 單元測試 
- Travis CI 整合測試部屬

## 開發環境
- Ubuntu 18.04
- Docker version 18.09.6
- Docker-compose version 1.17.1
## 使用工具
- Chrome
- Postman
- Visual Studio Code 文字編輯器

## 安裝環境
### Visual Studio Code
[點我下載](https://code.visualstudio.com/docs/?dv=linux64_deb)
```
- 官網下載 Visual Studio Code 安裝檔(.deb)  
- cd <VS Code 安裝檔所在目錄>
- sudo dpkg -i <VS Code 安裝檔>.deb
- code (開啟程式)
```
![](https://i.imgur.com/XXu8BAk.png)
### Postman
```
- sudo snap install postman
```
![](https://i.imgur.com/SsVC92q.png)
### Chrome
```
- sudo apt install gdebi-core
- wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
- sudo gdebi google-chrome-stable_current_amd64.deb
- google-chrome
```
![](https://i.imgur.com/RG1mkox.png)
### Docker
```
- sudo apt update
- sudo apt install apt-transport-https ca-certificates curl software-properties-common
- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
- sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
- sudo apt update
- apt-cache policy docker-ce
- sudo apt install docker-ce
- sudo apt install docker-compose
```
## Postman 測試 CRUD
#### GET http://localhost:8123/users 
![](https://i.imgur.com/lLfOqP5.png)
#### POST http://localhost:8123/users/DDD/0977398769 
![](https://i.imgur.com/OepnBPn.png)
#### PUT http://localhost:8123/users/DDD/0000000000 
![](https://i.imgur.com/4s9UltY.png)
#### DELETE http://localhost:8123/users/DDD
![](https://i.imgur.com/vMHKCxr.png)

## 注意事項

