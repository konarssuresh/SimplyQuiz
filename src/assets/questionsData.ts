import { QuestionBase } from 'src/app/models/QuestionBase';

export const QuestionData: QuestionBase[] = [
  {
    id: 1,
    question: 'Who is sometimes called as Father of AngularJS',
    answer: ['Misko Hevery'],
    options: ['Brad Green', 'Igor Minor', 'Misko Hevery', 'Brian Ford'],
  },
  {
    id: 2,
    question: 'Which of the following is true about ng-init directive?',
    answer: ['Both of the above.'],
    options: [
      'ng-init directive initializes an AngularJS Application data.',
      'ng-init directive is used to put values to the variables to be used in the application.',
      'Both of the above.',
      'None of the above.',
    ],
  },
  {
    id: 3,
    question:
      'Which of the following directive is used to initialize an angular app',
    answer: ['ng-app'],
    options: ['ng-model', 'ng-app', 'ng-controller', 'None of the above'],
  },
  {
    id: 4,
    question:
      'ng-app directive defines and links an AngularJS application to HTML.',
    answer: ['true'],
    options: ['true', 'false'],
  },
  {
    id: 5,
    question: 'AngularJS expressions are written using.',
    options: [
      'double braces like {{ expression}}',
      'single braces like {expression}',
      'small bracket like (expression)',
      'capital bracket like [expression]',
    ],
    answer: ['double braces like {{ expression}}'],
  },
  {
    id: 6,
    question: 'AngularJS bootstraps itself during config phase.',
    options: ['true', 'false'],
    answer: ['true'],
  },
  {
    id: 7,
    question: ' Angular initializes based upon which of the following scenario',
    options: [
      'DOMContentLoaded event happens',
      'document.readyState is set to complete',
      'Both of the above',
      'None of the above',
    ],
    answer: ['Both of the above'],
  },
  {
    id: 8,
    question: 'AngularJS is an MVC based framework',
    options: ['false', 'true'],
    answer: ['true'],
  },
  {
    id: 9,
    question: 'AngularJS is a library',
    options: ['true', 'false'],
    answer: ['false'],
  },
];
