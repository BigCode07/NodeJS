import { SaveFile } from "../../../src/domain/use-cases/save-file.use-case";
describe("SaveFileUseCase", () => {
  test("Should create table with default values", () => {
    const saveFile = new SaveFile();

    const options = {
      fileContent: "test content",
    };

    const result = saveFile.execute(options);
  });
});
