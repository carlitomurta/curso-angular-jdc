import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from './../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  pagination = { page: 1, results: 10 };
  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.receiveContacts();
  }

  openContact(contact: Contact) {
    this.contactService.storeContact(contact);
    this.router.navigate(['/detalhe']);
  }

  receiveContacts() {
    this.contactService
      .getContacts(this.pagination)
      .pipe()
      .subscribe(
        (res: any) => {
          this.contacts = [...this.contacts, ...res.results];
        },
        error => {}
      );
  }

  loadMore() {
    this.pagination.page += 1;
    this.receiveContacts();
  }
}
