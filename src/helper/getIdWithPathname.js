const parseName = pathname => {
  const nameArr = pathname.split("/");
  if (nameArr.length < 3) return;
  if (nameArr[1] !== "products") return;
  return nameArr[2];
};

module.exports = parseName;
