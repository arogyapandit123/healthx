// Routes needs to be listed regarding Dashboard and it's children
export default () => ({
  path: "/dashboard",
  name: "dashboard",
  meta: { auth: true, parent: true },
  props: {},
  component: () => import("../index"),
  children: []
});
