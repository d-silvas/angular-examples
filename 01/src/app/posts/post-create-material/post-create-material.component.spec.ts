import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateMaterialComponent } from './post-create-material.component';

describe('PostCreateMaterialComponent', () => {
  let component: PostCreateMaterialComponent;
  let fixture: ComponentFixture<PostCreateMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreateMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
