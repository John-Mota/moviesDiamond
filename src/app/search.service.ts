import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Serviço para armazena o resultado da pesquisa
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searcResults: any[] = [];

  constructor(private hhtp: HttpClient) { }

  // Método que atualiza o objeto searchResults com os novos resultados de pesquisa
  
}
