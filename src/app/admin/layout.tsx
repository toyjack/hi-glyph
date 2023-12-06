import type { Metadata } from "next";
import AdminPanelNavi from "./admin-panel-navi";

export const metadata: Metadata = {
  title: "Admin - Hi Glyph",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    { key: "site", label: "Site" },
    { key: "glyphs", label: "Glyphs" },
    { key: "users", label: "Users" },
  ];
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="p-2 w-full sm:w-1/4 sm:p-4">
        <AdminPanelNavi items={items} />
      </div>
      <div className="p-2 w-full sm:w-3/4">{children}</div>
    </div>
  );
}