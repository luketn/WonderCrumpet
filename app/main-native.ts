// this import should be first in order to load some required settings (like globals and reflect-metadata)
import "./processPatch";
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app";

nativeScriptBootstrap(AppComponent);