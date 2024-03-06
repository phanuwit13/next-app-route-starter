import { ROUTE } from './routes'

// permission
const ROLE_PERMISSION = {
  HOME: 'HOME',
  PRODUCT_PAGE: 'PRODUCT_PAGE',
  PRODUCT_PAGE_CREATE: 'PRODUCT_PAGE_CREATE',
  PRODUCT_PAGE_UPDATE: 'PRODUCT_PAGE_UPDATE',
  PRODUCT_PAGE_DELETE: 'PRODUCT_PAGE_DELETE',
  PRODUCT_DETAIL_PAGE: 'PRODUCT_DETAIL_PAGE',
  PRODUCT_DETAIL_PAGE_UPDATE: 'PRODUCT_DETAIL_PAGE_UPDATE',
  PRODUCT_DETAIL_PAGE_DELETE: 'PRODUCT_DETAIL_PAGE_DELETE',
  PRODUCT_CREATE_PAGE: 'PRODUCT_CREATE_PAGE',
}

// list การกำหนด permission
const PERMISSION_MAP = [
  {
    value: ROLE_PERMISSION.HOME,
    label: 'หน้าแรก',
  },
  {
    value: ROLE_PERMISSION.PRODUCT_PAGE,
    label: 'หน้าจัดการสินค้า',
    children: [
      { value: ROLE_PERMISSION.PRODUCT_PAGE_CREATE, label: 'เพิ่มสินค้า' },
      { value: ROLE_PERMISSION.PRODUCT_PAGE_DELETE, label: 'ลบสินค้า' },
      { value: ROLE_PERMISSION.PRODUCT_PAGE_UPDATE, label: 'แก้ไขสินค้า' },
    ],
  },
  {
    value: ROLE_PERMISSION.PRODUCT_DETAIL_PAGE,
    label: 'หน้าจัดการรายละเอียดสินค้า',
    children: [
      {
        value: ROLE_PERMISSION.PRODUCT_DETAIL_PAGE_UPDATE,
        label: 'แก้ไขสินค้า',
      },
      { value: ROLE_PERMISSION.PRODUCT_DETAIL_PAGE_DELETE, label: 'ลบสินค้า' },
    ],
  },
  {
    value: ROLE_PERMISSION.PRODUCT_CREATE_PAGE,
    label: 'หน้าสร้างสินค้า',
  },
]

// permission ในการเข้าหน้า หรือ ปุ่มต่างๆ
const ROUTE_PERMISSION = {
  [ROUTE.LOGIN]: {
    authGuard: false,
    guestGuard: true,
    permission: [],
  },
  [ROUTE.HOME]: {
    authGuard: true,
    guestGuard: false,
    permission: [ROLE_PERMISSION.HOME],
  },
  [ROUTE.PRODUCTS]: {
    authGuard: true,
    guestGuard: false,
    permission: [
      ROLE_PERMISSION.PRODUCT_PAGE_CREATE,
      ROLE_PERMISSION.PRODUCT_PAGE_DELETE,
      ROLE_PERMISSION.PRODUCT_PAGE_UPDATE,
    ],
  },
  [ROUTE.PRODUCTS_DETAIL]: {
    authGuard: true,
    guestGuard: false,
    permission: [
      ROLE_PERMISSION.PRODUCT_DETAIL_PAGE_UPDATE,
      ROLE_PERMISSION.PRODUCT_DETAIL_PAGE_DELETE,
    ],
  },
  [ROUTE.PRODUCTS_DETAIL]: {
    authGuard: true,
    guestGuard: false,
    permission: [ROLE_PERMISSION.PRODUCT_CREATE_PAGE],
  },
}

export { PERMISSION_MAP, ROLE_PERMISSION, ROUTE_PERMISSION }

