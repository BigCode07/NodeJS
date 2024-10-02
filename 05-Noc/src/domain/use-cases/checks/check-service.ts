interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceUseCase {
  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      console.log(`${url} is okay`);
      return true;
    } catch (err) {
      console.log(`${err}`);
      return false;
    }

    return true;
  }
}