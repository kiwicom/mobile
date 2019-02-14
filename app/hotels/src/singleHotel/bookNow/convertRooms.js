// @flow

const convertRooms = (selection: {
  [string]: number,
}): Array<{| id: string, count: number |}> => {
  return Object.entries(selection)
    .filter((entry: any) => entry[1] > 0)
    .map((entry: any) => ({
      id: entry[0],
      count: entry[1],
    }));
};

export default convertRooms;
