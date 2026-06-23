import { Mail, MapPin, Phone } from "lucide-react";

const instagramImages = [
  "https://alremouz.com/wp-content/uploads/2024/04/25-150x150.webp",
  "https://alremouz.com/wp-content/uploads/2024/04/24-150x150.webp",
  "https://alremouz.com/wp-content/uploads/2025/05/3-1-150x150.webp",
  "https://alremouz.com/wp-content/uploads/2024/04/22-150x150.webp",
  "https://alremouz.com/wp-content/uploads/2024/04/21-150x150.webp",
  "https://alremouz.com/wp-content/uploads/2025/05/2-1-150x150.webp",
];

const Footer = () => {
  return (
    <footer className="bg-mesh relative overflow-hidden py-16">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://alremouz.com/wp-content/uploads/2025/04/alremouz.png"
              alt="Alremouz Logo"
              className="h-12 mb-6"
            />
            
              
  
            
          
            
            <div className="grid grid-cols-3 gap-2 mt-4">
              {instagramImages.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden aspect-square">
                  <img src={img} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:rmzagift@gmail.com" className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">
                rmzagift@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-foreground/80">Sharjah -University Road- Industrial Area 13 - UAE</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+971544344620" className="font-body text-sm text-foreground/80 hover:text-primary transition-colors">
                050 765 3223
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
             Follow Us
           </h3>
            <div className="flex gap-4">

  {/* Instagram */}
  <a href="https://www.instagram.com/alremouz_" target="_blank" rel="noopener noreferrer">
    <svg className="w-5 h-5 hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com/Rmza-Group-Al-Remouz-Adv-Gifts-Supply" target="_blank" rel="noopener noreferrer">
    <svg className="w-5 h-5 hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.4c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.4l-.4 2.9h-2v7A10 10 0 0022 12z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a href="https://www.tiktok.com/@alremouz_adv" target="_blank" rel="noopener noreferrer">
    <svg className="w-5 h-5 hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.5 2c.3 2.1 1.9 3.7 4 4v3.1c-1.4 0-2.8-.4-4-1.2v6.3c0 3.6-2.9 6.5-6.5 6.5S3.5 17.8 3.5 14.2 6.4 7.7 10 7.7c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2-1.8 0-3.2 1.4-3.2 3.2S8.2 17.2 10 17.2s3.2-1.4 3.2-3.2V2h3.3z"/>
    </svg>
  </a>

</div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alremouz Adv. & Gifts Supply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
