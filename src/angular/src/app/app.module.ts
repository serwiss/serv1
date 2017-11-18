import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarAppComponent } from './calendar-app/calendar-app.component';
import { DraggableDashboardComponent } from './draggable-dashboard/draggable-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserSettingsGeneralComponent } from './user-settings-general/user-settings-general.component';
import { UserSettingsContactInfoComponent } from './user-settings-contact-info/user-settings-contact-info.component';
import { UserSettingsExperienceComponent } from './user-settings-experience/user-settings-experience.component';
import { UserSettingsEducationComponent } from './user-settings-education/user-settings-education.component';
import { UserSettingsOrganizationsComponent } from './user-settings-organizations/user-settings-organizations.component';
import { UserSettingsNotificationsComponent } from './user-settings-notifications/user-settings-notifications.component';
import { UserSettingsBillingComponent } from './user-settings-billing/user-settings-billing.component';
import { ProfileComponent } from './profile/profile.component';
import { CrmContactComponent } from './crm-contact/crm-contact.component';
import { CrmRolePermissionComponent } from './crm-role-permission/crm-role-permission.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { PricingSubscriptionComponent } from './pricing-subscription/pricing-subscription.component';
import { CrmContactsComponent } from './crm-contacts/crm-contacts.component';
import { CrmUserListComponent } from './crm-user-list/crm-user-list.component';
import { CrmUserGridComponent } from './crm-user-grid/crm-user-grid.component';
import { SharedModule } from "./shared/shared.module";
import { FaqComponent } from './faq/faq.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component';
import { ProfileCustomerComponent } from './profile-customer/profile-customer.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    CalendarAppComponent,
    DraggableDashboardComponent,
    UserSettingsComponent,
    PageNotFoundComponent,
    UserSettingsGeneralComponent,
    UserSettingsContactInfoComponent,
    UserSettingsExperienceComponent,
    UserSettingsEducationComponent,
    UserSettingsOrganizationsComponent,
    UserSettingsNotificationsComponent,
    UserSettingsBillingComponent,
    ProfileComponent,
    CrmContactComponent,
    CrmRolePermissionComponent,
    PricingPlanComponent,
    PricingSubscriptionComponent,
    CrmContactsComponent,
    CrmUserListComponent,
    CrmUserGridComponent,
    FaqComponent,
    DocumentationComponent,
    EmailTemplatesComponent,
    ProfileCustomerComponent,
    BlankPageComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'calendar', component: CalendarAppComponent },
      { path: 'draggable-dashboard', component: DraggableDashboardComponent },
      {
        path: 'user-settings',
        component: UserSettingsComponent,
        children: [
          { path: '', redirectTo: 'general', pathMatch: 'full' },
          { path: 'general', component: UserSettingsGeneralComponent },
          { path: 'contact-info', component: UserSettingsContactInfoComponent },
          { path: 'experience', component: UserSettingsExperienceComponent },
          { path: 'education', component: UserSettingsEducationComponent },
          { path: 'organizations', component: UserSettingsOrganizationsComponent },
          { path: 'notifications', component: UserSettingsNotificationsComponent },
          { path: 'billing', component: UserSettingsBillingComponent }
        ]
      },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile-customer', component: ProfileCustomerComponent },
      { path: 'crm/contact', component: CrmContactComponent },
      { path: 'crm/contacts', component: CrmContactsComponent },
      { path: 'crm/users/list', component: CrmUserListComponent },
      { path: 'crm/users/grid', component: CrmUserGridComponent },
      { path: 'crm/roles-and-permissions', component: CrmRolePermissionComponent },
      { path: 'pricing/plans', component: PricingPlanComponent },
      { path: 'pricing/subscriptions', component: PricingSubscriptionComponent },
      { path: 'projects', loadChildren: './projects/projects.module'},
      { path: 'form', loadChildren: './form/form.module'},
      { path: 'uikit', loadChildren: './uikit/uikit.module'},
      { path: 'components', loadChildren: './components/components.module'},
      { path: 'payment', loadChildren: './payment/payment.module'},
      { path: 'email-templates', component: EmailTemplatesComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'pages/blank', component: BlankPageComponent },
      { path: 'pages/contacts', component: ContactsComponent },
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ], {
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
