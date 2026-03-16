import { Component, OnInit } from '@angular/core';
import { TvmazeService } from '../../../core/services/tvmaze.service';
import { Show } from '../../../models/show.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show: Show | null = null;
  loading = true;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit(): void {
    this.tvmaze.getShow().subscribe({
      next: (data) => { this.show = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}