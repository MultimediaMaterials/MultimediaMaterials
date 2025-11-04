# 注意最後有一個點 "."，代表在當前目錄下建立專案
django-admin startproject myapi .

# 現在建立一個 app 來管理你的課程資料，例如 courses
python manage.py startapp courses

# 在你的 backend 虛擬環境中 (venv)
pip install Pillow




步驟二：清理並重建資料庫
現在，我們使用我上一則回覆中的**「方法三：終極大絕招」**來確保我們有一個乾淨的、與模型完全同步的資料庫。
停止伺服器：按 Ctrl+C。
刪除舊資料庫：在 backend/ 目錄下，找到並刪除 db.sqlite3 檔案。
刪除舊遷移檔案：進入 backend/courses/migrations/ 資料夾，刪除裡面除了 __init__.py 之外的所有檔案。
重新遷移：
code
```Bash
# 在 backend 虛擬環境中
python manage.py makemigrations
python manage.py migrate
```
這會建立一個全新的、空的資料庫，並且所有的資料表（包括 courses_topic）都已經正確建立。
建立超級使用者：
code
```Bash
python manage.py createsuperuser
```
設定你的管理員帳號密碼。
步驟三：載入範例資料
這是最關鍵的一步。我們將使用 loaddata 命令來讀取 fixture 檔案並將資料寫入資料庫。
code
Bash
# 在 backend 虛擬環境中
python manage.py loaddata initial_data
(注意：你不需要寫 .json 副檔名，Django 會自動在所有 app 的 fixtures 資料夾中尋找這個檔案。)
如果一切順利，終端機會顯示 Installed 14 object(s) from 1 fixture(s) (數字可能不同)。
步驟四：驗證結果
啟動伺服器：
code
Bash
python manage.py runserver
檢查 API：
打開瀏覽器，訪問 http://127.0.0.1:8000/api/tutorials/。
這一次，你不應該再看到 OperationalError。取而代之的，你將會看到一個包含「手機基礎操作」和「安全警報站」等課程內容的 JSON 資料！
檢查 CMS 後台：
訪問 http://127.0.0.1:8000/admin/ 並登入。
點擊「教學主題」，你會看到我們預先載入的兩個主題已經存在了。你可以點進去編輯或新增更多內容。
現在，你的 Django 後端不僅解決了資料庫錯誤，還擁有了一套完整的範例課程，前端可以立刻開始使用這些真實的資料來開發介面了。
