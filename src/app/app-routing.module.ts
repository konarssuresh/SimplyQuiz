import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: InstructionsComponent },
  { path: 'take-exam', component: QuestionsComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
