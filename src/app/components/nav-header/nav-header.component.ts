import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header-container">
      <div class="top-header">
        <div class="left-section">
          <div class="logo">
            <img src="assets/logo.svg" alt="illpeople music">
            <span>illpeople music</span>
          </div>
          <div class="search-wrapper">
            <input type="text" placeholder="Search top beats">
            <div class="general-dropdown">
              General
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div class="right-section">
          <button class="sign-in">Sign In</button>
          <button class="start-selling">Start Selling</button>
        </div>
      </div>
      <nav class="main-nav">
        <a href="#" class="active">BEATS</a>
        <a href="#">GENRES</a>
      </nav>
    </div>
  `,
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {} 