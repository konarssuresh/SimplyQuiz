export class QuestionBase {
  [x: string]: any;
  id: number = 0;
  question: string = '';
  options: string[] = [];
  answer: string[] = [];

  constructor(
    id: number,
    question: string,
    options: string[],
    answer: string[]
  ) {
    this.id = id;
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}
