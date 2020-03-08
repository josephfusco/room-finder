import rooms from "rooms";

function getTitle(pathname) {
  const pathnameNoSlash = pathname.replace(/\/+$/, "");
  const room = rooms.filter(room => room.slug === pathnameNoSlash)[0];
  console.log(room);
  const { title } = room || { title: "Room Finder" };
  console.log(room);

  return title;
}

export default getTitle;
