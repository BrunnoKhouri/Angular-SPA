import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Pokemon } from './pokedex.model';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl = "http://localhost:3000/pokemons";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  } 

  read(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.baseUrl);
  }

  readById(id: string): Observable<Pokemon>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pokemon>(url);
  }
 
}