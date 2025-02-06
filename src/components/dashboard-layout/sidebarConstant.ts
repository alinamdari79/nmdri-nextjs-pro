import {
  Dashboard,
  Label,
  BrandingWatermarkOutlined,
  Category,
  LocationCity,
  FormatColorFillOutlined,
  ProductionQuantityLimits,
  GroupOutlined,
  Store,
  ShoppingBag,
  EditAttributes,
} from "@mui/icons-material";

export const SIDEBAR_ITEMS = [
  { href: "/dashboard", Icon: Dashboard, text: "داشبورد" },
  { href: "/dashboard/badges", Icon: Label, text: "برچسب ها" },
  { href: "/dashboard/brands", Icon: BrandingWatermarkOutlined, text: "برند" },
  { href: "/dashboard/categories", Icon: Category, text: "دسته بندی کالا" },
  { href: "/dashboard/cities", Icon: LocationCity, text: "شهرها" },
  { href: "/dashboard/colors", Icon: FormatColorFillOutlined, text: "رنگها" },
  { href: "/dashboard/properties", Icon: EditAttributes, text: "ویژگی ها" },
  {
    href: "/dashboard/products",
    Icon: ProductionQuantityLimits,
    text: "محصولات",
  },
  { href: "/dashboard/users", Icon: GroupOutlined, text: "کاربران" },
  { href: "/dashboard/sellers", Icon: Store, text: "فروشندگان" },
  { href: "/dashboard/orders", Icon: ShoppingBag, text: "سفارشات" },
];
