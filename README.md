# 我的作品 - 食物購物平台

這個儲存庫的目標是建構一款線上購物平台，內容展示了我在網頁開發方面的技能和經驗。

## 專案頁面展示
![示例圖片](./images/example.png)

## 專案內容

- 描述：使用 MVC 架構進行規劃和構建的網頁購物平台，其中：

  - 資料庫
    - 以 `MySQL` 建構及管理
  
  - 後端
    - 以 `Eclipse` 使用 `SpringBoot 框架` 建構
    - `vo Package` 使用 `Lombok` 的 `@Data` 自動生成方法
    - `mapper Package` 使用 `Mybatis` 的 `@Mapper` 定義 `CRUD 方法` 、及操作資料庫相對應的 `SQL 語句`
    - `service Package` 使用 `@Service` 自動注入 `mapper` 中的方法並實作
    - `controller Package` 使用：
      - `@RestController` 作為 `Spring MVC 控制器`
      - `@RequestMapping` 作為 `URL 路徑` 的根路徑
      - `@CrossOrigin` 以 `允許跨域請求`
  
  - 前端
    - 以 `Visual Studio Code` 使用 `React 框架` 建構
    - `header Folder` 使用 `Flex 彈性布局` 進行排版，且 `註冊、登入按鈕` 透過 `Modal` 功能建立填入資料的 `模態框`
    - `navigater Folder` 使用 `Carousel` 功能自動輪播圖片，包含 `指示符` 、及 `切換鍵`
    - `content Folder` 使用 `Cards` 及 `Navs and tabs` 功能建立 `商品類別切換紐` ，再透過 `map陣列` 及 `Cards群組` 顯示對應類別的商品，且各商品包含透過 `setState` 方法建立 `增加/減少商品數量的按鈕` 、及 `購物車按鈕`
    - `footer Folder` 使用 `Copyright` 功能顯示 `版權信息`
    - `user Folder` 建立了 `AddUser` 及 `LoginUser` 功能，使用 `正則表達式` 驗證表單、 `setState` 更新表單信息、 `Axios` 將表單數據傳送至後端驗證
    
- 功能：
  - 註冊、登入驗證
  - 商品輪播
  - 依類別顯示商品
  - 購物車管理

- 技術： `SQL` 、 `SpringBoot` 、 `Spring MVC` 、 `React` 、 `HTML` 、 `CSS` 、 `JavaScript` 、 `Bootstrap`

## 使用方式
1. 將 work 儲存庫儲存到您的本地端
   - 內有名稱為： `MySQL` 、 `Eclipse` 、 `VSCode` 的資料夾。
2. 設定 MySQL：
   - 開啟 `MySQL Workbench` 建立一個名稱為 `work` 的資料庫
   - 使用 `Data Import` 將 `MySQL 資料夾` 內名稱為 `work_user.sql` 的檔案導入
3. 設定 Eclipse：
   - 開啟 `Eclipse IDE` 安裝 `SpringBoot 框架` 及 `Node.js 框架`
   - 使用 `Import...`， 將 `Eclipse 資料夾` 內名稱為 `work 資料夾` 導入
4. 設定 VSCode：
   - 開啟 `Visual Studio Code` 將 `VSCode 資料夾` 內名稱為 `work-app 資料夾` 開啟
   - 尋找 `src/component/user` 位置，將 `AddUser` 與 `LoginUser` 內 `URL 的 ID位址` 修改為 `當前電腦的 ID位址`
5. 設定 React：
   - 開啟 `CMD` 並將位置切換至 `VSCode 資料夾` 內名稱為 `work-app 資料夾`
   - 使用 `npm install` 安裝相依套件。
   - 使用 `npm start` 執行伺服器，即可啟動網頁。
6. 瀏覽器顯示網頁：
   - 在瀏覽器中透過 `http://localhost:3000` 訪問網頁。

## 授權條款
本專案使用 [MIT 授權條款](LICENSE)。

歡迎探索我的專案，如有任何問題或反饋，請隨時與我聯繫！
