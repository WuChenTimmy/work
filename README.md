# 我的作品 - 食物購物平台

這個儲存庫目標是建構一款線上購物平台，內容展示了我在網頁開發方面的技能和經驗。

## 專案內容

### 1. 購物平台
- 描述：使用 MySQL 建構資料庫、 React.js 構建的前端和 Node.js 構建的後端的網頁購物平台。
  - 資料庫
    - 以 MySQL 建構及管理
  - 後端
    - 以 Eclipse 使用 SpringBoot 框架建構
    - vo Package 使用 Lombok 的 @Data 自動生成方法
    - mapper Package 使用 Mybatis 的 @Mapper 定義 CRUD 方法、及操作資料庫相對應的 SQL 語句
    - service Package 使用 @Service 自動注入 mapper 中的方法並實作
    - controller Package 使用：
      - @RestController 作為 Spring MVC 控制器
      - @RequestMapping 作為 URL 路徑的根路徑
      - @CrossOrigin 以允許跨域請求
  - React 框架建構前端：
- 功能：
  - 使用者身份驗證和授權
  - 商品瀏覽和搜尋
  - 購物車管理
  - 訂單處理和支付整合
- 技術：HTML、CSS、JavaScript、Node.js、React.js、Node.js、Express.js、MongoDB、Bootstrap

### 2. 部落格網站
- 描述：一個簡單的部落格網站，用戶可以創建、閱讀、更新和刪除部落格文章。
- 功能：
  - 使用者註冊和登入
  - 部落格文章的 CRUD 操作
  - 評論系統
  - 使用者個人檔案
- 技術：HTML、CSS、JavaScript、Node.js、Express.js、MongoDB

### 3. 作品集網站
- 描述：我的個人作品集網站，展示了我的專案、技能和經驗。
- 功能：
  - 專案展示，包括描述和連結
  - 關於我部分
  - 聯絡表單
- 技術：HTML、CSS、JavaScript

## 使用方式
1. 將儲存庫克隆到您的本地機器。
2. 切換到專案目錄。
3. 使用 `npm install` 安裝相依套件。
4. 使用 `npm start` 開啟開發伺服器。
5. 在瀏覽器中透過 `http://localhost:3000` 訪問應用程式。

## 授權條款
本專案使用 [MIT 授權條款](LICENSE)。

歡迎探索我的專案，如有任何問題或反饋，請隨時與我聯繫！
