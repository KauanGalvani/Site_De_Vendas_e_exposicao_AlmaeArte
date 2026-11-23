import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sobre',
  templateUrl: './sobre.html',
})
export class Sobre implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const host = this.elementRef.nativeElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('reveal-visible');
          this.observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    );

    host.querySelectorAll('.sobre-reveal').forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
