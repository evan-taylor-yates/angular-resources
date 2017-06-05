import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Template-Driven Forms
import { ReactiveFormsModule } from '@angular/forms'; // Model-Driven Forms
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// MAIN COMPONENT
import { AppComponent } from './components/app.component';

// PIPES
import { SortPipe } from './pipes/app.sort';

// SERVICES
import { MyDataService } from './services/my-data.service';

// MY COMPONENTS
import { BaseConverterComponent } from './components/base-converter/base-converter.component';
import { ModelDrivenFormComponent } from './components/model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { ProductComponent } from './To Delete/product/product.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ComponentIteratorComponent } from './components/component-iterator/component-iterator.component';
import { ItemComponent } from './components/component-iterator/item/item.component';
import { ClassProjectComponent } from './components/class-project/class-project.component';
import { HeaderComponent } from './components/class-project/header/header.component';
import { RecipesComponent } from './components/class-project/recipes/recipes.component';
import { RecipeListComponent } from './components/class-project/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/class-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/class-project/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './components/class-project/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/class-project/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ServerParentComponent } from './components/server-parent/server-parent.component';
import { CockpitComponent } from './components/server-parent/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-parent/server-element/server-element.component';
import { EventEmitterComponent } from './components/event-receiver/event-emitter/event-emitter.component';
import { EventReceiverComponent } from './components/event-receiver/event-receiver.component';



@NgModule({
  declarations: [
    SortPipe, // Must be declared before the component that uses it
    AppComponent,
    BaseConverterComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent,
    BasicListComponent,
    ProductComponent,
    AnimationsComponent,
    BindingComponent,
    DirectivesComponent,
    ComponentIteratorComponent,
    ItemComponent,
    ClassProjectComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ServerParentComponent,
    CockpitComponent,
    ServerElementComponent,
    EventEmitterComponent,
    EventReceiverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
