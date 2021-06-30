import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionData } from '../../assets/questionsData';
import { QuestionBase } from '../models/QuestionBase';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  isLinear: boolean = true;
  questData: QuestionBase[] = QuestionData;
  constructor(public fb: FormBuilder) {}

  public responses: FormGroup = this.fb.group({
    questions: this.fb.array([], [Validators.required]),
  });

  get questions(): FormArray {
    return this.responses.get('questions') as FormArray;
  }

  initialiseForm(): void {
    this.questData.forEach((quesData) => {
      let group: any = {
        [quesData.id]: this.fb.control('', []),
      };
      this.questions.push(this.fb.group(group));
    });
  }

  ngOnInit(): void {
    this.initialiseForm();
    console.log(this.responses);
  }
}
