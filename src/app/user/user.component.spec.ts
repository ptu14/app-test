import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from "./user.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    // TestBed jest obiektem Angulara który pozwala nam używać mockowanych modułów, tworzyć komponenty itd.
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
    // fixture pozwala na dostanie sie do instacji komponentu, oraz wywolywania zmian
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // to jest potrzebne bo inaczje nie wykona sie ngOnInit;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user from userService', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name)
  })

  it('should user be not logged in on component start', () => {
    expect(component.isLogged).toEqual(false);
  })

  it('should display user name, when logged in', () => {
    component.isLogged = true;
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(component.user.name)
  })

  it('should not display user name, when not logged in', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  })
});
