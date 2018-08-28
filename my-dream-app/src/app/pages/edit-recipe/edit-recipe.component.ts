import { Recipe } from './../../classes/recipe';
import { RecipeService } from './../../services/recipe.service';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
