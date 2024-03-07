# Directory is route app

-page.tsx เป็นไฟล์ UI ของหน้านั้นๆ
-layout.tsx เป็นไฟล์ layout ที่ครอบ page.tsx อยู่ สามารถ ใช้ check auth หรือ permission ของหน้านั้นๆได้ 
-providers.tsx เป็นไฟล์จัดการการตั้งค่า หรือ initail ต่างๆ ซึ่งทุกหน้าต้องผ่านไฟล์นี้
-permissionButton.tsx เป็นไฟล์จัดการ Permission ของปุ่ม ให้นำไปครอบปุ่มที่ต้องการเช็ค Permission
-permissionProvider.tsx เป็นไฟล์จัดการ Permission ของ Page ว่า User ไหน เข้าหน้าไหน ได้บ้าง ถูกเรียกใช้แล้วที่ providers.tsx