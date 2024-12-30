import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    NgFor,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent implements OnInit {
  
  items = [
    {
      values: ['CodePen', 'About', 'Blog', 'Podcast', 'Documentation', 'Support', 'Advertise'],
    },
    {
      values: ['For', 'Teams', 'Education', 'Privacy', 'Embeds', 'Asset', 'Hosting'],
    },
    {
      values: ['Social', 'YouTube', '𝕏', 'Instagram', 'Mastodon'],
    },
    {
      values: ['Community', 'Spark', 'Challenges', 'Topics', 'Code of Conduct'],
    }
  ];

  ngOnInit(): void {

  }
}
