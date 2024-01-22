export class userEntity {
  constructor(
    private firstName: string,
    private lastName: string,
    private password: string,
    private id?: number
  ) {}

  getId(): number | undefined {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getPassword(): string {
    return this.password;
  }

  setId(id: number) {
    this.id = id;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  setPassword(password: string) {
    this.password = password;
  }
}
