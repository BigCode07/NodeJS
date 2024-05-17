// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

import { get } from "http";
import { getAge, getUUID } from "../plugins";

// const { getAge, getUUID } = require('../plugins');
interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const BuildMakerPerson = ({
  getAge,
  getUUID,
}: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID,
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};
