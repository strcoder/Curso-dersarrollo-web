#include <iostream>
using namespace std;

struct NODO
{
  int dato;
  NODO *siguiente;
};

struct LISTA
{
  NODO *head;
  int size;
};

void insertarNodo(LISTA *, int);
void imprimirLista(LISTA *);
void unirListas(LISTA *, LISTA *);
void imprimeLote(LISTA *, LISTA *);

int main () {
  LISTA *lista = new LISTA();
  LISTA *lista2 = new LISTA();
  lista->head = NULL;
  lista->size = 0;
  lista2->head = NULL;
  lista2->size = 0;
  insertarNodo(lista, 1);
  insertarNodo(lista, 3);
  insertarNodo(lista, 0);
  insertarNodo(lista, 2);
  insertarNodo(lista2, 16);
  insertarNodo(lista2, 25);
  insertarNodo(lista2, 31);
  insertarNodo(lista2, 36);

  cout << "Lista 1:\n";
  imprimirLista(lista);
  cout << "Lista 2:\n";
  imprimirLista(lista2);

  // unirListas(lista, lista2);
  // cout << "Lista 3:\n";
  // imprimirLista(lista);
  cout << "\nLista lote:\n";
  imprimeLote(lista, lista2);
  return 0;
}

void insertarNodo(LISTA *lista, int n) {
  NODO *nuevo_nodo = new NODO();
  nuevo_nodo->dato = n;
  nuevo_nodo->siguiente = NULL;

  if (lista->head == NULL)
  {
    lista->head = nuevo_nodo;
  } else {
    NODO *aux = lista->head;
    while (aux->siguiente != NULL) {
      aux = aux->siguiente;
    }
    aux->siguiente = nuevo_nodo;
  }
  lista->size++;

  return;
}

void imprimirLista(LISTA *lista) {
  NODO *aux = lista->head;
  while (aux != NULL)
  {
    cout << aux->dato << "\n";
    aux = aux->siguiente;
  }

  return;
}

void unirListas(LISTA *lista1, LISTA *lista2) {
  LISTA *lista = new LISTA();
  NODO *aux1 = lista1->head;
  NODO *aux2 = lista2->head;

  while (aux1->siguiente != NULL)
  {
    aux1 = aux1->siguiente;
  }
  aux1->siguiente = aux2;

  return;
}

void imprimeLote(LISTA *lista1, LISTA *lista2) {
  NODO *aux1 = lista1->head;
  NODO *aux2 = lista2->head;
  int i = 0;
  while (aux2 != NULL)
  {
    while (aux1 != NULL || i > aux2->dato)
    {
      aux1 = aux1->siguiente;
      i++;
    }
    if (aux1 != NULL)
    {
      cout << aux1->dato << "\n";
    }
    i = 0;
    aux1 = lista1->head;
    aux2 = aux2->siguiente;
  }
}