import rooms from "rooms";

function getTitle(pathname) {
  const pathnameNoSlash = pathname.replace(/\/+$/, "");
  const room = rooms.filter(room => room.slug === pathnameNoSlash)[0];
  const { title } = room || "";
  return title;
}

export default getTitle;
