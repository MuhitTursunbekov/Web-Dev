import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Iphone 16 pro max черный',
      description: 'Качественный и стильный',
      rating: 5,
      image: './assets/iphone16promax.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=111810000',
    },
    {
      name: 'Iphone 16 pro max золотистый',
      description: 'Качественный и золотистый',
      rating: 4.9,
      image: './assets/iphone16promaxзолотистый.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=111810000',
    },
    {
      name: 'Iphone 16 pro max серебристый',
      description: 'Качественный и серебристый',
      rating: 5,
      image: './assets/iphone16promaxсеребристый.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=111810000',
    },
    {
      name: 'Iphone 16 pro max белый',
      description: 'Качественный и белый',
      rating: 5,
      image: './assets/iphone16promaxбелый.jpg',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-belyi-123890421/?c=111810000',
    },
    {
      name: 'MacBook Pro 16.2',
      description: ' 36 Гб / SSD 1024 Гб',
      rating: 5,
      image: './assets/macbookpro16.2.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2-36-gb-ssd-1024-gb-macos-mx303ru-a-132510070/?c=111810000',
    },
    {
      name: 'Ноутбук ASUS ROG Zephyrus M16 16',
      description: '32 Гб / SSD 2000 Гб / Win 11 Pro',
      rating: 5,
      image: './assets/asus.jpg',
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-m16-16-32-gb-ssd-2000-gb-win-11-pro-gu604vy-nm040x-90nr0br3-m00400-110325756/?c=111810000',
    },
    {
      name: 'Дрон DJI Mavic 3 Cine с поддержкой Apple ProRes 422 HQ',
      description: 'Мощный квадрокоптер серого цвета',
      rating: 5,
      image: './assets/дрон.jpg',
      link: 'https://kaspi.kz/shop/p/dji-mavic-3-cine-seryi-105472728/?c=111810000',
    },
    {
      name: 'Планшет Apple iPad Pro 2024 Wi-Fi',
      description: '5G 11дюйм 16 Гб/2000 Гб черный',
      rating: 4.9,
      image: './assets/планшетчерный.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-5g-11-11-djuim-16-gb-2000-gb-chernyi-121143489/?c=111810000',
    },
    {
      name: 'Планшет Apple iPad Pro 2024 Wi-Fi',
      description: '5G 13 дюйм 16 Гб/1024 Гб серебристый',
      rating: 4.9,
      image: './assets/планшетсерый.jpg',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-5g-13-nanoteksturnyi-13-djuim-16-gb-1024-gb-serebristyi-121145698/?c=111810000',
    },
    {
      name: 'Sony PlayStation 5',
      description: 'Dualsense + VR2 + Horizon + Mortal Kombat 11 Ultimate + Fifa 23 + Gta 5',
      rating: 5,
      image: './assets/сони.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-dualsense-vr2-horizon-mortal-kombat-11-ultimate-fifa-23-gta-5-112899324/?c=111810000',
    },
  ];

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}