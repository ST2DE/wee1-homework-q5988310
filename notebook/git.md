# Git 教學

## 什麼是版本控制系統? GIT?
版本控制系統 (Version Control System, VCS)是一套能記錄所有修改版本、讓使用者能隨時取回特定版本的系統。

## 安裝並設定GIT
請先下載並安裝Git、並建立一個GitHub帳號。安裝完Git後請打開命令介面，輸入git –version確認是否安裝成功。

```
$ git --version
git version 2.9.0.
```

安裝越新的版本、安全性越高，不過基礎指令在任何版本都可以運行。

一開始要告訴Git使用者資訊，請打開Git介面，輸入git config –global user.name和git config –global user.email的使用者名稱和Email (就是你的GitHub使用者名稱和信箱)。

```
$ git config --global user.name "Lynn19931205"
$ git config --global user.email "j890355b@gmail.com"
``` 

加上 –global 表示是全域的設定。你可以使用 git config –list 這個指令來看你的 Git 設定內容：

```
$ git config --list
    user.name=Lynn19931205
    user.email=j890355b@gmail.com
```

## 開始使用GIT

在開始學習Git的時候，初學者首先須認知Git中的檔案有三種狀態：已修改、已暫存和已提交，三者分別位於Working Directory (本地端)、Staging Area (暫存端)和Repository (版本庫)。

我們在玩遊戲時若沒有存檔、就算關掉遊戲也不會回到歷史狀態；因此我們需要藉由每一次的指令「commit」，也就是遊戲的「存檔」，讓Git知道要在什麼時間點儲存一個版本。

但Git貼心的地方是、為了讓你有反悔的機會，不要commit一個新版本後、才發現沒檢查好錯誤的地方就儲存這個版本，因此又多設了一個「暫存區」稱為「Staging Area」。

可以先將已修改的檔案先用加到「Staging Area」，等確認好檔案一切無誤後、再存入版本庫中。此時就是我們每次的遊戲存檔啦！

* 將現有專案CLONE下來

如果現有的專案和Repository已經存在GitHub上，可以上GitHub網站、按下專案內部的綠色按鈕、將網址複製下來，回去打開Git的命令介面輸入git clone加上複製的網址：

```
$ git clone
```

這邊我輸入一個我有興趣的開源的專案：

```
$ git clone https://github.com/sarcadass/granim⋯⋯ New_Project
``` 

打開桌面(或任何你複製檔案下來的地方)，就可以看到這個叫做New_Project的資料夾出現了！

* 建立自己的專案

首先打開Git的命令介面，在桌面創建一個叫做project_1的資料夾，並在裡面創建一個名稱為hello.txt的文件。

```
$ cd ~/desktop$ mkdir project_1
$ cd ~/desktop/project_1/
$ touch hello.txt
```
 

建立完我們第一個專案後，打上git init指令、讓Git遊戲存檔專家進駐吧！

```
$ git init
Initialized empty Git repository in c:/Users/Lynn/desktop/project_1/.git/
Lynn@LYNNCHEN ~/desktop/project_1 (master)
```

## 參考資料

[Git新手入門教學](https://hellolynn.hpd.io/2017/01/18/git新手入門教學-part-1/)