import rooms from "rooms";

function getTitle(pathname) {
  const pathnameNoSlash = pathname.replace(/\/+$/, "");
  const room = rooms.filter(room => room.slug === pathnameNoSlash)[0];
  const { title } = room || { title: "Room Finder" };

  return title;
}

export default getTitle;
