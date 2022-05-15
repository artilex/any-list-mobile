export class TDate {
  private year: number;
  private readonly month: number;
  private readonly day: number;

  constructor(dateTime?: string) {
    const date = dateTime ? new Date(dateTime) : new Date();

    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDate();
  }

  getDate(): string {
    const year = this.year.toString();
    const month = this.month < 10 ? `0${this.month}` : this.month.toString();
    const day = this.day < 10 ? `0${this.day}` : this.day.toString();

    return `${year}-${month}-${day}`;
  }
}
