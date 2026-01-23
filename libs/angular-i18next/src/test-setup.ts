import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';
import { TestBed } from "@angular/core/testing";
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';


setupZonelessTestEnv();
TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
