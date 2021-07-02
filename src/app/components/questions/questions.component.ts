import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionData } from '../../../assets/questionsData';
import { QuestionBase } from '../../models/QuestionBase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  isLinear: boolean = true;
  questData: QuestionBase[] = QuestionData;
  breakpoint: any = '';
  constructor(public fb: FormBuilder, private router: Router) {}

  public responses: FormGroup = this.fb.group({
    questions: this.fb.array([], [Validators.required]),
  });

  get questions(): FormArray {
    return this.responses.get('questions') as FormArray;
  }

  initialiseForm(): void {
    this.questData.forEach((quesData) => {
      let group: any = {
        [quesData.id]: this.fb.control('', [Validators.required]),
      };
      this.questions.push(this.fb.group(group));
    });
  }

  ngOnInit(): void {
    this.initialiseForm();
    console.log(this.responses);
    this.breakpoint = window.innerWidth <= 800 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 800 ? 1 : 2;
  }

  onSubmit() {
    let correctAnswers = 0;
    let totalQuestions = this.questData.length;
    let wrongAnswers = 0;
    this.responses.value.questions.forEach((questionResponse: any) => {
      const queId = Object.keys(questionResponse)[0];
      const quest = this.questData.find((que) => que.id === parseInt(queId));

      if (questionResponse[queId] === quest?.answer[0]) {
        correctAnswers += 1;
      }
    });
    wrongAnswers = totalQuestions - correctAnswers;
    this.router.navigateByUrl('/results', {
      state: { correctAnswers, totalQuestions, wrongAnswers },
    });
  }
}
