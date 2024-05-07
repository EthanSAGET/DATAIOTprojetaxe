const prisma = require("../prisma/config.js");

const GETHouse = async () => {
  return await prisma.house.findUnique({
    where: {
      id: 1,
    },
  });
};

const CREATEHouse = async (houseName) => {
  return await prisma.house.create({
    data: {
      house: houseName,
    },
  });
};

const UPDATEHouse = async (houseName) => {
  return await prisma.house.update({
    where: { id: 1 },
    data: {
      house: houseName,
    },
  });
};

module.exports = {
  GETHouse,
  CREATEHouse,
  UPDATEHouse,
};
