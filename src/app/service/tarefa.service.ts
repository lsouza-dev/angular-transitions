import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tarefa } from '../interface/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private readonly API = 'http://localhost:3000/tarefas';
  private tarefasSubject = new BehaviorSubject<Tarefa[]>([]);
  tarefas$ = this.tarefasSubject.asObservable()

  constructor(private http: HttpClient) {}

  listar(): void {
    let params = new HttpParams().appendAll({
      _sort: 'id',
      _order: 'desc',
    });
    this.http.get<Tarefa[]>(this.API, { params })
      .subscribe((tarefas) => {
        let tarefasTemporarias = this.tarefasSubject.getValue();
        tarefasTemporarias = tarefasTemporarias.concat(tarefas);
        this.tarefasSubject.next(tarefasTemporarias)
      });
  }

  criar(tarefa: Tarefa): void {
    this.http.post<Tarefa>(this.API, tarefa)
      .subscribe(novaTarefa => {
        const tarefas = this.tarefasSubject.getValue()
        tarefas.unshift(novaTarefa)
        this.tarefasSubject.next(tarefas)
      });
  }

  editar(tarefaEditada: Tarefa,atualizarSubject:boolean): void {
    const url = `${this.API}/${tarefaEditada.id}`;
    this.http.put<Tarefa>(url, tarefaEditada).subscribe((tarefa) => {
      if(atualizarSubject){
        const tarefas = this.tarefasSubject.getValue()
        const index = tarefas.findIndex(tarefa => tarefa.id === tarefaEditada.id)
        if(index !== -1)
          tarefas[index] = tarefaEditada
        
        this.tarefasSubject.next(tarefas)
      }
    });
  }

  excluir(id: number): void {
    const url = `${this.API}/${id}`;
     this.http.delete<Tarefa>(url).subscribe(() => {
        const tarefas = this.tarefasSubject.getValue()
        const index = tarefas.findIndex(tarefa => tarefa.id = id)
        if(index !== -1){
          tarefas.splice(index,1)
          this.tarefasSubject.next(tarefas)
        }
     });
  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
     return this.http.get<Tarefa>(url);
  }

  atualizarStatusTarefa(tarefa: Tarefa): void {
    tarefa.statusFinalizado = !tarefa.statusFinalizado;
     this.editar(tarefa,false);
  }
}
