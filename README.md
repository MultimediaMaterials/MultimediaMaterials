# Multimedia Materials Project

這是一個多媒體教材管理系統。

> ⚠️ **注意**：由於專案開發時程考量，目前的開發與演示重心主要集中在 **Frontend (前端)**。後端部分保留供參考，但主要操作僅需啟動前端即可。

## 專案結構

- `frontend/`: **(核心)** React + Vite + Tailwind CSS 前端介面
- `backend/`: Django REST Framework 後端 API (目前暫不使用)

## 技術堆疊

### Frontend (前端 - 主要)
- **React 18**
- **Vite**
- **Tailwind CSS** & **DaisyUI**
- **Axios**
- **React Router**

### Backend (後端 - 備用/參考)
- **Python** & **Django**
- **Django REST Framework**

---

## 快速開始 (Quick Start)

目前的開發流程僅需啟動前端。

### 前端啟動 (Frontend Setup)

請先確保安裝了 Node.js。

1. 開啟終端機 (Terminal)。
2. 進入 frontend 目錄：
   ```bash
   cd frontend
   ```
3. 安裝依賴套件 (初次執行時需執行)：
   ```bash
   npm install
   ```
4. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

啟動後，請依終端機顯示的網址開啟專案 (通常為 `http://localhost:5173/`)。

---

## 後端說明 (Backend - Optional)

*註：以下後端指令僅供參考，若僅需瀏覽前端介面可略過此區塊。*

若需啟動 Django 後端進行完整 API 測試，請參照以下步驟：

```bash
cd backend
# 建立/啟動虛擬環境...
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```