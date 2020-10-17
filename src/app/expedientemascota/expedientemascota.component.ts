import { Component, OnInit } from '@angular/core';
import { Inject, Injectable, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-expedientemascota',
  templateUrl: './expedientemascota.component.html',
  styleUrls: ['./expedientemascota.component.css']
})
export class ExpedientemascotaComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
  }

}
