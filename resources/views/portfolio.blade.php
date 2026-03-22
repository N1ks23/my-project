@extends('layouts.app')

@section('content')
  <section class="profile-head stagger">
    <img class="avatar" src="{{ asset('assets/3.jpg') }}" alt="Portrait of {{ $portfolio['profile']['name'] ?? 'Leonisis M. Asis' }}" onerror="this.onerror=null;this.src='https://placehold.co/600x600/e4e7ec/122033?text=Leonisis';">

    <div class="intro">
      <h1 id="profileName"><span id="profileNameText">{{ $portfolio['profile']['name'] ?? 'Leonisis M. Asis' }}</span> <span class="verified" aria-label="verified">&#10003;</span></h1>
      <p class="meta meta-location" id="profileLocation">{{ $portfolio['profile']['location'] ?? 'Bunakan, Madridejos, Cebu' }}</p>
      <p class="title" id="profileTitle">{{ $portfolio['profile']['title'] ?? 'Front-end Developer | Web Developer' }}</p>
      <div class="actions">
        <a class="btn btn-dark" id="resumeButton" href="{{ $portfolio['profile']['resume'] ?? '#' }}" target="_blank" rel="noopener">
          <span class="btn-icon btn-icon-doc" aria-hidden="true"></span>
          <span>Resume</span>
          <span class="btn-icon btn-icon-arrow" aria-hidden="true"></span>
        </a>
        <a class="btn btn-light" id="emailButton" href="mailto:{{ $portfolio['profile']['email'] ?? 'Leonisisasis23@gmail.com' }}">
          <span class="btn-icon btn-icon-mail" aria-hidden="true"></span>
          <span>Send Email</span>
        </a>
      </div>
    </div>

    <button class="theme-toggle" id="themeToggle" type="button" aria-label="Toggle theme" aria-pressed="false">
      <span class="toggle-icon sun" aria-hidden="true"></span>
      <span class="toggle-icon moon" aria-hidden="true"></span>
      <span class="knob"></span>
    </button>
  </section>

  <section class="grid two-col stagger parallax" data-parallax="0.05">
    <article class="card">
      <h2 class="section-title icon-about">About</h2>
      <div id="aboutText"></div>
    </article>

    <article class="card">
      <h2 class="section-title icon-experience">Experience</h2>
      <ol class="timeline" id="experienceList"></ol>
    </article>
  </section>

  <section class="card stagger parallax" data-parallax="0.06">
    <div class="card-head">
      <h2 class="section-title icon-stack">Tech Stack</h2>
      <a class="view-link" href="#">View All &#8594;</a>
    </div>
    <div class="stack-grid" id="stackGrid"></div>
  </section>

  <section class="grid mid-grid stagger parallax" data-parallax="0.07">
    <article class="card">
      <h2 class="section-title icon-social">Social Links</h2>
      <div class="social-list" id="socialLinks"></div>
    </article>

    <div class="right-rail">
      <article class="card">
        <h2 class="section-title icon-beyond">Beyond Coding</h2>
        <p id="beyondCoding" class="reveal-text"></p>
      </article>

      <article class="card">
        <div class="card-head">
          <h2 class="section-title icon-projects">Recent Projects</h2>
          <a class="view-link" href="#">View All &#8594;</a>
        </div>
        <div class="projects-grid" id="projectsGrid"></div>
      </article>
    </div>
  </section>

  <section class="card gallery-card stagger parallax" data-parallax="0.08">
    <h2 class="section-title icon-gallery">Gallery</h2>
    <div class="gallery-shell">
      <button class="gallery-nav" id="galleryPrev" type="button" aria-label="Previous">&#8249;</button>
      <div class="gallery" id="gallery"></div>
      <button class="gallery-nav" id="galleryNext" type="button" aria-label="Next">&#8250;</button>
    </div>
  </section>

  <footer class="footer">
    <p>&copy; <span id="year"></span> <span id="footerName">{{ $portfolio['profile']['name'] ?? 'Leonisis M. Asis' }}</span>. All rights reserved.</p>
  </footer>

  <button class="chat-launcher" id="chatLauncher" type="button" aria-controls="chatWidget" aria-expanded="false">
    <span class="chat-launcher-icon" aria-hidden="true"></span>
    <span>Chat with Nikko</span>
  </button>

  <section class="chat-widget" id="chatWidget" aria-hidden="true">
    <header class="chat-head">
      <div class="chat-identity">
        <img
          class="chat-avatar"
          src="{{ asset('assets/3.jpg') }}"
          alt="Nikko avatar"
          onerror="this.onerror=null;this.src='https://placehold.co/80x80/e4e7ec/122033?text=M';"
        >
        <div class="chat-meta">
          <h3>Chat with Nikko</h3>
          <p><span class="chat-status-dot" aria-hidden="true"></span> Online</p>
        </div>
      </div>
      <button class="chat-close" id="chatClose" type="button" aria-label="Close chat">&times;</button>
    </header>

    <div class="chat-messages" id="chatMessages"></div>

    <form class="chat-input" id="chatForm">
      <label class="sr-only" for="chatMessageInput">Message Nikko</label>
      <input id="chatMessageInput" type="text" placeholder="Ask Nikko AI..." autocomplete="off">
      <button type="submit" aria-label="Send message">
        <span class="chat-send-icon" aria-hidden="true"></span>
      </button>
    </form>
  </section>

  <script>
    window.__PORTFOLIO__ = @json($portfolio);
  </script>
@endsection
