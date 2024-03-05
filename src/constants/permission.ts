const ROLE_PERMISSION = {
  USER_PAGE: 'USER_PAGE',
  USER_PAGE_CREATE: 'USER_PAGE_CREATE',
  USER_PAGE_DELETE: 'USER_PAGE_DELETE',
  USER_PAGE_EDIT: 'USER_PAGE_EDIT',
  USER_CREATE_PAGE: 'USER_CREATE_PAGE',
  USER_CREATE_PAGE_INSERT: 'USER_CREATE_PAGE_INSERT',
  PLAN_PAGE: 'PLAN_PAGE',
  PLAN_PAGE_CREATE: 'PLAN_PAGE_CREATE',
  PLAN_PAGE_EDIT: 'PLAN_PAGE_EDIT',
  PLAN_PAGE_DELETE: 'PLAN_PAGE_DELETE',
}

const PERMISSION_MAP = [
  {
    value: ROLE_PERMISSION.USER_PAGE,
    label: 'การจัดการข้อมูลผู้ใช้',
    children: [
      { value: ROLE_PERMISSION.USER_PAGE_CREATE, label: 'เพิ่มผู้ใช้งาน' },
      { value: ROLE_PERMISSION.USER_PAGE_EDIT, label: 'แก้ไขผู้ใช้งาน' },
      { value: ROLE_PERMISSION.USER_PAGE_DELETE, label: 'ลบผู้ใช้งาน' },
      {
        value: ROLE_PERMISSION.USER_CREATE_PAGE,
        label: 'สร้างผู้ใช้งาน',
        children: [
          {
            value: ROLE_PERMISSION.USER_CREATE_PAGE_INSERT,
            label: 'เพิ่มผู้ใช้งาน',
          },
        ],
      },
    ],
  },
  {
    value: ROLE_PERMISSION.PLAN_PAGE,
    label: 'จัดการแพลน',
    children: [
      { value: ROLE_PERMISSION.PLAN_PAGE_CREATE, label: 'เพิ่มแพลน' },
      { value: ROLE_PERMISSION.PLAN_PAGE_EDIT, label: 'แก้ไขแพลน' },
      { value: ROLE_PERMISSION.PLAN_PAGE_DELETE, label: 'ลบแพลน' },
    ],
  },
]

export { PERMISSION_MAP, ROLE_PERMISSION }

