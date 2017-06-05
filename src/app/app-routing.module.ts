import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { EventReceiverComponent } from './components/event-receiver/event-receiver.component';



const routes: Routes = [
  { path: '', redirectTo: 'base-converter', pathMatch: 'full' },
  { path: 'base-converter',          component: BaseConverterComponent },
  { path: 'basic-list',          component: BasicListComponent },
  { path: 'model-driven-form',     component: ModelDrivenFormComponent },
  { path: 'template-driven-form',          component: TemplateDrivenFormComponent },
  { path: 'product',          component: ProductComponent },
  { path: 'animations',          component: AnimationsComponent },
  { path: 'binding',          component: BindingComponent },
  { path: 'directives',          component: DirectivesComponent },
  { path: 'component-iterator',          component: ComponentIteratorComponent },
  { path: 'event-receiver',          component: EventReceiverComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
