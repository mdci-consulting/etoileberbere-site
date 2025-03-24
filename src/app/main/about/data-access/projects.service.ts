import { Injectable, inject } from "@angular/core";
import { Project } from "./project.model";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly path = "/api/projects";

  constructor() {}

  public get(): Observable<Project[]> {
    return this.http.get<Project[]>(this.path).pipe(
      catchError((error) => {
        console.warn("⚠️ API indisponible, chargement des données locales.");
        return this.http.get<Project[]>("assets/projects.json");
      })
    );
  }
}

