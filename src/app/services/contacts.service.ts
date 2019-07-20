import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from './../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  storeContact(contact: Contact) {
    sessionStorage.setItem('contact', JSON.stringify(contact));
  }

  getContacts(pagination): Observable<Contact[]> {
    return this.http
      .get<Contact[]>(
        `https://randomuser.me/api/?nat=br&page=${pagination.page}&results=${
          pagination.results
        }`
      )
      .pipe();
  }
}
